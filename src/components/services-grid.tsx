"use client";

import { motion } from "framer-motion";
import { FileText, Users, CheckSquare, BarChart3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesGrid() {
  const services = [
    {
      icon: FileText,
      title: "Property Preservation & Maintenance",
      description:
        "Efficient intake, validation, and routing of work orders with meticulous attention to detail.",
      features: [
        "Work order processing, bid preparation, and photo documentation",
        "Vendor coordination and compliance monitoring",
        "Inspections, repairs, debris removal, and lawn service management",
        "Reporting, updates, and quality control for major U.S. preservation platforms(Safeguard, MCS, MSI, etc.)",
      ],
    },
    {
      icon: Users,
      title: "Property Management Support",
      description:
        "Seamless communication and scheduling with your vendor network for optimal execution.",
      features: [
        "Tenant screening, lease setup, and rent tracking",
        "Maintenance ticket management and vendor scheduling",
        "Move-in/move-out coordination and inspection support",
        "Admin support for accounting, CRM, and reporting",
      ],
    },
    {
      icon: CheckSquare,
      title: "Real Estate Brokerage Support",
      description:
        "Comprehensive QC processes ensuring every work order meets your standards.",
      features: [
        "Photo verification",
        "Compliance checks",
        "Documentation review",
        "Issue resolution",
      ],
    },
    {
      icon: BarChart3,
      title: "Wholesale Real Estate",
      description:
        "Detailed reporting and insights to help you make data-driven decisions.",
      features: [
        "Custom dashboards",
        "Performance metrics",
        "Trend analysis",
        "Client reporting",
      ],
    },
    {
      icon: BarChart3,
      title: "Lead Generation & Prospecting",
      description:
        "Detailed reporting and insights to help you make data-driven decisions.",
      features: [
        "Custom dashboards",
        "Performance metrics",
        "Trend analysis",
        "Client reporting",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Operations Support
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            To be the most trusted 360° business and IT consulting partner for
            real estate companies across the United States — empowering them to
            grow through smart systems, digital transformation, and reliable
            back-office support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
