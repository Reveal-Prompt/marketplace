"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import PromptPagination from "./PromptPagination";
import Loading from "../ui/Loading";

interface Product {
  _id: number;
  image: {
    type: string;
    format: string;
    base64: string;
  };
  image_description: string;
  long_prompt: string;
  short_prompt: string;
  category: string;
}

interface CardListProps {
  dataUrl: string;
  title?: string;
  subtitle?: string;
}

export default function CardList({
  dataUrl,
  title,
  subtitle,
}: CardListProps) {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggleType, setToggleType] = useState<"Midjourney" | "chatgpt">("Midjourney");
  const [currentPageItems, setCurrentPageItems] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((res) => {
        const data = res.data.data;
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dataset:", err);
        setLoading(false);
      });
  }, [dataUrl]);

  const handlePageChange = (page: number, pageItems: Product[]) => {
    setCurrentPageItems(pageItems);
  };

  const handleToggleChange = (newType: "Midjourney" | "chatgpt") => {
    setToggleType(newType);
    setCurrentPageItems([]);
  };

  useEffect(() => {
    setCurrentPageItems([]);
  }, [toggleType, items.length]);

  const displayItems = currentPageItems.length > 0 ? currentPageItems : items.slice(0, 9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="w-[90%] max-w-7xl mx-auto px-4 py-12" id="marketplace">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          {title || "Featured Prompts"}
        </h2>
        <p className="text-gray-600 text-lg">
          {subtitle || "Discover premium AI prompts crafted by experts"}
        </p>
      </motion.div>

      {/* Midjourney/ChatGPT Toggle */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 flex justify-center"
      >
        <div className="inline-flex rounded-full bg-gray-100 p-1 gap-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleToggleChange("Midjourney")}
            className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 ${
              toggleType === "Midjourney"
                ? "bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] text-white shadow-lg shadow-purple-500/30"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Midjourney
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleToggleChange("chatgpt")}
            className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 ${
              toggleType === "chatgpt"
                ? "bg-gradient-to-r from-[#6A5BFF] to-[#9B7CFF] text-white shadow-lg shadow-purple-500/30"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            ChatGPT
          </motion.button>
        </div>
      </motion.div>

      {/* Loading */}
      {loading && <Loading />}

      {/* Cards Grid */}
      {!loading && (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={toggleType}
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8"
          >
            {displayItems.length > 0 ? (
              displayItems.map((product) => (
                <motion.div key={product._id}>
                  <Card
                    type="product"
                    _id={product._id}
                    image={product.image}
                    long_prompt={product.long_prompt}
                    short_prompt={product.short_prompt}
                    image_description={product.image_description}
                    category={product.category}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No prompts found
                </h3>
                <p className="text-gray-500">Try selecting a different option</p>
              </motion.div>
            )}
          </motion.div>

          {/* Pagination */}
          {items.length > 0 && (
            <div className="mt-12 flex justify-center">
              <PromptPagination
                products={items}
                itemsPerPage={9}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}