'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-primary-500' : 'text-white'
            }`}>
              Sarah Chen
              <span className={`block text-sm lg:text-base font-normal transition-colors duration-300 ${
                isScrolled ? 'text-primary-400' : 'text-white/90'
              }`}>
                Photography
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-primary-600 hover:text-accent-500' 
                    : 'text-white hover:text-accent-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-8 bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Inquire About Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-600 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-4 border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-primary-600 hover:text-accent-500' 
                    : 'text-white hover:text-accent-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
            >
              Inquire About Your Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}