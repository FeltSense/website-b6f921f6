import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Sarah's ability to capture the soul of our architectural designs is unparalleled. Her photographs transformed our portfolio and elevated our brand to new heights.",
    name: "Marcus Rodriguez",
    role: "Principal Architect, Rodriguez Studios",
    image: "/images/testimonial-testimonials-0-1766155108824.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with Sarah was a masterclass in visual storytelling. She doesn't just photograph buildings—she reveals their poetry.",
    name: "Elena Nakamura",
    role: "Creative Director, Zen Interiors",
    image: "/images/testimonial-testimonials-1-1766155111174.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "The attention to detail and artistic vision Sarah brings to every shoot is extraordinary. Our spaces have never looked more compelling.",
    name: "David Thompson",
    role: "Real Estate Developer",
    image: "/images/testimonial-testimonials-2-1766155112695.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-500 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-0.5 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-secondary-500/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full ring-2 ring-accent-500/20">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-500 text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 text-sm font-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="currentColor"
                  className="text-accent-500"
                >
                  <path d="M9.6 16c0-8.8 7.2-16 16-16v6.4c-5.3 0-9.6 4.3-9.6 9.6v16H0V16h9.6zM25.6 16c0-8.8 7.2-16 16-16v6.4c-5.3 0-9.6 4.3-9.6 9.6v16H16V16h9.6z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}