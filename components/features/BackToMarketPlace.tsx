'use client';
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackTomarketPlace() {

    const router = useRouter();
    
    return (
        <>
            <div>
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
            </div>
        </>
    )
}