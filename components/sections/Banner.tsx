"use client";
import { motion } from "framer-motion";
import NavBar from "../features/layout/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BannerProps {
  page?: string;
}

export function Banner({ page = "/" }: BannerProps) {
  const pathname = usePathname();
  const isNotMarketPlace = pathname === "/";

  return (
    <motion.div
      initial={{ height: 500, opacity: 1 }}
      animate={{
        height: isNotMarketPlace ? 600 : 90,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-[99%] mx-auto rounded-3xl overflow-hidden bg-linear-to-br from-[#FFD4F0] via-[#FFE5CC] to-[#D4C5FF] shadow-[0_20px_100px_rgba(155,124,255,0.3)]"
    >
      {/* Background Gradient Orbs */}
      {!isNotMarketPlace && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-linear-to-br from-[#FF77E9] to-[#FFB6E1] rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.35, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tl from-[#6A5BFF] to-[#9B7CFF] rounded-full blur-3xl"
          />
        </>
      )}

      {/* Navbar Always Visible */}
      <div className="relative z-20 w-full px-8 pt-5">
        <NavBar />
      </div>

      {/* Main Banner Content */}
      {isNotMarketPlace && (
        <div className="absolute inset-0 grid grid-cols-2 items-center gap-10 px-20 z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col items-start max-w-lg"
          >
            <motion.h1
              className="text-7xl font-bold tracking-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-gray-900">Prompt</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-7xl font-bold mb-6"
            >
              Marketplace
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-700 text-lg font-medium max-w-md leading-relaxed"
            >
              Discover, share, and trade premium AI prompts. Your gateway to
              cutting-edge AI creativity.
            </motion.p>

            <Link href={"/tools"}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              >
                Explore &gt;
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Character Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.img
              src="/assets/characters/hero-img-3.png"
              alt="AI Astronaut"
              className="h-[430px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(155,124,255,0.5)]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </motion.div>
        </div>
      )}

      {/* Decorative Shapes */}
      {isNotMarketPlace && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/4 w-12 h-12 border-2 border-[#FF77E9]/30 rounded-lg"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-24 left-1/3 w-8 h-8 border-2 border-[#6A5BFF]/30 rounded-full"
          />
        </>
      )}
    </motion.div>
  );
}
