import { Building2, Target, CheckCircle, Globe2 } from "lucide-react"

const coreStrengths = [
  {
    title: "Real Estate Process Expertise",
    description: "Preservation, Management, Brokerage, Wholesale"
  },
  {
    title: "IT & Business Consulting",
    description: "Experience across diverse verticals"
  },
  {
    title: "Skilled Remote Workforce",
    description: "Process automation capability"
  },
  {
    title: "Proven Results",
    description: "Marketing, operations, and client support scalability"
  }
]

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About BizIT360
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            BizIT360 is a U.S.-focused business and IT consulting company providing 360° solutions
            across the real estate industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Company Overview</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We deliver end-to-end operational, marketing, and digital solutions for the real estate industry.
              By combining business intelligence, IT expertise, and real estate domain knowledge, we help
              property firms, investors, and brokers operate more efficiently, grow faster, and scale with confidence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services cover the entire real estate ecosystem — from property preservation and management
              to brokerage back-office, wholesale operations, and digital lead generation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted 360° business and IT consulting partner for real estate companies
              across the United States — empowering them to grow through smart systems, digital transformation,
              and reliable back-office support.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center mb-8 justify-center">
            <Globe2 className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Our Approach</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">U.S. Market Experience</h4>
              <p className="text-gray-700">
                Deep understanding of U.S. real estate markets, regulations, and industry standards
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Delivery Model</h4>
              <p className="text-gray-700">
                Cost-effective solutions through skilled global support while maintaining compliance
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-700 font-medium">
              Ensuring every process, platform, and partnership contributes to long-term growth
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Our Core Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((strength, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <h4 className="font-semibold text-gray-900 leading-tight">{strength.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">360° Support for Real Estate Success</h3>
            <p className="text-lg opacity-90">
              We help our clients bridge operational gaps, enhance productivity, and leverage
              technology-driven workflows that deliver measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}