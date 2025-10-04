import { Home, ClipboardCheck, Wrench, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Preservation & Winterization",
      description: "Protecting vacant properties with fast response and compliance.",
    },
    {
      icon: ClipboardCheck,
      title: "Property Inspections",
      description: "Accurate, photo-documented field inspections and reporting.",
    },
    {
      icon: Wrench,
      title: "Repairs & Board-Ups",
      description: "Timely and insured vendor dispatch for emergency repairs.",
    },
    {
      icon: Trash2,
      title: "Cleanouts & Debris Removal",
      description: "Safe, efficient, and environmentally responsible cleanup.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Comprehensive Field Services</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From preservation to inspections, we deliver reliable property services across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-accent group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
