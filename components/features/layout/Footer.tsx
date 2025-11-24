'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Browse Marketplace', href: '/' },
      { name: 'Tools', href: '/tools' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: 'https://twitter.com' },
    { name: 'Instagram', icon: '📸', href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Logo Background with Fade - Covering Whole Footer */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.12, 0.05]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <Image 
          src={'/assets/logo/logo-white.png'} 
          width={1200} 
          height={600} 
          alt='Reveal Prompt Background'
          className="w-full h-full object-cover opacity-10"
        /> 
      </motion.div>

      {/* Animated background orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#6A5BFF] rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF77E9] rounded-full blur-3xl" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image 
              src={'/assets/logo/logo-white.png'} 
              width={150} 
              height={50} 
              alt='Reveal Prompt Logo'
              className="mb-6"
            /> 
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.name}
                  type="button"
                  title={social.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ x: 4 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-3 text-sm"
                >
                  <span className="text-lg">{social.icon}</span>
                  {social.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mb-8"></div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Reveal Prompt. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A5BFF] via-[#FF77E9] to-[#6A5BFF]"></div>
    </footer>
  );
}