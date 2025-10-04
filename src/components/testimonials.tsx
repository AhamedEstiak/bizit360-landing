"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Exceptional coordination and reporting. Our turnaround times have improved drastically.",
      author: "Sarah Johnson",
      role: "Asset Manager, National Servicer",
    },
    {
      quote: "The dual operations model provides us with 24/7 support and consistent quality across all states.",
      author: "Michael Chen",
      role: "VP of Operations, Regional Bank",
    },
    {
      quote: "Their vendor network is reliable and their reporting system is the best we've used.",
      author: "Jennifer Martinez",
      role: "Portfolio Manager, Investment Firm",
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
          </div>

          <div className="relative bg-surface rounded-2xl p-8 lg:p-12">
            <Quote className="w-12 h-12 text-accent/20 mb-6" />

            <blockquote className="text-xl lg:text-2xl font-medium mb-8 text-balance">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
