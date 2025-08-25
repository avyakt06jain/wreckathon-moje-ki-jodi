import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Crown, Award } from 'lucide-react';
import Header from '../components/Header';
import TestimonialCarousel from '../components/TestimonialCarousel';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const successStories = [
    {
      image: "/src/images/sock jodi.jpg",
      names: "Greyo & Greenie",
      story: "After 6 months in different drawers, destiny united us through Moje Ki Jodi!"
    },
    {
      image: "/src/images/sock jodi 2.jpg", 
      names: "Cotton King & Silk Queen",
      story: "Brand differences couldn't keep us apart. True love knows no fabric boundaries."
    },
    {
      image: "/src/images/twins.jpg",
      names: "The Striped Twins", 
      story: "We thought we were identical until we found each other. Now we're complete!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 opacity-80"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="font-traditional text-6xl md:text-7xl font-bold text-maroon mb-6 text-shadow-gold">
            Don't Let Your Sock Face Society Alone
          </h1>
          <p className="font-modern text-xl text-gray-700 mb-8 leading-relaxed">
            India's Most Trusted Matrimonial Platform for Lonely Socks
          </p>
          <button 
            onClick={() => navigate('/register')}
            className="gradient-saffron hover-lift px-12 py-4 rounded-full text-white font-semibold text-lg shadow-traditional border-2 border-gold"
          >
            Register Your Sock For Free
          </button>
          <p className="font-modern text-sm text-gray-600 mt-4">
            Join 50,000+ Happy Pairs • 100% Confidential • Government Certified
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-maroon to-dark-red text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift p-6">
              <div className="text-4xl font-bold text-gold mb-2">50,000+</div>
              <div className="text-lg">Happy Pairs Made</div>
            </div>
            <div className="hover-lift p-6">
              <div className="text-4xl font-bold text-gold mb-2">98.7%</div>
              <div className="text-lg">Success Rate</div>
            </div>
            <div className="hover-lift p-6">
              <div className="text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-lg">Rishta Aunty Support</div>
            </div>
            <div className="hover-lift p-6">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-lg">Verified Profiles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-traditional text-4xl font-bold text-center text-maroon mb-12">
            <Crown className="inline-block mr-3 text-gold" />
            Success Stories That Warm Hearts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-traditional p-6 hover-lift border-traditional">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img src={story.image} alt={story.names} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-traditional text-xl font-bold text-maroon mb-2">{story.names}</h3>
                <p className="font-modern text-gray-600 italic">"{story.story}"</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Eligible Socks */}
      <section className="py-20 px-6 bg-gradient-to-br from-cream to-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-traditional text-4xl font-bold text-maroon mb-12">
            <Award className="inline-block mr-3 text-gold" />
            This Week's Most Eligible Socks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Righty Kumar", brand: "Nike Premium", color: "Classic White" },
              { name: "Pinky Warma", brand: "Adidas Elite", color: "Rose Pink" },
              { name: "Stripy Singh", brand: "Puma Sports", color: "Navy Blue" },
              { name: "Fluffy Devi", brand: "Reebok Comfort", color: "Lavender Purple" }
            ].map((sock, index) => (
              <div key={index} className="bg-white rounded-lg shadow-traditional p-6 hover-lift border-traditional">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-maroon" />
                </div>
                <h3 className="font-traditional text-lg font-bold text-maroon">{sock.name}</h3>
                <p className="font-modern text-sm text-gray-600">{sock.brand}</p>
                <p className="font-modern text-sm text-gold font-semibold">{sock.color}</p>
                <button className="mt-4 gradient-gold px-4 py-2 rounded-full text-sm text-maroon font-semibold hover-lift">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Homepage;