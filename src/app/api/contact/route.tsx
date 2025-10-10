import { type NextRequest, NextResponse } from "next/server"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 5) {
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { name, email, company, phone, message, honeypot } = body

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log("Honeypot triggered - potential bot submission")
      return NextResponse.json({ success: true }) // Return success to fool bots
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name (at least 2 characters)." }, { status: 400 })
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Please provide a message (at least 10 characters)." }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      company: company ? String(company).trim().slice(0, 100) : "",
      phone: phone ? String(phone).trim().slice(0, 20) : "",
      message: message.trim().slice(0, 1000),
      timestamp: new Date().toISOString(),
      ip,
    }

    // Send to webhook if configured
    const webhookUrl = process.env.WEBHOOK_URL
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedData),
        })

        if (!webhookResponse.ok) {
          console.error("Webhook failed:", await webhookResponse.text())
        }
      } catch (webhookError) {
        console.error("Webhook error:", webhookError)
        // Don't fail the request if webhook fails
      }
    }

    // Send email notification
    // In production, use a service like SendGrid, Resend, or AWS SES
    // For now, we'll just log it
    console.log("Email would be sent to info@bizit360.com:", sanitizedData)

    // TODO: Implement actual email sending
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: 'info@bizit360.com',
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Company:</strong> ${sanitizedData.company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
        <p><strong>Timestamp:</strong> ${sanitizedData.timestamp}</p>
      `,
    })
    */

    return NextResponse.json(
      { success: true, message: "Thank you for your message. We will get back to you soon!" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 })
  }
}
