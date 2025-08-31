import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Heart } from 'lucide-react';
import Header from '../components/Header';
import UploadPopup from "../components/UploadPopup";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sockName: '',
    brand: '',
    complexion: '',
    size: '',
    kundaliStatus: '',
    familyBackground: '',
    bio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/matchmaking');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <button 
            onClick={() => navigate('/home')}
            className="flex items-center text-maroon hover:text-saffron font-semibold mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="font-traditional text-5xl font-bold text-maroon mb-4">
            Create Bio-Dhaga Profile
          </h1>
          <p className="font-modern text-lg text-gray-600">
            Help us create a perfect profile for your beloved sock
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-traditional p-8 border-traditional">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Photo Upload Section */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gold">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
              <UploadPopup
        triggerButton={
          <button type="button" className="gradient-gold px-6 py-2 rounded-lg text-maroon font-semibold">
                Upload Glamour Shot
              </button>
        }
      />
              <p className="font-modern text-xs text-gray-500 mt-2">
                JPG, PNG, or GIF. Maximum 5MB. Professional photos preferred.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                  Sock Name *
                </label>
                <input
                  type="text"
                  name="sockName"
                  value={formData.sockName}
                  onChange={handleInputChange}
                  placeholder="e.g., Pinky, Rajesh Kumar, etc."
                  className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern"
                  required
                />
              </div>

              <div>
                <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                  Brand Gotra *
                </label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern"
                  required
                >
                  <option value="">Select Brand</option>
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="puma">Puma</option>
                  <option value="reebok">Reebok</option>
                  <option value="bata">Bata</option>
                  <option value="liberty">Liberty</option>
                  <option value="local">Local Brand</option>
                </select>
              </div>

              <div>
                <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                  Complexion *
                </label>
                <select
                  name="complexion"
                  value={formData.complexion}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern"
                  required
                >
                  <option value="">Select Complexion</option>
                  <option value="pristine-white">Pristine White</option>
                  <option value="gently-faded">Gently Faded</option>
                  <option value="classic-black">Classic Black</option>
                  <option value="royal-blue">Royal Blue</option>
                  <option value="rose-pink">Rose Pink</option>
                  <option value="charcoal-grey">Charcoal Grey</option>
                  <option value="vintage-yellow">Vintage Yellow</option>
                </select>
              </div>

              <div>
                <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                  Size Category *
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern"
                  required
                >
                  <option value="">Select Size</option>
                  <option value="small">Small (6-8)</option>
                  <option value="medium">Medium (9-11)</option>
                  <option value="large">Large (12-14)</option>
                  <option value="xl">Extra Large (15+)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                  Kundali Status (Manglik Dosh Check) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'non-manglik', label: 'Non-Manglik (No red marks)' },
                    { value: 'manglik', label: 'Manglik (Has red marks/stains)' },
                    { value: 'anshik-manglik', label: 'Anshik Manglik (Partial red tint)' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border-2 border-gold rounded-lg cursor-pointer hover:bg-cream/30">
                      <input
                        type="radio"
                        name="kundaliStatus"
                        value={option.value}
                        checked={formData.kundaliStatus === option.value}
                        onChange={handleInputChange}
                        className="mr-3"
                        required
                      />
                      <span className="font-modern text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Family Background */}
            <div>
              <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                Family Background *
              </label>
              <input
                type="text"
                name="familyBackground"
                value={formData.familyBackground}
                onChange={handleInputChange}
                placeholder="e.g., From a respectable 3-pair pack from Myntra sale"
                className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern"
                required
              />
            </div>

            {/* Bio Section */}
            <div>
              <label className="block font-traditional text-lg font-semibold text-maroon mb-2">
                Detailed Bio (From Parent's Perspective) *
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={5}
                placeholder="My Pinky is a very soft-natured sock with strong family values. She is skilled in absorbing sweat and keeping feet warm. We are looking for a simple, sanskari sock from a good brand..."
                className="w-full p-3 border-2 border-gold rounded-lg focus:outline-none focus:border-saffron font-modern resize-none"
                required
              />
              <p className="font-modern text-xs text-gray-500 mt-1">
                Minimum 50 words. Describe your sock's qualities, values, and what you're looking for in a partner.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-cream/30 p-4 rounded-lg">
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" required />
                <span className="font-modern text-sm text-gray-700">
                  I hereby certify that all information provided is true and accurate. 
                  I understand that false information may result in profile rejection and 
                  agree to the <span className="text-maroon font-semibold">Terms of Service</span> and 
                  <span className="text-maroon font-semibold"> Privacy Policy</span> of Moje Ki Jodi.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="gradient-saffron hover-lift px-12 py-4 rounded-full text-white font-semibold text-lg shadow-traditional border-2 border-gold"
              >
                <Heart className="inline-block w-5 h-5 mr-2" />
                Create Profile & Find Matches
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;