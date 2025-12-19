'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hero-1766155116879.png"
          alt="Award-winning architectural photography showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-white mb-6">
              Award-winning <span className="text-accent-500 font-normal">architectural photography</span> that captures the essence and beauty of exceptional design
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl md:text-2xl text-secondary-500 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              Transform your architectural vision into compelling visual stories that inspire, engage, and elevate your brand to new heights
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link
              href="/contact"
              className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              <span className="flex items-center justify-center gap-2">
                Inquire About Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/about"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className={`transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}