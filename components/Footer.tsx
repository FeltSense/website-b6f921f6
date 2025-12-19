'use client'

import { Instagram, Camera, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-accent-500" />
              <h3 className="text-2xl font-bold text-white">Sarah Chen Photography</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Award-winning architectural photography that captures the essence and beauty of exceptional design. 
              Creating timeless images that celebrate the intersection of art and architecture.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com" 
                className="bg-gray-800 hover:bg-accent-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:hello@sarahchen.com" 
                className="bg-gray-800 hover:bg-accent-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Architectural Photography', 'Interior Design', 'Commercial Spaces', 'Real Estate', 'Construction Progress'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-accent-500 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {['About', 'Portfolio', 'Process', 'Awards', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-accent-500 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@sarahchen.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {currentYear} Sarah Chen Photography. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}