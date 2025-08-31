import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, RefreshCw } from 'lucide-react';

const EntryPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentChallenge, setCurrentChallenge] = useState<any>(null);
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
  const [resultMessage, setResultMessage] = useState('');
  const [resultType, setResultType] = useState<'success' | 'error' | ''>('');
  const [isVerified, setIsVerified] = useState(false);

  const captchaChallenges = [
    {
      prompt: "a well-settled, 'government job' type sock.",
      images: [
        { src: '/src/images/govt-job-sock.png', isCorrect: true },
        { src: '/src/images/stable-looking-sock.png', isCorrect: true },
        { src: '/src/images/respectable-black-sock.png', isCorrect: true },
        { src: '/src/images/flashy-unemployed-sock.png', isCorrect: false },
        { src: '/src/images/sock-with-hole.png', isCorrect: false },
        { src: '/src/images/startup-hustle-sock.png', isCorrect: false },
        { src: '/src/images/mismatched-pair.png', isCorrect: false },
        { src: '/src/images/faded-glory-sock.png', isCorrect: false },
        { src: '/src/images/lazy-unfolded-sock.png', isCorrect: false },
      ]
    },
    {
      prompt: "a homely, 'sanskari' sock.",
      images: [
        { src: '/src/images/homely-folded-sock.png', isCorrect: true },
        { src: '/src/images/simple-and-clean-sock.png', isCorrect: true },
        { src: '/src/images/decent-pattern-sock.png', isCorrect: true },
        { src: '/src/images/too-modern-sock.png', isCorrect: false },
        { src: '/src/images/dirty-sock.png', isCorrect: false },
        { src: '/src/images/loud-party-sock.png', isCorrect: false },
        { src: '/src/images/unfolded-messy-sock.png', isCorrect: false },
        { src: '/src/images/see-through-sock.png', isCorrect: false },
        { src: '/src/images/torn-stylish-sock.png', isCorrect: false },
      ]
    },
    {
      prompt: "a sock from a good, reputed family (gotra).",
      images: [
        { src: '/src/images/nike-gotra-sock.png', isCorrect: true },
        { src: '/src/images/adidas-family-sock.png', isCorrect: true },
        { src: '/src/images/puma-clan-sock.png', isCorrect: true },
        { src: '/src/images/unknown-origin-sock.png', isCorrect: false },
        { src: '/src/images/local-market-sock.png', isCorrect: false },
        { src: '/src/images/bazaar-sock.png', isCorrect: false },
        { src: '/src/images/faded-brand-sock.png', isCorrect: false },
        { src: '/src/images/suspicious-logo-sock.png', isCorrect: false },
        { src: '/src/images/plain-white-sock.png', isCorrect: false },
      ]
    }
  ];

  const generateCaptcha = () => {
    setSelectedImages(new Set());
    setResultMessage('');
    setResultType('');
    
    const randomChallenge = captchaChallenges[Math.floor(Math.random() * captchaChallenges.length)];
    const shuffledImages = [...randomChallenge.images].sort(() => Math.random() - 0.5);
    
    setCurrentChallenge({
      ...randomChallenge,
      images: shuffledImages
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleImageClick = (index: number) => {
    const newSelected = new Set(selectedImages);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedImages(newSelected);
  };

  const verifySelection = () => {
    if (!currentChallenge) return;

    let correctSelections = 0;
    let incorrectSelections = 0;

    currentChallenge.images.forEach((img: any, index: number) => {
      const isSelected = selectedImages.has(index);
      const shouldBeSelected = img.isCorrect;

      if (isSelected && shouldBeSelected) correctSelections++;
      if (isSelected && !shouldBeSelected) incorrectSelections++;
    });

    const totalCorrect = currentChallenge.images.filter((img: any) => img.isCorrect).length;

    if (incorrectSelections === 0 && correctSelections === totalCorrect) {
      setResultMessage('✅ Success! You are a responsible human.');
      setResultType('success');
      setIsVerified(true);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      setResultMessage('❌ Fail! Are you a robot... or just bad at laundry?');
      setResultType('error');
      setTimeout(() => {
        generateCaptcha();
      }, 2000);
    }
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-traditional text-3xl font-bold text-green-700 mb-4">
            Verification Successful!
          </h2>
          <p className="font-modern text-lg text-green-600">
            Redirecting to Moje Ki Jodi...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cream to-yellow-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-maroon to-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="/src/images/logo.png" alt="Logo" className="w-10 h-10" />
          </div>
          <h1 className="font-traditional text-4xl font-bold text-maroon mb-2">
            Are You a Responsible Adult?
          </h1>
          <p className="font-modern text-gray-600">
            Complete this verification to enter Moje Ki Jodi
          </p>
        </div>

        {/* Captcha Container */}
        <div className="bg-white rounded-lg shadow-traditional p-8 border-4 border-gold">
          {/* Captcha Prompt */}
          <div className="mb-6">
            <p className="font-traditional text-lg font-semibold text-maroon mb-4 leading-relaxed">
              {currentChallenge ? `To prove you are human, please select all images with ${currentChallenge.prompt}` : 'Loading...'}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {currentChallenge?.images.map((imgData: any, index: number) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className={`
                  w-24 h-24 bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 
                  border-3 hover:scale-105 overflow-hidden
                  ${selectedImages.has(index) 
                    ? 'border-gold shadow-lg shadow-gold/50' 
                    : 'border-gray-300 hover:border-saffron'
                  }
                `}
              >
                <img 
                  src={imgData.src} 
                  alt={`Captcha option ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMCA1MEg4ME01MCAyMFY4MCIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2Zz4K';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Verify Button */}
          <div className="text-center mb-4">
            <button
              onClick={verifySelection}
              className="gradient-saffron hover-lift px-8 py-3 rounded-lg text-white font-semibold text-lg shadow-traditional border-2 border-gold"
            >
              <Shield className="inline-block w-5 h-5 mr-2" />
              Verify
            </button>
          </div>

          {/* Refresh Button */}
          <div className="text-center mb-4">
            <button
              onClick={generateCaptcha}
              className="flex items-center justify-center mx-auto text-maroon hover:text-saffron font-semibold text-sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Generate New Challenge
            </button>
          </div>

          {/* Result Message */}
          {resultMessage && (
            <div className={`text-center font-semibold ${
              resultType === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {resultMessage}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="font-modern text-sm text-gray-600">
            This verification helps us ensure only genuine sock parents join our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;