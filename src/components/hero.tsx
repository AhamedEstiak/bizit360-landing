"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const highlights = ["U.S.-Based Partnership", "Bangladesh Operations Hub", "24/7 Support"]

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Property Preservation Operations, <span className="text-primary">Perfected</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Your trusted U.S.-based operations partner with a world-class Bangladesh hub. We handle work order
              processing, vendor coordination, QC, and reporting—so you can focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                <Link href="#contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-office-workspace-with-professionals-collabo.jpg"
                alt="BizIT360 operations team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border"
            >
              <div className="text-3xl font-bold text-primary">99.8%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border"
            >
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
