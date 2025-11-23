"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import PromptPagination from "./PromptPagination";
import { useRouter } from "next/navigation";

interface Product {
  _id:  number;
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

interface Tool {
  id: number;
  name: string;
  toolname: string;
  description: string;
  image: string;
  category?: string;
}

type CardItem = Product | Tool;

interface CardListProps {
  type: "products" | "tools";
  dataUrl: string;
  title?: string;
  subtitle?: string;
}

export default function CardList({
  type = "products",
  dataUrl,
  title,
  subtitle,
}: CardListProps) {
  const [items, setItems] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPageItems, setCurrentPageItems] = useState<CardItem[]>([]);
  const router = useRouter();

  const categories = ["All", "Landscape", "Sci-Fi", "Fantasy", "Writing", "Business"];

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((res) => {
        const data = res.data.data; // ensure API returns { data: [...] }
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dataset:", err);
        setLoading(false);
      });
  }, [dataUrl]);

  // Type guard for products
  const isProduct = (item: CardItem): item is Product => "image_description" in item;

  const filteredItems =
    type === "products" && selectedCategory === "All"
      ? items
      : type === "products"
      ? items.filter((item) => isProduct(item) && item.category === selectedCategory)
      : items;

  const handlePageChange = (page: number, pageItems: CardItem[]) => {
    setCurrentPageItems(pageItems);
  };

  useEffect(() => {
    setCurrentPageItems([]);
  }, [filteredItems.length, selectedCategory]);

  const displayItems = currentPageItems.length > 0 ? currentPageItems : filteredItems.slice(0, 9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          {title || (type === "products" ? "Featured Prompts" : "Featured Tools")}
        </h2>
        <p className="text-gray-600 text-lg">
          {subtitle ||
            (type === "products"
              ? "Discover premium AI prompts crafted by experts"
              : "Explore powerful AI tools for your projects")}
        </p>
      </motion.div>

      {/* Category Filter */}
      {/* {type === "products" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPageItems([]);
              }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-linear-to-r from-[#6A5BFF] to-[#9B7CFF] text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      )} */}


      {/* Loading */}
      {loading && <div className="py-20 text-center">Loading...</div>}

      {/* Cards Grid */}
      {!loading && (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8"
          >
            {displayItems.length > 0 ? (
              displayItems.map((item) =>
                isProduct(item) ? (
                  <motion.div key={item._id}>
                    <Card
                      type="product"
                      _id={item._id}
                      image={item.image} 
                      long_prompt={item.long_prompt}
                      short_prompt={item.short_prompt}
                      image_description={item.image_description}
                      category={item.category}
                    />
                  </motion.div>
                ) : (
                  <motion.div key={item.id}>
                    <Card
                      type="tool"
                      id={item.id}
                      image={item.image}
                      toolname={item.toolname}
                      description={item.description}
                    />
                  </motion.div>
                )
              )
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No {type} found
                </h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </motion.div>
            )}
          </motion.div>

          {/* Pagination */}
          {filteredItems.length > 0 && (
            <div className="mt-12 flex justify-center">
              <PromptPagination
                products={filteredItems}
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
