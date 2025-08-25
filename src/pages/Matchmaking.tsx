import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Heart, MessageCircle, Award, Star } from 'lucide-react';
import Header from '../components/Header';
import RishtaAunty from '../components/RishtaAunty';
import MatchModal from '../components/MatchModal';

const Matchmaking: React.FC = () => {
  const navigate = useNavigate();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [matchedSock, setMatchedSock] = useState<any>(null);

  const sockProfiles = [
    {
      name: "Righty Kumar",
      age: "6 months old",
      brand: "Nike Premium",
      complexion: "Classic Navy Blue",
      size: "Medium (9-11)",
      kundaliStatus: "Non-Manglik",
      familyBackground: "From an elite 6-pair pack, purchased during Diwali sale",
      bio: "I am a well-established sports sock with excellent sweat absorption qualities. I have been blessed with superior cushioning and arch support. Seeking a like-minded sock who values fitness and active lifestyle. Prefer someone from a reputable brand with similar values.",
      image: '/src/images/sock.jpg',
      qualities: ["Athletic", "Moisture-wicking", "Durable", "Professional"],
      occupation: "Sports & Fitness",
      location: "Mumbai Gym Locker"
    },
    {
      name: "Silky Sharma",
      age: "4 months old",
      brand: "Adidas Comfort",
      complexion: "Elegant Rose Pink",
      size: "Small (6-8)",
      kundaliStatus: "Anshik Manglik",
      familyBackground: "From a premium women's collection, hand-picked from brand store",
      bio: "I am a sophisticated and gentle sock who believes in traditional values. I excel in comfort and style. Looking for a caring partner who will appreciate my delicate nature. Family is very important to me and I hope to find someone with similar priorities.",
      image: "src/images/sock 2.jpg",
      qualities: ["Gentle", "Stylish", "Comfortable", "Family-oriented"],
      occupation: "Fashion & Lifestyle",
      location: "Delhi Fashion District"
    },
    {
      name: "Cotton King",
      age: "8 months old", 
      brand: "Puma Elite",
      complexion: "Pristine White",
      size: "Large (12-14)",
      kundaliStatus: "Non-Manglik",
      familyBackground: "From a royal collection, gifted during wedding season",
      bio: "I am a strong and reliable sock with proven track record in all weather conditions. I believe in honesty and hard work. Seeking a partner who values loyalty and long-term commitment. I promise to provide warmth and comfort throughout all seasons of life.",
      image: "src/images/sock 3.jpg",
      qualities: ["Reliable", "Strong", "All-weather", "Loyal"],
      occupation: "All-terrain Specialist",
      location: "Bangalore Tech Park"
    }
  ];

  const currentProfile = sockProfiles[currentProfileIndex];

  const handleReject = () => {
    if (currentProfileIndex < sockProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0);
    }
  };

  const handleAccept = () => {
    setMatchedSock(currentProfile);
    setShowMatchModal(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-maroon hover:text-saffron font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-traditional border-traditional overflow-hidden">
              {/* Profile Image */}
              <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={currentProfile.image} 
                  alt={currentProfile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold px-3 py-1 rounded-full">
                  <span className="font-modern text-sm font-semibold text-maroon">Verified Profile</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="font-traditional text-3xl font-bold text-maroon">
                    {currentProfile.name}
                  </h1>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="font-semibold text-maroon">Age:</span>
                    <span className="ml-2 text-gray-700">{currentProfile.age}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-maroon">Brand:</span>
                    <span className="ml-2 text-gray-700">{currentProfile.brand}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-maroon">Complexion:</span>
                    <span className="ml-2 text-gray-700">{currentProfile.complexion}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-maroon">Size:</span>
                    <span className="ml-2 text-gray-700">{currentProfile.size}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-maroon">Kundali:</span>
                    <span className="ml-2 text-gray-700">{currentProfile.kundaliStatus}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-maroon">Location:</span>
                    <span className="ml-2 text-gray-700">{currentProfile.location}</span>
                  </div>
                </div>

                {/* Qualities */}
                <div className="mb-4">
                  <h3 className="font-traditional text-lg font-semibold text-maroon mb-2">Key Qualities</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.qualities.map((quality, index) => (
                      <span key={index} className="bg-cream px-3 py-1 rounded-full text-sm text-maroon border border-gold">
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Family Background */}
                <div className="mb-4">
                  <h3 className="font-traditional text-lg font-semibold text-maroon mb-2">Family Background</h3>
                  <p className="font-modern text-gray-700 text-sm leading-relaxed">
                    {currentProfile.familyBackground}
                  </p>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="font-traditional text-lg font-semibold text-maroon mb-2">About Me</h3>
                  <p className="font-modern text-gray-700 leading-relaxed">
                    {currentProfile.bio}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-6">
                  <button
                    onClick={handleReject}
                    className="flex items-center px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full font-semibold hover-lift"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Not Compatible
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex items-center gradient-saffron px-8 py-3 text-white rounded-full font-semibold hover-lift"
                  >
                    <Heart className="w-5 h-5 mr-2 fill-current" />
                    Rishta Accepted!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-traditional p-6 border-traditional">
              <h3 className="font-traditional text-xl font-bold text-maroon mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-gold" />
                Today's Stats
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Profiles Viewed:</span>
                  <span className="font-semibold text-maroon">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rishtas Sent:</span>
                  <span className="font-semibold text-maroon">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile Visits:</span>
                  <span className="font-semibold text-maroon">28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compatibility Score:</span>
                  <span className="font-semibold text-gold">87%</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-cream to-yellow-50 rounded-lg p-6 border-traditional">
              <h3 className="font-traditional text-lg font-bold text-maroon mb-3">
                Matchmaking Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Look beyond brand preferences</li>
                <li>• Consider size compatibility</li>
                <li>• Check washing instructions match</li>
                <li>• Verify kundali compatibility</li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-lg shadow-traditional p-6 border-traditional text-center">
              <MessageCircle className="w-8 h-8 text-saffron mx-auto mb-3" />
              <h3 className="font-traditional text-lg font-bold text-maroon mb-2">
                Need Help?
              </h3>
              <p className="font-modern text-sm text-gray-600 mb-3">
                Our relationship experts are here to help you find the perfect match.
              </p>
              <button className="gradient-gold w-full py-2 rounded-lg text-maroon font-semibold text-sm">
                Chat with Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <RishtaAunty />
      
      {showMatchModal && matchedSock && (
        <MatchModal 
          matchedSock={matchedSock}
          onClose={() => setShowMatchModal(false)}
        />
      )}
    </div>
  );
};

export default Matchmaking;