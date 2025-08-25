import React, { useState } from 'react';
import { X, Heart, Star, Award, Sparkles } from 'lucide-react';
import CompatibilityReport from './CompatibilityReport';

interface MatchModalProps {
  matchedSock: any;
  onClose: () => void;
}

const MatchModal: React.FC<MatchModalProps> = ({ matchedSock, onClose }) => {
  const [showReport, setShowReport] = useState(false);

  if (showReport) {
    return (
      <CompatibilityReport 
        matchedSock={matchedSock} 
        onClose={onClose}
        onBack={() => setShowReport(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border-4 border-gold overflow-hidden">
        {/* Header */}
        <div className="gradient-saffron text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-gold animate-pulse" />
          </div>
          <h2 className="font-traditional text-4xl font-bold mb-2">
            🎉 Mubarak Ho! 🎉
          </h2>
          <p className="font-modern text-xl">A Jodi Has Been Made!</p>
        </div>

        {/* Match Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-8 mb-6">
              {/* Your Sock */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mb-3 border-4 border-gold">
                  <Heart className="w-10 h-10 text-maroon fill-current" />
                </div>
                <h3 className="font-traditional text-lg font-bold text-maroon">Your Pinky</h3>
                <p className="font-modern text-sm text-gray-600">Rose Pink • Size M</p>
              </div>

              {/* Heart Connection */}
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-gold fill-current animate-pulse" />
                <Heart className="w-8 h-8 text-maroon fill-current animate-pulse" />
                <Heart className="w-6 h-6 text-gold fill-current animate-pulse" />
              </div>

              {/* Matched Sock */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mb-3 border-4 border-gold">
                  <Heart className="w-10 h-10 text-maroon fill-current" />
                </div>
                <h3 className="font-traditional text-lg font-bold text-maroon">{matchedSock.name}</h3>
                <p className="font-modern text-sm text-gray-600">{matchedSock.complexion} • {matchedSock.size}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cream to-yellow-50 p-6 rounded-lg border-2 border-gold">
              <h3 className="font-traditional text-2xl font-bold text-maroon mb-3">
                Perfect Match Found!
              </h3>
              <p className="font-modern text-gray-700 leading-relaxed mb-4">
                Based on our advanced matrimonial algorithm, we have found an excellent compatibility 
                between your sock and {matchedSock.name}. This union has been blessed by our 
                certified Pandit-Ji and approved by the Rishta Aunty council.
              </p>
              
              {/* Quick Compatibility */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Brand Compatibility:</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Size Match:</span>
                  <span className="text-green-600 font-semibold">Excellent</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Wash Compatibility:</span>
                  <span className="text-green-600 font-semibold">Perfect</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Family Values:</span>
                  <span className="text-green-600 font-semibold">Aligned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setShowReport(true)}
              className="flex items-center gradient-gold px-6 py-3 rounded-lg text-maroon font-semibold hover-lift border-2 border-maroon"
            >
              <Award className="w-5 h-5 mr-2" />
              Generate Kundali Report (₹51)
            </button>
            <button
              onClick={onClose}
              className="flex items-center px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 hover-lift"
            >
              Continue Searching
            </button>
          </div>

          <p className="font-modern text-xs text-gray-500 text-center mt-4">
            * Compatibility report includes detailed Guna Milan analysis by certified Pandit-Ji
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchModal;