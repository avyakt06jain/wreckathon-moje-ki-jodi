import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCarousel: React.FC = () => {
  const testimonials = [
    {
      quote: "We lost hope after years in the laundry basket... until Moje Ki Jodi reunited us.",
      author: "The Striped Twins",
      location: "Mumbai Laundromat"
    },
    {
      quote: "Earlier, I was just a single sock. Now, I'm part of a power couple.",
      author: "Black Adidas (Right Foot)",
      location: "Delhi Sports Club"
    },
    {
      quote: "My family was worried I'd remain single forever. Thank you for finding my perfect match!",
      author: "Pink Cotton Princess",
      location: "Bangalore IT Park"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-maroon to-dark-red text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-traditional text-4xl font-bold mb-12">
          What Our Happy Couples Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Quote className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-modern text-lg italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t border-gold/30 pt-4">
                <p className="font-traditional text-xl font-bold text-gold">{testimonial.author}</p>
                <p className="font-modern text-sm text-gray-300">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;