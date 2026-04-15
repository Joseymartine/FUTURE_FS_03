import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [showAll, setShowAll] = useState(false);

  const menuItems = [
    {
      category: 'Signature Brews',
      items: [
        { name: 'Phyna House Blend', price: '$4.50', desc: 'Our signature medium-dark roast with notes of chocolate and almond.' },
        { name: 'Midnight Espresso', price: '$3.50', desc: 'Intense and velvety smooth with a rich golden crema.' },
        { name: 'Caramel Cloud Latte', price: '$5.75', desc: 'Hand-crafted caramel with micro-foam and a dash of sea salt.' },
        { name: 'Vanilla Bean Flat White', price: '$5.25', desc: 'Smooth espresso with velvety steamed milk and natural vanilla.' },
      ]
    },
    {
      category: 'Artisan Pastries',
      items: [
        { name: 'Honeycomb Croissant', price: '$4.25', desc: 'Flaky, buttery layers with locally sourced honey glaze.' },
        { name: 'Spiced Pumpkin Muffin', price: '$3.75', desc: 'Seasonal favorite with toasted pepitas and ginger spice.' },
        { name: 'Almond Biscotti', price: '$2.50', desc: 'Double-baked traditional Italian almond biscuit.' },
        { name: 'Dark Chocolate Brownie', price: '$4.00', desc: 'Fudgy brownie made with 70% Tanzanian cocoa.' },
      ]
    }
  ];

  const extraItems = [
    {
      category: 'Cold Refreshers',
      items: [
        { name: 'Hibiscus Iced Tea', price: '$4.50', desc: 'Floral and tart hibiscus petals brewed with a touch of mint.' },
        { name: 'Nitro Cold Brew', price: '$5.50', desc: 'Velvety smooth cold brew infused with nitrogen for a creamy head.' },
        { name: 'Matcha Green Tea Latte', price: '$5.80', desc: 'Premium grade matcha whisked with your choice of milk.' },
        { name: 'Sparkling Cascara', price: '$4.75', desc: 'Refreshing juice made from the dried skin of coffee cherries.' },
      ]
    },
    {
      category: 'Savoury Treats',
      items: [
        { name: 'Avocado Toast', price: '$8.50', desc: 'Smashed avocado on sourdough with chili flakes and lime.' },
        { name: 'Smoked Turkey Sandwich', price: '$9.25', desc: 'Premium turkey breast with cranberry chutney and brie.' },
        { name: 'Spinach & Feta Quiche', price: '$7.50', desc: 'Classic buttery crust filled with fresh greens and tangy feta.' },
      ]
    }
  ];

  const allSections = showAll ? [...menuItems, ...extraItems] : menuItems;

  return (
    <section id="menu" className="bg-[#4B2E2B]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#4B2E2B] mb-4"
          >
            Our Seasonal Menu
          </motion.h2>
          <div className="w-20 h-1 bg-[#C08552] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {allSections.map((section, idx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold text-[#C08552] mb-8 border-b border-[#C08552]/20 pb-4">
                  {section.category}
                </h3>
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between gap-4 group">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-bold text-[#4B2E2B] group-hover:text-[#C08552] transition-colors">
                            {item.name}
                          </span>
                          <span className="font-bold text-[#C08552]">{item.price}</span>
                        </div>
                        <p className="text-sm text-[#8C5A3C]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn btn-secondary"
          >
            {showAll ? 'View Less' : 'View Full Digital Menu'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
