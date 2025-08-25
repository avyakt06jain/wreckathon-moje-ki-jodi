import React from 'react';
import { X, ArrowLeft, Award, Star, CheckCircle } from 'lucide-react';

interface CompatibilityReportProps {
  matchedSock: any;
  onClose: () => void;
  onBack: () => void;
}

const CompatibilityReport: React.FC<CompatibilityReportProps> = ({ matchedSock, onClose, onBack }) => {
  const gunas = [
    { name: "Varna (Material Compatibility)", score: 1, total: 1, status: "Excellent" },
    { name: "Vashya (Elasticity Control)", score: 2, total: 2, status: "Perfect" },
    { name: "Tara (Durability Factor)", score: 3, total: 3, status: "Outstanding" },
    { name: "Yoni (Size Compatibility)", score: 4, total: 4, status: "Ideal Match" },
    { name: "Graha Maitri (Brand Harmony)", score: 5, total: 5, status: "Excellent" },
    { name: "Gana (Washing Method)", score: 6, total: 6, status: "Compatible" },
    { name: "Bhakoot (Color Coordination)", score: 7, total: 7, status: "Perfect" },
    { name: "Nadi (Breathability Match)", score: 8, total: 8, status: "Exceptional" }
  ];

  const totalScore = gunas.reduce((sum, guna) => sum + guna.score, 0);
  const totalPossible = gunas.reduce((sum, guna) => sum + guna.total, 0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full border-4 border-gold my-8">
        {/* Header */}
        <div className="gradient-maroon text-white p-6 relative">
          <button
            onClick={onBack}
            className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-traditional text-3xl font-bold mb-2">
              Official Kundali Compatibility Report
            </h2>
            <p className="font-modern text-lg opacity-90">
              Certified by Pandit Ramesh Kumar Sharma, M.A. (Astrology)
            </p>
          </div>
        </div>

        <div className="p-8">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-cream to-yellow-50 p-6 rounded-lg border-2 border-gold mb-8">
            <div className="text-center mb-6">
              <h3 className="font-traditional text-2xl font-bold text-maroon mb-2">
                🎉 SHUBH VIVAH YOGYA 🎉
              </h3>
              <div className="text-6xl font-bold text-green-600 mb-2">
                {totalScore}/{totalPossible}
              </div>
              <p className="font-modern text-lg text-gray-700">
                Guna Milan Score: <strong className="text-maroon">Highly Compatible Match</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="font-traditional text-xl font-bold text-maroon mb-2">Your Sock: Pinky</h4>
                <div className="space-y-1 text-sm">
                  <p><strong>Nakshatra:</strong> Cotton Bharani</p>
                  <p><strong>Rashi:</strong> Polyester-Cotton Blend</p>
                  <p><strong>Gotra:</strong> Myntra Sale Collection</p>
                </div>
              </div>
              <div>
                <h4 className="font-traditional text-xl font-bold text-maroon mb-2">Partner: {matchedSock.name}</h4>
                <div className="space-y-1 text-sm">
                  <p><strong>Nakshatra:</strong> {matchedSock.brand} Premium</p>
                  <p><strong>Rashi:</strong> Pure Cotton</p>
                  <p><strong>Gotra:</strong> Elite Sports Collection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Guna Analysis */}
          <div className="mb-8">
            <h3 className="font-traditional text-2xl font-bold text-maroon mb-6 text-center">
              Detailed Ashta-Koota Analysis
            </h3>
            <div className="space-y-4">
              {gunas.map((guna, index) => (
                <div key={index} className="bg-white border-2 border-gold rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-traditional text-lg font-semibold text-maroon">
                      {index + 1}. {guna.name}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(guna.total)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < guna.score ? 'text-gold fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="font-bold text-maroon">
                        {guna.score}/{guna.total}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-modern text-sm text-gray-600">
                      {guna.status}
                    </p>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manglik Dosh Analysis */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-300 mb-8">
            <h3 className="font-traditional text-xl font-bold text-green-700 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Manglik Dosh Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Your Sock:</strong> Non-Manglik (No red stains detected)</p>
                <p><strong>Partner Sock:</strong> Non-Manglik (Clean record)</p>
              </div>
              <div>
                <p><strong>Dryer Bhakoot Dosh:</strong> Absent</p>
                <p><strong>Color Fading Risk:</strong> Minimal</p>
              </div>
            </div>
            <p className="font-modern text-green-700 font-semibold mt-3">
              ✅ No Manglik Dosh found. This union is free from all astrological obstacles.
            </p>
          </div>

          {/* Pandit's Recommendation */}
          <div className="bg-gradient-to-r from-saffron/10 to-gold/10 p-6 rounded-lg border-2 border-saffron mb-8">
            <h3 className="font-traditional text-xl font-bold text-maroon mb-4">
              Pandit-Ji's Official Recommendation
            </h3>
            <div className="font-modern text-gray-700 space-y-3">
              <p>
                "After careful analysis of both sock kundalis, I am pleased to declare this as an 
                <strong className="text-maroon"> extremely auspicious match</strong>. The compatibility score of 
                {totalScore}/{totalPossible} indicates a very strong foundation for a successful partnership."
              </p>
              <p>
                "The alignment of cotton fibers and washing cycles creates a harmonious energy. 
                This union will bring prosperity, comfort, and long-lasting warmth to both feet."
              </p>
              <p className="font-semibold text-maroon">
                "I recommend proceeding with the marriage ceremony during the auspicious 
                laundry time between 6 AM - 8 AM on any Sunday."
              </p>
            </div>
            <div className="mt-4 text-right">
              <p className="font-modern text-sm text-gray-600">
                - Pandit Ramesh Kumar Sharma<br/>
                Certified Sock Astrologer, Sock Marriage Council of India
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="font-modern text-xs text-gray-500 mb-4">
              This report is generated using advanced astrological calculations and is valid for matrimonial purposes.
              Report ID: MKJ-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <button
              onClick={onClose}
              className="gradient-saffron px-8 py-3 rounded-full text-white font-semibold hover-lift"
            >
              Proceed with This Sacred Union
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityReport;