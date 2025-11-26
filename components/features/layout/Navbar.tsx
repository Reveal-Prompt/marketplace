"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[95%] mx-auto flex items-center justify-between py-4 px-6"
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
              width={200} 
              height={40}
              className="drop-shadow-lg"
            />
          </motion.div>
        </Link>

        {/* Navigation Links */}
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

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/marketplace">
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#FF77E9] to-[#FF99CC] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-white/20 text-sm">
              Get Started
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}