import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function VendorNetwork() {
  const benefits = ["Consistent work orders", "Transparent communication", "Timely payments", "Professional support"]

  return (
    <section id="vendors" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Join Our Trusted Vendor Network</h2>

            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              We partner with qualified field vendors across the United States. Join our network to receive consistent
              work orders, transparent communication, and timely payments.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg" variant="secondary" className="group">
                Apply as Vendor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/professional-contractor-working-on-property-mainte.jpg" alt="Vendor at work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
