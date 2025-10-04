import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Trusted by Leading Asset Managers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Property Preservation & Field Services — Reliable, Compliant,
              Nationwide.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We manage property field vendors and deliver timely preservation,
              inspections, and reporting for U.S. asset managers and lenders —
              supported by a skilled IT and operations team in Bangladesh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-lg"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent"
              >
                Become a Vendor
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Coverage: 48 U.S. States | 100K+ Jobs Managed | Remote
                Operations Excellence
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="/professional-property-inspector-examining-house-ex.jpg"
                  alt="Property inspection professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">99%</p>
                  <p className="text-sm text-muted-foreground">
                    SLA Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
