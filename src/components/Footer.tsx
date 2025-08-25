import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-maroon to-dark-red text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-gold fill-current" />
              <h3 className="font-traditional text-2xl font-bold">Moje Ki Jodi</h3>
            </div>
            <p className="font-modern text-gray-300 mb-4 leading-relaxed">
              India's most trusted matrimonial platform for lonely socks. 
              We believe every sock deserves a companion and no foot should walk alone.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                1800-SOCK-JODI
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                help@mojekijodi.com
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-traditional text-lg font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 font-modern text-sm">
              <li><a href="#" className="text-gray-300 hover:text-gold">Search Socks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-traditional text-lg font-bold mb-4 text-gold">Legal & Policies</h4>
            <ul className="space-y-2 font-modern text-sm">
              <li><a href="#" className="text-gray-300 hover:text-gold">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gold/30 mt-12 pt-8">
          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <h5 className="font-traditional text-lg font-bold text-gold mb-2">Important Legal Disclaimer</h5>
            <div className="font-modern text-xs text-gray-300 space-y-1">
              <p>• Moje Ki Jodi is not responsible for post-marriage color fading or fabric deterioration.</p>
              <p>• All disputes will be settled in Laundry Court under the Sock Marriage Act, 2024.</p>
              <p>• We do not guarantee compatibility between different fabric types or washing instructions.</p>
              <p>• Success rate calculated based on pairs that stayed together for minimum 30 wash cycles.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-modern text-sm text-gray-400">
              © 2024 Moje Ki Jodi Pvt. Ltd. All rights reserved. 
              <span className="text-gold ml-2">Making pairs, one spin cycle at a time.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;