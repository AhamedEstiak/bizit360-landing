import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Process from "@/components/process"
import Coverage from "@/components/coverage"
import VendorNetwork from "@/components/vendor-network"
import Careers from "@/components/careers"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <AboutUs />
      <Services />
      <Process />
      <Coverage />
      <VendorNetwork />
      <Careers />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
