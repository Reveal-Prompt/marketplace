"use client";
import React, { useState } from "react";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  category?: string;
  rating?: number;
}

interface ToolCardProps {
  id: number;
  toolname: string;
  description: string;
  image: string;
}

// Combined type that accepts either ProductCardProps or ToolCardProps
type CardProps = ProductCardProps | ToolCardProps;

export default function Card(props: CardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Determine if it's a product or tool
  const isProduct = 'title' in props;
  
  // Extract the appropriate values
  const id = props.id;
  const image = props.image;
  const displayTitle = isProduct ? props.title : props.toolname;
  const linkHref = isProduct ? `/products/${id}` : `/tools/${props.toolname}`;
  const price = isProduct ? props.price : "";

  return (
    <div className="w-full group">
        <Link href={linkHref}>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-md hover:shadow-2xl transition-all duration-500">

        {/* Favorite Button */}
       
        {/* Image Section */}
        <Link href={linkHref}>
          <div className="relative h-72 overflow-hidden cursor-pointer">
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
              </div>
            )}

            <img
              src={image}
              alt={displayTitle}
              onLoad={() => setIsImageLoaded(true)}
              className={`
                w-full h-full object-cover transition-all duration-500
                ${isImageLoaded ? "opacity-100" : "opacity-0"}
                group-hover:scale-110
              `}
            />
          </div>
        </Link>

        {/* Hover Overlay - Different for products and tools */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            flex flex-col justify-end p-4
          "
        >
          {isProduct ? (
            // Product buttons
            <div className="flex items-center gap-2">
              {/* View Details Button */}
              <Link href={linkHref} className="flex-1">
                <Button
                  className="
                    w-full bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5
                    text-gray-900 font-semibold flex items-center justify-between
                    hover:bg-white transition-all duration-300
                    transform hover:scale-[1.02] active:scale-[0.98]
                    shadow-lg
                  "
                >
                  <span>View Details</span>
                  <Eye size={18} />
                </Button>
              </Link>

              {/* Shopping Cart Button */}
              {/* <Button 
                size="icon"
                className="
                  w-11 h-11 rounded-xl text-white
                  bg-gradient-to-br from-[#6A5BFF] to-[#9B7CFF]
                  flex items-center justify-center
                  hover:shadow-lg hover:shadow-purple-500/50
                  transform hover:scale-110 active:scale-95
                  transition-all duration-300
                "
              >
                <ShoppingCart size={18} />
              </Button> */}
            </div>
          ) : (
            // Tool description
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <p className="text-gray-800 text-sm leading-relaxed">
                {props.description}
              </p>
            </div>
          )}
        </div>
      </div>
        </Link>
      {/* Card Container */}
      

      {/* Card Info */}
      <div className="mt-4 px-1">

        <Link href={linkHref}>
         <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {displayTitle}
        </h3>
        </Link>
       

        {/* Only show price for products */}
        {isProduct && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Free
              </span>
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
}