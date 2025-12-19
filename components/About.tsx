import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-primary-600 leading-tight">
                The Art of 
                <span className="block text-accent-500 font-normal">Architectural Vision</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-400"></div>
            </div>

            <div className="space-y-6 text-primary-700 leading-relaxed">
              <p className="text-lg font-light">
                Sarah Chen Photography specializes in award-winning architectural photography that transcends mere documentation. With over a decade of experience, Sarah has developed an unparalleled ability to capture the soul of exceptional design.
              </p>
              
              <p className="text-base opacity-90">
                Every frame tells a story of vision, craftsmanship, and human ambition. From intimate residential spaces to towering commercial landmarks, Sarah's lens reveals the poetry hidden within concrete, steel, and glass. Her work has been featured in prestigious publications and has earned recognition from architectural firms worldwide.
              </p>

              <p className="text-base opacity-90">
                The intersection of light, form, and space becomes a canvas where architectural dreams are transformed into timeless visual narratives.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-200">
              <div className="text-center">
                <div className="text-3xl font-light text-accent-500 mb-2">150+</div>
                <div className="text-sm text-primary-600 font-medium">Projects Captured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-accent-500 mb-2">25+</div>
                <div className="text-sm text-primary-600 font-medium">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-accent-500 mb-2">12+</div>
                <div className="text-sm text-primary-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-700 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-primary-600/30 z-10"></div>
              <Image
                src="/images/about-feature-1766155125598.png"
                alt="Sarah Chen Photography - Architectural photography showcase"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover transition-transform duration-1000 hover:scale-110"
                priority
              />
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}