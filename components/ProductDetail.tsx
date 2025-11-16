"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Check, 
  Copy,
  Download,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowLeft
} from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  category: string;
  description?: string;
  prompt: string;
  rating?: number;
  reviews?: number;
  sales?: number;
}

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Fetch product data
  useEffect(() => {
    if (!productId) return;

    axios.get("/dataset.json")
      .then(res => {
        const products = res.data.prompts;
        const foundProduct = products.find((p: Product) => p.id.toString() === productId);
        
        if (foundProduct) {
          // Add default values for optional fields
          setProduct({
            ...foundProduct,
            description: foundProduct.description || "Premium AI prompt designed for optimal results. Perfect for professionals looking to enhance their workflow.",
            rating: foundProduct.rating || 4.9,
            reviews: foundProduct.reviews || 342,
            sales: foundProduct.sales || 1250
          });
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-pink-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const currentProduct = product;

  const images = [
    currentProduct.image,
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  ];

  const features = [
    { icon: Zap, title: "Instant Results", desc: "Get high-quality outputs immediately" },
    { icon: Shield, title: "Money-back Guarantee", desc: "30-day satisfaction guarantee" },
    { icon: Download, title: "Lifetime Access", desc: "Use unlimited times forever" },
    { icon: Users, title: "Community Support", desc: "Join 10k+ active users" }
  ];

  const reviews = [
    { name: "Sarah Johnson", rating: 5, comment: "This prompt saved me hours of work! Highly recommended.", date: "2 days ago" },
    { name: "Mike Chen", rating: 5, comment: "Best investment I've made for my marketing campaigns.", date: "1 week ago" },
    { name: "Emma Davis", rating: 4, comment: "Great prompt, very versatile and easy to customize.", date: "2 weeks ago" }
  ];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentProduct.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
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
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl mb-4">
              <img
                src={images[selectedImage]}
                alt={currentProduct.title}
                className="w-full h-[500px] object-cover"
              />
              
             

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`w-11 h-11 rounded-full backdrop-blur-sm flex items-center justify-center transition-all shadow-lg ${
                    isFavorited ? 'bg-red-500 text-white' : 'bg-white/95 text-gray-700'
                  }`}
                >
                  <Heart size={20} fill={isFavorited ? "currentColor" : "none"} />
                </button>
                <button className="w-11 h-11 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all shadow-lg">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

           
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title & Rating */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentProduct.title}
            </h1>


            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold bg-gradient-to-r from-[#6A5BFF] to-[#FF77E9] bg-clip-text text-transparent">
                ${currentProduct.price}
              </span>
             
             
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">
              {currentProduct.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={22} />
                Add to Cart
              </motion.button>
             
            </div>

            {/* Prompt Preview */}
            <div className="bg-gray-900 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Zap size={18} className="text-yellow-400" />
                  Prompt Preview
                </h3>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all"
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
              <p className="text-gray-300 text-sm font-mono leading-relaxed">
                {currentProduct.prompt}
              </p>
            </div>

         
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}