"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Onboarding",
      description: "We learn your systems, standards, and workflows to ensure seamless integration.",
    },
    {
      number: "02",
      title: "Setup & Training",
      description: "Our team is trained on your specific processes and quality requirements.",
    },
    {
      number: "03",
      title: "Pilot Phase",
      description: "Start with a controlled pilot to validate quality and refine workflows.",
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Gradually scale operations while continuously optimizing for efficiency.",
    },
  ]

  return (
    <section id="process" className="py-20 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Simple, Proven Process
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Our structured approach ensures a smooth transition and rapid time-to-value for your operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
