'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// React Icons
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Browse Marketplace', href: '/' },
      { name: 'Tools', href: '/tools' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
     
     
    ],
    legal: [
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms of Service', href: '/' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com' },
  ];

  const linkClass = "text-gray-400 hover:text-[#FF77E9] transition-all duration-200 hover:translate-x-1 inline-block";

  return (
    <footer className="relative w-full bg-black text-gray-300 overflow-hidden">

      {/* Logo Background */}
      <motion.div 
        animate={{ opacity: [0.1, 0.12, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <Image 
          src={'/assets/logo/logo-white.png'} 
          width={1200} 
          height={600} 
          alt='Background'
          className="w-full h-full object-cover opacity-10"
        /> 
      </motion.div>

      {/* Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#6A5BFF] rounded-full blur-3xl" 
      />

      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF77E9] rounded-full blur-3xl" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">

        {/* Top Section - Logo and Main Content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Image 
              src={'/assets/logo/logo-white.png'} 
              width={150} 
              height={50} 
              alt='Logo'
              className=""
            /> 
            <p className="text-gray-400 mt-4 max-w-xs leading-relaxed text-sm">
              Discover premium prompts and AI resources. Create stunning visuals with expertly crafted prompts.
            </p>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* Product Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-5 text-base uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-5 text-base uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h4 className="text-white font-semibold mb-5 text-base uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-5 text-base uppercase tracking-wider">Follow Us</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    className="text-gray-400 hover:text-[#FF77E9] transition-all duration-200 flex items-center gap-3 text-sm"
                  >
                    <span className="text-lg">{social.icon}</span>
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider with gradient */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-[#FF77E9]/50 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Reveal Prompt. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaEnvelope className="text-[#FF77E9]" />
            <span>support@revealprompt.com</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}