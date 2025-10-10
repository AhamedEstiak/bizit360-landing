"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, GraduationCap, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Careers() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities.",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Comprehensive training programs and skill-building workshops.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible schedules and supportive work environment.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description: "Market-leading salaries and performance-based incentives.",
    },
  ]

  return (
    <section id="careers" className="py-20 lg:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-4">
                Join Our Team
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Build Your Career with BizIT360
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                We're growing rapidly and looking for talented professionals to join our Bangladesh operations hub. Be
                part of a team that's transforming property preservation operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">
                View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/respect-people.png"
                alt="BizIT360 team members"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border"
            >
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
