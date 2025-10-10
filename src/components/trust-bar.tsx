"use client"

import { motion } from "framer-motion"

export default function TrustBar() {
  const stats = [
    { value: "10K+", label: "Work Orders Processed" },
    { value: "50+", label: "Vendor Partners" },
    { value: "99.8%", label: "QC Pass Rate" },
    { value: "24/7", label: "Operations Support" },
  ]

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
