import { Button } from "@/components/ui/button"
import { Briefcase, Clock, TrendingUp, Users } from "lucide-react"

export default function Careers() {
  const perks = [
    { icon: TrendingUp, label: "Growth-oriented environment" },
    { icon: Clock, label: "Flexible schedules" },
    { icon: Users, label: "Collaborative culture" },
    { icon: Briefcase, label: "Long-term stability" },
  ]

  return (
    <section id="careers" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/diverse-remote-team-collaborating-on-computers-in-.jpg"
                alt="Remote team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              <span>We're Hiring</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Join Our Remote Operations Team in Bangladesh
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We're building a skilled remote workforce handling data, QA, and vendor coordination. Join a
              growth-oriented environment with flexible schedules and long-term stability.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {perks.map((perk, index) => {
                const Icon = perk.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{perk.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent-dark">
                See Open Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
