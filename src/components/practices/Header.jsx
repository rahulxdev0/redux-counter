import React, { useState, useEffect } from 'react';
import { HeaderLogo } from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-neutral-900/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-neutral-900/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <HeaderLogo className='text-white' />


          {/* CTA Button */}
          <button className="bg-gradient-to-r from-gray-200 to-gray-600 text-neutral-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-200 transform hover:scale-105">
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1">
            <span className="w-6 h-0.5 bg-gray-300"></span>
            <span className="w-6 h-0.5 bg-gray-300"></span>
            <span className="w-6 h-0.5 bg-gray-300"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;