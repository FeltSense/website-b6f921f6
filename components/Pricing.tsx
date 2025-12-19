'use client'

import { Check, Camera, Building, Star } from 'lucide-react'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$850',
      description: 'Perfect for small residential projects',
      features: [
        '2-3 hour shoot',
        '15 edited high-resolution images',
        'Basic interior & exterior shots',
        'Online gallery delivery',
        '48-hour turnaround'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,650',
      description: 'Ideal for commercial properties and larger homes',
      features: [
        '4-6 hour comprehensive shoot',
        '35 edited high-resolution images',
        'Interior, exterior & detail shots',
        'Twilight photography included',
        'Online gallery + USB delivery',
        '24-hour turnaround',
        'Usage rights included'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,200',
      description: 'Complete documentation for architectural firms',
      features: [
        'Full day shoot (8+ hours)',
        '60+ edited high-resolution images',
        'Complete architectural documentation',
        'Multiple twilight sessions',
        'Drone photography (if permitted)',
        'Premium delivery package',
        'Same-day preview delivery',
        'Full commercial usage rights',
        'Progress documentation'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-primary-500 max-w-2xl mx-auto">
            Professional architectural photography tailored to your project needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                tier.popular 
                  ? 'ring-2 ring-accent-500 scale-105 lg:scale-110' 
                  : 'hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-medium">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-5xl font-light text-primary-500 mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-600">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>

              <div className="absolute top-6 right-6">
                {index === 0 && <Camera className="h-6 w-6 text-primary-400" />}
                {index === 1 && <Building className="h-6 w-6 text-accent-400" />}
                {index === 2 && <Star className="h-6 w-6 text-primary-400" />}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            All packages include professional editing and color correction
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-500">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Weather guarantee
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Professional equipment
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}