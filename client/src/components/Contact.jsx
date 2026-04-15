import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus('Unable to reach the server. Please check if the backend is running.');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="bg-[#4B2E2B]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#4B2E2B] mb-6"
            >
              Visit Our <span className="text-[#C08552]">Coffee House.</span>
            </motion.h2>
            <p className="text-[#8C5A3C] text-lg mb-10">
              Have a question or just want to say hi? Drop us a message or visit us in person. We'd love to brew something special for you.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: 'Address', val: 'Dodoma, Tanzania' },
                { icon: <Phone className="w-5 h-5" />, label: 'Phone', val: '+255 629 586 055' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email', val: 'josephinemartine503@gmail.com' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C08552]/10 flex items-center justify-center text-[#C08552]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#C08552] uppercase tracking-wider">{item.label}</p>
                    <p className="text-[#4B2E2B] font-medium">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#4B2E2B] hover:bg-[#C08552] hover:text-white transition-all">
                <InstagramIcon />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#4B2E2B] hover:bg-[#C08552] hover:text-white transition-all">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[32px] shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#4B2E2B] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C08552]/20 focus:outline-none focus:border-[#C08552] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#4B2E2B] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C08552]/20 focus:outline-none focus:border-[#C08552] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#4B2E2B] mb-2">Your Message</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your next visit..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C08552]/20 focus:outline-none focus:border-[#C08552] transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'Sending...'}
                className="btn btn-primary w-full py-4 text-lg"
              >
                {status || 'Send Message'}
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
