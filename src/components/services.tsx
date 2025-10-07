import { Home, Building2, Users, TrendingUp, Phone, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Preservation & Maintenance",
      description: "Work order processing, inspections, repairs, and compliance monitoring for preservation platforms.",
    },
    {
      icon: Building2,
      title: "Property Management Support",
      description: "Tenant screening, lease setup, maintenance coordination, and admin support.",
    },
    {
      icon: Users,
      title: "Real Estate Brokerage Support",
      description: "MLS listings, transaction coordination, CRM management, and marketing support.",
    },
    {
      icon: TrendingUp,
      title: "Wholesale Real Estate",
      description: "Lead generation, buyer outreach, CRM management, and acquisitions assistance.",
    },
    {
      icon: Phone,
      title: "Lead Generation & Prospecting",
      description: "Digital ads, cold calling, email automation, and CRM pipeline management.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Support",
      description: "Social media management, ad campaigns, content creation, and SEO services.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Our Service Lines</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            360° business and IT consulting solutions across the entire real estate ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
