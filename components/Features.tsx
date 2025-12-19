'use client'

import { Camera, Award, Eye, BookOpen, Building, Star } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Building,
      title: "Professional Architectural Photography",
      description: "Specialized photography services for top-tier publications and prestigious architectural firms worldwide."
    },
    {
      icon: Award,
      title: "Award-Winning Expertise",
      description: "Recognized by industry leaders with multiple awards for excellence in architectural photography."
    },
    {
      icon: Eye,
      title: "Minimalist Aesthetic",
      description: "Clean, sophisticated approach that highlights architectural details while maintaining visual harmony."
    },
    {
      icon: BookOpen,
      title: "Published Work",
      description: "Featured in prestigious design magazines and publications, showcasing exceptional architectural projects."
    },
    {
      icon: Camera,
      title: "Technical Excellence",
      description: "State-of-the-art equipment and techniques ensuring the highest quality architectural documentation."
    },
    {
      icon: Star,
      title: "Collaborative Process",
      description: "Working closely with architects and designers to capture their vision with precision and artistry."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-primary-500 mb-6">
            Why Choose Sarah Chen Photography
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group bg-white border border-secondary-500/20 rounded-lg p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500 group-hover:text-accent-500 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-primary-500 mb-4 group-hover:text-accent-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-primary-500/70 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  
                  <div className="w-0 group-hover:w-8 h-px bg-gradient-to-r from-accent-500 to-primary-500 mt-4 transition-all duration-500"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}