"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tools", href: "/tools" },
  ];

  const isActive = (href: string) => pathname === href;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToMarketplace = () => {
    const marketplaceSection = document.getElementById("marketplace");
    if (marketplaceSection) {
      marketplaceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="w-full relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[95%] mx-auto flex items-center justify-between py-4 px-4 md:px-6"
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image 
              src="/assets/logo/logo.png" 
              alt="Logo" 
              width={150} 
              height={30}
              className="drop-shadow-lg md:w-[200px] md:h-[40px]"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-2 border border-white/20 shadow-lg">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </motion.span>

                {/* Active Indicator Pill */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover Background */}
                {!isActive(link.href) && (
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/20 rounded-full -z-10"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link href="/">
            <button onClick={() => scrollToMarketplace()} className="px-6 py-2 bg-gradient-to-r from-[#FF77E9] to-[#FF99CC] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-white/20 text-sm">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-[95%] mx-auto overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-4 space-y-2"
            >
              {/* Mobile Navigation Links */}
              {navLinks.map((link, index) => (
                <Link key={link.href} href={link.href} onClick={toggleMenu}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="relative"
                  >
                    <motion.span
                      whileTap={{ scale: 0.98 }}
                      className={`block px-4 py-3 rounded-xl font-semibold text-base transition-all cursor-pointer ${
                        isActive(link.href)
                          ? "text-white"
                          : "text-gray-800 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </motion.span>

                    {/* Active Indicator */}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="mobileNavPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] rounded-xl -z-10 shadow-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <Link href="/marketplace" onClick={toggleMenu}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#FF77E9] to-[#FF99CC] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-white/20 text-base">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}