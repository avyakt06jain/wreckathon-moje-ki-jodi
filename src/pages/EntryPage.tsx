import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, RefreshCw } from 'lucide-react';

const EntryPage: React.FC = () => {
  const navigate = useNavigate();
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  // Generate random captcha text
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput === captchaText) {
      setIsVerified(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setError('Captcha verification failed. Please try again.');
      generateCaptcha();
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
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-maroon to-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-traditional text-4xl font-bold text-maroon mb-2">
            Welcome to Moje Ki Jodi
          </h1>
          <p className="font-modern text-gray-600">
            Please verify you're human to continue
          </p>
        </div>

        {/* Captcha Form */}
        <div className="bg-white rounded-lg shadow-traditional p-8 border-traditional">
          <form onSubmit={handleVerify} className="space-y-6">
            {/* Captcha Display */}
            <div className="text-center">
              <label className="block font-traditional text-lg font-semibold text-maroon mb-4">
                Security Verification
              </label>
              
              {/* Captcha Canvas */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border-2 border-gold mb-4 relative">
                <div 
                  className="captcha-display font-mono text-3xl font-bold text-maroon tracking-wider select-none"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    transform: 'skew(-5deg)',
                    letterSpacing: '8px'
                  }}
                >
                  {captchaText.split('').map((char, index) => (
                    <span 
                      key={index}
                      style={{
                        color: `hsl(${Math.random() * 60 + 320}, 70%, 40%)`,
                        transform: `rotate(${Math.random() * 20 - 10}deg)`,
                        display: 'inline-block',
                        margin: '0 2px'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                
                {/* Noise lines for security */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-gray-400 opacity-30"
                      style={{
                        width: '2px',
                        height: '100%',
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 30 - 15}deg)`
                      }}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={generateCaptcha}
                className="flex items-center justify-center mx-auto text-maroon hover:text-saffron font-semibold text-sm mb-4"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Generate New Captcha
              </button>
            </div>

            {/* Input Field */}
            <div>
              <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                Enter the text above *
              </label>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type the captcha text here"
                className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern text-center text-lg tracking-wider"
                required
                autoComplete="off"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <p className="font-modern text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full gradient-saffron hover-lift py-3 rounded-lg text-white font-semibold text-lg shadow-traditional border-2 border-gold"
            >
              <Shield className="inline-block w-5 h-5 mr-2" />
              Verify & Enter
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="font-modern text-xs text-gray-500">
              This verification helps us protect our community from automated bots and ensures 
              genuine sock profiles only.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="font-modern text-sm text-gray-600">
            Having trouble? Contact our support team at 
            <span className="text-maroon font-semibold"> help@mojekijodi.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;