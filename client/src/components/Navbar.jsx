import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Coffee className="w-8 h-8 text-[#C08552] group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold text-[#4B2E2B] tracking-tight">Phyna Coffee Bar</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#4B2E2B] hover:text-[#C08552] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+255629586055" className="btn btn-primary text-sm">
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#4B2E2B]">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4 border-t border-[#C08552]/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-[#4B2E2B]"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+255629586055" className="btn btn-primary w-full">
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
