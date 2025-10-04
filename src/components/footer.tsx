import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Vendors", href: "#vendors" },
    { label: "Careers", href: "#careers" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-surface-dark text-text-inverse py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
                <span className="absolute -bottom-1 -right-1 bg-accent text-white text-[10px] font-bold px-1 rounded">
                  360
                </span>
              </div>
              <div>
                <span className="font-bold text-xl">
                  Biz<span className="text-primary">IT</span>360
                </span>
                <p className="text-xs text-text-inverse/60">
                  Property Preservation
                </p>
              </div>
            </div>
            {/* </CHANGE> */}
            <p className="text-text-inverse/70 mb-6 leading-relaxed max-w-md">
              Property Preservation Excellence — Powered by People, Process, and
              Performance.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-text-inverse/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-text-inverse/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-inverse/70 hover:text-text-inverse transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-inverse/70 hover:text-text-inverse transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-inverse/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-text-inverse/70 text-center md:text-left">
              <p>
                U.S. Office – New York, NY | Remote Office – Dhaka, Bangladesh
              </p>
            </div>
            <div className="text-sm text-text-inverse/70">
              © 2025 BizIT360. All rights reserved.
            </div>
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
