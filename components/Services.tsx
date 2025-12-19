import { Camera, Building2, Home, MapPin, Clock, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Architecture",
      description: "Stunning photography of office buildings, retail spaces, and commercial developments that showcase architectural excellence.",
      features: ["Exterior & Interior", "Twilight Photography", "Drone Aerials"]
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Capturing the warmth and character of luxury homes, condominiums, and residential developments.",
      features: ["Lifestyle Integration", "Natural Lighting", "Detail Shots"]
    },
    {
      icon: MapPin,
      title: "Hospitality Venues",
      description: "Photography that conveys the atmosphere and experience of hotels, restaurants, and entertainment spaces.",
      features: ["Ambiance Capture", "Guest Experience", "Event Spaces"]
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description: "State-of-the-art cameras and lighting for exceptional image quality"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Fast turnaround with high-resolution images delivered digitally"
    },
    {
      icon: Award,
      title: "Award-Winning Work",
      description: "Recognized excellence in architectural photography worldwide"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-primary-500 mb-6">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized architectural photography that captures the essence and beauty 
            of exceptional design, creating images that inspire and endure.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-primary-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-4">Why Choose Sarah Chen Photography</h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Professional excellence meets artistic vision in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-primary-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-12">
            <h3 className="text-3xl font-light text-white mb-4">
              Ready to Showcase Your Architecture?
            </h3>
            <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create compelling images that capture the true essence of your architectural vision.
            </p>
            <button className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}