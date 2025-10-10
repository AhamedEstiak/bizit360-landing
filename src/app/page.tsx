import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import About from "@/components/about"
import ServicesGrid from "@/components/services-grid"
import Process from "@/components/process"
import Operations from "@/components/operations"
import Roadmap from "@/components/roadmap"
import Careers from "@/components/careers"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <ServicesGrid />
      <Process />
      <Operations />
      <Roadmap />
      <Careers />
      <ContactForm />
      <Footer />
    </main>
  )
}
