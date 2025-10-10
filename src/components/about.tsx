"use client"

import { motion } from "framer-motion"
import { Globe2, Users, Shield, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Globe2,
      title: "Global Reach, Local Expertise",
      description: "U.S.-based leadership with a dedicated Bangladesh operations hub for round-the-clock service.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Property preservation specialists with deep industry knowledge and proven track records.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous QC processes ensure 99.8% accuracy across all work orders and reporting.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Streamlined workflows and 24/7 operations mean faster processing and response times.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Partner in Property Preservation Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            BizIT360 bridges the gap between U.S. property preservation companies and world-class operational support.
            We combine American business standards with Bangladesh's talented workforce to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
