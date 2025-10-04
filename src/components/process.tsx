import { FileText, Users, BarChart3 } from "lucide-react"

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Request & Schedule",
      description: "Clients submit service requests online through our streamlined platform.",
    },
    {
      number: "02",
      icon: Users,
      title: "Field Execution",
      description: "Qualified vendors complete jobs with full compliance and documentation.",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Reporting & Closeout",
      description: "Data and photos synced to client dashboards in real-time.",
    },
  ]

  return (
    <section id="process" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A streamlined three-step process designed for efficiency and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                <div className="relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
