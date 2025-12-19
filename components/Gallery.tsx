'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/gallery/architecture-1.jpg',
    alt: 'Modern glass office building with geometric patterns',
    title: 'Corporate Headquarters',
    category: 'Commercial'
  },
  {
    id: 2,
    src: '/gallery/architecture-2.jpg',
    alt: 'Minimalist residential home with clean lines',
    title: 'Residential Elegance',
    category: 'Residential'
  },
  {
    id: 3,
    src: '/gallery/architecture-3.jpg',
    alt: 'Historic building renovation with modern elements',
    title: 'Heritage Revival',
    category: 'Heritage'
  },
  {
    id: 4,
    src: '/gallery/architecture-4.jpg',
    alt: 'Contemporary museum with dramatic lighting',
    title: 'Cultural Center',
    category: 'Cultural'
  },
  {
    id: 5,
    src: '/gallery/architecture-5.jpg',
    alt: 'Luxury hotel lobby with soaring ceilings',
    title: 'Hospitality Design',
    category: 'Hospitality'
  },
  {
    id: 6,
    src: '/gallery/architecture-6.jpg',
    alt: 'Sustainable office complex with green architecture',
    title: 'Eco Innovation',
    category: 'Sustainable'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-600 mb-6">
            Our Work
          </h2>
          <div className="w-24 h-0.5 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto leading-relaxed">
            A curated selection of architectural photography that reveals the artistry and vision behind exceptional design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-medium text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View Complete Portfolio
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="text-center mt-6">
              <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-2xl font-light">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}