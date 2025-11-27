"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { Check, Copy, Zap, ArrowLeft } from "lucide-react";
import Loading from "../ui/Loading";

interface Product {
  _id: number;
  image: {
    type: string;
    format: string;
    base64: string;
  };
  category: string;
  image_description: string;
  short_prompt: string;
  long_prompt: string;
  rating?: number;
  reviews?: number;
  sales?: number;
  views?: number;
  ai_models?: string[];
}

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [revealPrompt, setRevealPrompt] = useState(false);

  // Fetch product data
  useEffect(() => {
    if (!productId) return;

    axios
      .get(`http://localhost:8080/api/prompts/${productId}`)
      .then((response) => {
        setProduct({
          ...response.data,
          views: response.data.views || 123, // static default for now
          rating: response.data.rating || 4.9,
          reviews: response.data.reviews || 342,
          sales: response.data.sales || 1250,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <Loading />;

  if (!product) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-linear-to-r from-[#6A5BFF] to-[#9B7CFF] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const currentProduct = product;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentProduct.short_prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-purple-50/30">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to marketplace</span>
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-purple-100 to-pink-100 shadow-2xl mb-4">
              <img
                src={`data:image/png;base64,${currentProduct.image.base64}`}
                alt="Product image"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentProduct.short_prompt}
            </h1>

            {/* Views & AI Badges */}
            <div className="flex items-center gap-6 mb-6">
              {/* Views */}
              <div className="flex items-center gap-2 bg-purple-100/40 px-3 py-1 rounded-full">
                <span className="text-purple-800 font-medium text-sm">
                  👁️ {currentProduct.views || 0} views
                </span>
              </div>

              {/* AI Models / Static Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  MidJourney
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  DALL·E
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  Stable Diffusion
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">
              {currentProduct.image_description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-br from-[#FFD4F0] via-[#FFE5CC] to-[#D4C5FF] text-gray-900 py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                onClick={() => setRevealPrompt(true)}
              >
                <span>Reveal Prompt</span>
              </motion.button>
            </div>

            {/* Reveal Prompt Modal */}
            {revealPrompt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-999"
                onClick={() => setRevealPrompt(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900 font-semibold text-xl flex items-center gap-2">
                      <Zap size={20} className="text-yellow-500" />
                      Prompt Revealed
                    </h3>

                    <button
                      onClick={() => setRevealPrompt(false)}
                      className="text-gray-400 hover:text-gray-600 transition"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="bg-gray-900 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-white font-medium">Your Prompt</p>

                      <button
                        onClick={handleCopyPrompt}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm flex items-center gap-2 transition"
                      >
                        {copiedPrompt ? (
                          <>
                            <Check size={16} className="text-green-400" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-gray-300 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                      {currentProduct.long_prompt}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
