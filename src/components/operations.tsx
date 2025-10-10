"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Award, Headphones } from "lucide-react"

export default function Operations() {
  const highlights = [
    {
      icon: MapPin,
      title: "Bangladesh Operations Hub",
      description: "State-of-the-art facility in Dhaka with dedicated teams and infrastructure.",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock coverage ensures your work orders are always being processed.",
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Trained and certified team members with property preservation expertise.",
    },
    {
      icon: Headphones,
      title: "U.S.-Based Support",
      description: "American account managers provide seamless communication and oversight.",
    },
  ]

  return (
    <section id="operations" className="py-20 lg:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-operations-center-with-team-members-working.jpg"
                alt="BizIT360 Bangladesh operations center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-4">
                Our Operations
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                World-Class Operations Hub
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Our Bangladesh operations center combines cutting-edge technology with skilled professionals to deliver
                exceptional service quality. With U.S.-based oversight and 24/7 operations, we're always working for
                you.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
