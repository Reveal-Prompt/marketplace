"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import PromptPagination from "./PromptPagination";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  image: string;
  prompt: string;
  category: string;
  price: string;
  title: string;
}

interface Tool {
  name: string
  id: number;
  toolname: string;
  description: string;
  image: string;
  category?: string;
}

// Union type for items
type CardItem = Product | Tool;

interface CardListProps {
  type: "products" | "tools";
  dataUrl: string;
  title?: string;
  subtitle?: string;
  searchQuery?: string; 
}

export default function CardList({ 
  type = "products",
  dataUrl,
  title,
  subtitle
}: CardListProps) {
  const [items, setItems] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPageItems, setCurrentPageItems] = useState<CardItem[]>([]);
  const router = useRouter();
  const categories = ["All", "Landscape", "Sci-Fi", "Fantasy", "Writing", "Business"];

  useEffect(() => {
    axios.get(dataUrl)
      .then(res => {
        // Handle different data structures
        const data = type === "products" ? res.data.prompts : res.data.tools || res.data;
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching dataset:", err);
        setLoading(false);
      });
  }, [dataUrl, type]);

  // Type guard to check if item is a Product
  const isProduct = (item: CardItem): item is Product => {
    return 'title' in item;
  };
  
  const filteredItems = type === "products" && selectedCategory === "All" 
    ? items 
    : type === "products"
    ? items.filter(item => {
        if (isProduct(item)) {
          return item.category === selectedCategory;
        }
        return false;
      })
    : items; // For tools, don't filter


  const handlePageChange = (page: number, pageItems: CardItem[]) => {
    setCurrentPageItems(pageItems);
  };


  useEffect(() => {
    setCurrentPageItems([]);
  }, [filteredItems.length, selectedCategory]);


  const displayItems = currentPageItems.length > 0 ? currentPageItems : filteredItems.slice(0, 9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto px-4 py-6">
       
      </div>
      {/* Header Section */}
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
          {subtitle || (type === "products" 
            ? "Discover premium AI prompts crafted by experts" 
            : "Explore powerful AI tools for your projects"
          )}
        </p>
      </motion.div>

      {/* Category Filter - Only show for products */}
      {type === "products" && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-3 "
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
              className={`
                px-6 py-2.5 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-linear-to-r from-[#6A5BFF] to-[#9B7CFF] text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      )}
         
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-pink-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
        </div>
      )}

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
              displayItems.map((item) => {
                // Render product card
                if (isProduct(item)) {
                  return (
                    <motion.div key={item.id} >
                      <Card
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                      />
                    </motion.div>
                  );
                } 
                // Render tool card
                else {
                  return (
                    <motion.div key={item.id} >
                      <Card
                        
                        id={item.id}
                        image={item.image}
                        toolname={item.name}
                        description={item.description}
                      />
                    </motion.div>
                  );
                }
              })
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
                <p className="text-gray-500">
                  Try selecting a different category
                </p>
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