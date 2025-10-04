import { MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function Coverage() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Map Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/united-states-map-with-network-connections-showing.jpg"
                  alt="U.S. Coverage Map"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bangladesh indicator */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <Globe className="w-6 h-6" />
                <span className="font-bold text-lg">Remote Operations Hub</span>
              </div>
              <p className="text-sm text-accent-foreground/90">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Nationwide Coverage</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Dual Operations Model
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our innovative approach combines local U.S. field presence with
              24/7 support from our Bangladesh operations center — ensuring
              speed, accuracy, and scalability.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">48 U.S. States</h4>
                  <p className="text-muted-foreground text-sm">
                    Extensive vendor network across the continental United
                    States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">24/7 Remote Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Skilled IT and operations team providing round-the-clock
                    service
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
