import React from 'react';
import { Check, Crown, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      features: [
        "3 swipes per day",
        "Basic profile creation",
        "Standard matching",
        "Email support"
      ],
      icon: <Star className="w-6 h-6" />,
      popular: false
    },
    {
      name: "Gold",
      price: "₹21",
      period: "per month",
      features: [
        "Unlimited swipes",
        "Premium profile features",
        "Advanced matching algorithm",
        "Early access to designer socks",
        "24/7 chat support"
      ],
      icon: <Crown className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Shaadi Deluxe",
      price: "₹101",
      period: "per month",
      features: [
        "Everything in Gold",
        "Direct consultation with Rishta Aunty",
        "Priority customer support",
        "Exclusive VIP events",
        "Compatibility reports included"
      ],
      icon: <Crown className="w-6 h-6" />,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-traditional text-4xl font-bold text-maroon mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="font-modern text-lg text-gray-600">
            Find the right subscription for your sock's matrimonial journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-lg shadow-traditional p-8 hover-lift border-traditional ${plan.popular ? 'ring-4 ring-saffron' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-saffron text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="gradient-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-maroon">
                  {plan.icon}
                </div>
                <h3 className="font-traditional text-2xl font-bold text-maroon mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-maroon">{plan.price}</span>
                  <span className="font-modern text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-modern text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold hover-lift ${plan.popular ? 'gradient-saffron text-white' : 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-white'}`}>
                {plan.price === "Free" ? "Get Started" : "Subscribe Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;