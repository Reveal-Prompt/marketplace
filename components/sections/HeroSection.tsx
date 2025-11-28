"use client";
import { motion } from "framer-motion";
import NavBar from "../features/layout/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton"; // shadcn/ui Skeleton

interface Prompt {
  _id: number;
  image?: {
    type: string;
    format: string;
    base64: string;
  };
  short_prompt: string;
  title?: string;
}

export function HeroSection() {
  const pathname = usePathname();
  const isNotMarketPlace = pathname === "/";

  const scrollToMarketplace = () => {
    const marketplaceSection = document.getElementById("marketplace");
    if (marketplaceSection) {
      marketplaceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [items, setItems] = useState<Prompt[]>([]);

  useEffect(() => {
    const fetchPrompts = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await axios.get<{ data: Prompt[] }>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prompts?limit=${itemsPerPage}`
        );
        setItems(response.data.data ?? []);
      } catch (err) {
        console.error("Error fetching prompts:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, [itemsPerPage]);

  return (
    <motion.div
      key={pathname}
      initial={{ height: 500, opacity: 1 }}
      animate={{ height: isNotMarketPlace ? "auto" : 90 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-[99%] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFD4F0] via-[#FFE5CC] to-[#D4C5FF] shadow-[0_20px_100px_rgba(155,124,255,0.3)]"
    >
      {/* Background gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-[#FF77E9] to-[#FFB6E1] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tl from-[#6A5BFF] to-[#9B7CFF] rounded-full blur-3xl"
      />

      {/* Navbar */}
      <div className="relative z-20 w-full px-2 md:px-8">
        <NavBar />
      </div>

      {isNotMarketPlace && (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-start max-w-xl mx-auto lg:mx-0"
          >
           

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Prompt Marketplace
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed mb-6 sm:mb-8 font-medium"
            >
              Discover premium Midjourney prompts and AI resources. Create stunning visuals with expertly crafted prompts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <motion.button
                onClick={scrollToMarketplace}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(106, 91, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Explore Marketplace →
              </motion.button>
              <Link href="/tools" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-800 text-gray-900 font-semibold rounded-lg hover:bg-black/5 transition-all duration-300 text-sm sm:text-base"
                >
                  Browse Tools
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative hidden lg:flex justify-center items-center h-[400px] lg:h-[500px]"
          >
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, index) => (
                  <div
                    key={index}
                    className={`absolute w-56 lg:w-64 rounded-2xl p-3 lg:p-4 ${
                      index === 0 ? "top-0 left-0" : ""
                    } ${index === 1 ? "top-32 right-0" : ""} ${
                      index === 2 ? "bottom-20 left-12" : ""
                    } ${index === 3 ? "bottom-0 right-12" : ""}`}
                  >
                    <Skeleton className="w-full h-36 rounded-lg mb-3" />
                    <Skeleton className="w-3/4 h-4 rounded mb-1" />
                    <Skeleton className="w-1/2 h-3 rounded" />
                  </div>
                ))
              : items.map((prompt, index) => {
                  const creator = `Creator${index + 1}`;
                  const imageSrc = prompt.image?.base64
                    ? `data:${prompt.image.type};base64,${prompt.image.base64}`
                    : "✨";

                  return (
                    <motion.div
                      key={prompt._id}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`absolute w-56 lg:w-64 bg-white/90 backdrop-blur-xl rounded-2xl p-3 lg:p-4 shadow-2xl border border-white/50 hover:shadow-[0_20px_40px_rgba(106,91,255,0.3)] transition-all cursor-pointer ${
                        index === 0 ? "top-0 left-0" : ""
                      } ${index === 1 ? "top-32 right-0" : ""} ${
                        index === 2 ? "bottom-20 left-12" : ""
                      } ${index === 3 ? "bottom-0 right-12" : ""}`}
                    >
                      <div className="w-full h-36 mb-3 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                        {prompt.image?.base64 ? (
                          <img
                            src={imageSrc}
                            alt={prompt.short_prompt}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-4xl">{imageSrc}</span>
                        )}
                      </div>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base truncate mb-1">
                        {prompt.short_prompt || prompt.title}
                      </p>
                      <p className="text-[10px] lg:text-xs text-gray-600">by {creator}</p>
                    </motion.div>
                  );
                })}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
