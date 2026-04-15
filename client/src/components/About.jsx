import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Heart } from 'lucide-react';
import aboutImg from '../assets/about.png';

const About = () => {
  const features = [
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      title: 'Ethically Sourced', 
      desc: 'We partner directly with farmers to ensure fair wages and sustainable practices.' 
    },
    { 
      icon: <Leaf className="w-6 h-6" />, 
      title: 'Small Batch Roasted', 
      desc: 'Roasting daily in our vintage Probat to guarantee peak freshness in every cup.' 
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: 'Community Driven', 
      desc: 'A space designed for connections, creativity, and the love of great coffee.' 
    },
  ];

  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img 
                src={aboutImg} 
                alt="Coffee Roasting" 
                className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C08552]/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#4B2E2B] mb-6"
            >
              Our Craft, Your <span className="text-[#C08552]">Daily Ritual.</span>
            </motion.h2>
            <p className="text-[#8C5A3C] text-lg mb-10">
              Founded in 2018, Phyna Coffee Bar began with a simple mission: to make world-class coffee accessible to our local community. We believe that coffee is more than just caffeine—it's a moment of pause, a bridge between people, and a craft worth perfecting.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C08552]/10 flex items-center justify-center text-[#C08552] shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4B2E2B] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#8C5A3C]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
