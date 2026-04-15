import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C08552]/5 -skew-x-12 transform translate-x-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C08552]/10 text-[#C08552] font-bold text-sm mb-6">
            <Coffee className="w-4 h-4" />
            <span>Award Winning Artisan Roasts</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#4B2E2B] mb-6">
            Where Every Bean <br /> Tells a <span className="text-[#C08552]">Story.</span>
          </h1>
          
          <p className="text-lg text-[#8C5A3C] mb-8 max-w-lg">
            Experience the art of coffee at Phyna Coffee Bar. We source the finest ethical beans and roast them in small batches to bring out their unique character.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="btn btn-primary px-8 py-4 text-lg">
              Explore Our Menu
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="btn btn-secondary px-8 py-4 text-lg">
              Our Story
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/50">
            <img 
              src={heroImg} 
              alt="Artisan Coffee" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C08552] flex items-center justify-center text-white">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[#4B2E2B] font-bold">Try our specialty</p>
                <p className="text-[#C08552] text-sm">Caramel Cloud Latte</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
