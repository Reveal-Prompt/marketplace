"use client";
import { motion } from "framer-motion";
import NavBar from "../features/layout/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface BannerProps {
  page?: string;
}

export function HeroSection({ page = "/" }: BannerProps) {
  const pathname = usePathname();
  const isNotMarketPlace = pathname === "/";

  // Dummy prompts data
  const dummyPrompts = [
    {
      id: 1,
      image: "🎨",
      title: "Epic Fantasy Landscape",
      message: "✨ Premium prompt ready",
    },
    {
      id: 2,
      image: "🚀",
      title: "Sci-Fi Architecture",
      message: "🎯 Optimized for Midjourney",
    },
    {
      id: 3,
      image: "🌌",
      title: "Cosmic Nebula",
      message: "💫 Trending prompt",
    },
    {
      id: 4,
      image: "🏰",
      title: "Medieval Castle",
      message: "⭐ High quality result",
    },
  ];

  return (
    <motion.div
      initial={{ height: 500, opacity: 1 }}
      animate={{
        height: isNotMarketPlace ? 700 : 90,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-[99%] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFD4F0] via-[#FFE5CC] to-[#D4C5FF] shadow-[0_20px_100px_rgba(155,124,255,0.3)]"
    >
      {/* Premium Background Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FF77E9] to-[#FFB6E1] rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-[#6A5BFF] to-[#9B7CFF] rounded-full blur-3xl"
      />

      {/* Navbar with Logo Background */}
      <div className="relative z-20 w-full px-8">
        <NavBar />
      </div>

      {/* Main Banner Content */}
      {isNotMarketPlace && (
        <div className="relative z-10 grid grid-cols-2 items-center gap-12 px-16 py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-start max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 border border-white/40 backdrop-blur-sm mb-6 hover:bg-white/40 transition-all"
            >
              <span className="w-2 h-2 bg-[#FF77E9] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">✨ Powered by Midjourney</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-6xl md:text-7xl font-bold tracking-tight mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Prompt Marketplace
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-700 max-w-lg leading-relaxed mb-8 font-medium"
            >
              Discover premium Midjourney prompts and AI resources. Create stunning visuals with expertly crafted prompts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4"
            >
              <Link href={"/"}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(106, 91, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-linear-to-r from-[#6A5BFF] to-[#9B7CFF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Marketplace →
                </motion.button>
              </Link>
              <Link href={"/tools"}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-gray-800 text-gray-900 font-semibold rounded-lg hover:bg-black/5 transition-all duration-300"
                >
                  Browse Tools
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t-2 border-gray-300"
            >
              <div>
                <p className="text-2xl font-bold text-gray-900">5K+</p>
                <p className="text-sm text-gray-700">Premium Prompts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-700">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-700">Curated Content</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Visual Section - Floating Prompts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center items-center h-[500px]"
          >
            {/* Floating Prompt Cards */}
            {dummyPrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}

              
                className={`absolute w-64 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50 hover:shadow-[0_20px_40px_rgba(106,91,255,0.3)] transition-all ${
                  index === 0 ? "top-0 left-0" : ""
                } ${index === 1 ? "top-32 right-0" : ""} ${
                  index === 2 ? "bottom-20 left-12" : ""
                } ${index === 3 ? "bottom-0 right-12" : ""}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{prompt.image}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{prompt.title}</p>
                    <p className="text-xs text-gray-600">{prompt.message}</p>
                  </div>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#FFD4F0] to-[#D4C5FF] rounded-lg flex items-center justify-center text-3xl font-bold text-white/30">
                  ✨
                </div>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-16 h-16 border-2 border-[#FF77E9]/40 rounded-lg"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 left-0 w-12 h-12 border-2 border-[#6A5BFF]/40 rounded-full"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}