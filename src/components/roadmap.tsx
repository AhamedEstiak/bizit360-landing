"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle } from "lucide-react"

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      status: "current",
      title: "Core Operations",
      description: "Work order processing, vendor coordination, QC, and reporting.",
      timeline: "Now Available",
      features: [
        "Work order intake & processing",
        "Vendor coordination & scheduling",
        "Quality control & verification",
        "Custom reporting & analytics",
      ],
    },
    {
      phase: "Phase 2",
      status: "upcoming",
      title: "Advanced Services",
      description: "Expanded capabilities including customer service and specialized support.",
      timeline: "Q3 2025",
      features: ["Customer service support", "Advanced analytics & BI", "Automated workflow tools", "API integrations"],
    },
    {
      phase: "Phase 3",
      status: "future",
      title: "Full-Service Platform",
      description: "Complete end-to-end property preservation operations management.",
      timeline: "Q1 2026",
      features: ["AI-powered insights", "Predictive analytics", "Mobile field support", "White-label solutions"],
    },
  ]

  return (
    <section id="roadmap" className="py-20 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Our Roadmap</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We're continuously expanding our capabilities to better serve the property preservation industry. Here's
            what's coming next.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card p-8 rounded-xl border-2 transition-all ${
                phase.status === "current" ? "border-accent shadow-lg" : "border-border hover:border-primary/50"
              }`}
            >
              {phase.status === "current" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Available Now
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                  {phase.timeline}
                </div>
              </div>

              <ul className="space-y-3" role="list">
                {phase.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    {phase.status === "current" ? (
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
