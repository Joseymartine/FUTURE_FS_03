import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#4B2E2B]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-[#C08552]" />
          <span className="text-lg font-bold text-[#4B2E2B]">Phyna Coffee Bar</span>
        </div>
        
        <div className="flex gap-8 text-sm font-semibold text-[#8C5A3C]">
          <a href="#home" className="hover:text-[#C08552]">Home</a>
          <a href="#menu" className="hover:text-[#C08552]">Menu</a>
          <a href="#about" className="hover:text-[#C08552]">About</a>
          <a href="#contact" className="hover:text-[#C08552]">Contact</a>
        </div>

        <div className="text-sm text-[#8C5A3C] flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Antigravity Brews
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#4B2E2B]/5 text-center text-xs text-[#8C5A3C]">
        &copy; 2026 Phyna Coffee Bar. All rights reserved. Built for Future Interns FS Task 3.
      </div>
    </footer>
  );
};

export default Footer;
