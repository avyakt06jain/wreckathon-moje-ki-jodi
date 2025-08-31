import React from 'react';
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-gold">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative"><a href="/#"  ><img src='/src/images/logo.png' alt='Dil' style={{ maxHeight: '60px', width: 'auto' }} /></a>
            </div>
            <div>
              <a href="/home" className="font-traditional text-3xl font-bold text-maroon" >Moje Ki Jodi</a>
              <a href="/home" className="font-modern text-sm text-gray-600"><p>India's #1 Sock Matrimonial</p></a>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-modern text-maroon hover:text-saffron font-semibold">Home</a>
            <a href="#" className="font-modern text-maroon hover:text-saffron font-semibold">Search</a>
            <a href="#" className="font-modern text-maroon hover:text-saffron font-semibold">Success Stories</a>
            <a href="#" className="font-modern text-maroon hover:text-saffron font-semibold">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;