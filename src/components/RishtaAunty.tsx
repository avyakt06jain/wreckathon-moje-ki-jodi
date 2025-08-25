import React, { useState } from 'react';
import { X } from 'lucide-react';

const RishtaAunty: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAdvice, setCurrentAdvice] = useState(0);

  const adviceList = [
    "Beta, don't be too picky. The elastic won't last forever!",
    "Arre, Puma socks don't last. Try Bata - more susheel and family-oriented.",
    "Don't match with polyester, beta. Cotton is more sanskari.",
    "Look at this Nike sock! Very show-off type. Find someone simple.",
    "Beta, size matters! Don't go for too big or too small - perfect fit is important.",
    "White socks get dirty fast. Choose dark colors for practical marriage.",
    "Don't delay the rishta, beta. Monsoon season is coming - socks get lost!",
    "This Adidas is good brand, but very expensive taste. Check family budget first.",
    "Ankle socks are too modern. Find nice full-length sock with good values.",
    "Beta, checked the washing instructions? Very important for long marriage!"
  ];

  const getRandomAdvice = () => {
    const newIndex = Math.floor(Math.random() * adviceList.length);
    setCurrentAdvice(newIndex);
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Rishta Aunty Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={getRandomAdvice}
          className="w-16 h-16 bg-gradient-to-br from-maroon to-dark-red rounded-full shadow-lg hover-lift flex items-center justify-center"
        >
          <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center border-2 border-gold">
            <span className="text-2xl" ><img src="/src/images/rishtaAunty.png" alt="Rishta Aunty"></img>
</span>
          </div>
        </button>
        <div className="text-center mt-2">
          <span className="font-modern text-xs text-white bg-maroon px-2 py-1 rounded-full">
            Rishta Aunty
          </span>
        </div>
      </div>

      {/* Advice Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full border-4 border-gold">
            <div className="gradient-maroon text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                    <span className="text-2xl"><img src="/src/images/rishtaAunty.png" alt="Rishta Aunty"></img></span>
                  </div>
                  <div>
                    <h3 className="font-traditional text-lg font-bold">Rishta Aunty</h3>
                    <p className="text-xs opacity-90">Matrimonial Advisor Since 1987</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-gradient-to-r from-cream to-yellow-50 p-4 rounded-lg border-2 border-gold/30 relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-cream to-yellow-50 rotate-45 border-l-2 border-t-2 border-gold/30"></div>
                <p className="font-modern text-gray-800 italic">
                  "{adviceList[currentAdvice]}"
                </p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={getRandomAdvice}
                  className="gradient-gold px-4 py-2 rounded-lg text-maroon font-semibold text-sm hover-lift"
                >
                  More Advice
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-maroon font-semibold text-sm"
                >
                  Bas Karo Aunty!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RishtaAunty;