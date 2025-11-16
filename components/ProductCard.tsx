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

export default function ProductCard({ 
  id,
  image, 
  title, 
  price, 
  category = "AI Prompt",
  rating = 4.8 
}: ProductCardProps) {

  const [isFavorited, setIsFavorited] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="w-full group">
      {/* Card Container */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-purple-100 to-pink-100 shadow-md hover:shadow-2xl transition-all duration-500">

        {/* Favorite Button (shadcn) */}
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setIsFavorited(!isFavorited)}
          className={`
            absolute top-3 right-3 z-10
            w-9 h-9 rounded-full
            backdrop-blur-sm transition-all duration-300 shadow-sm
            ${isFavorited 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/90 text-gray-700 hover:bg-white hover:scale-110'
            }
          `}
        >
          <Heart 
            size={16} 
            fill={isFavorited ? "currentColor" : "none"}
            className="transition-all duration-300"
          />
        </Button>

        {/* Image Section */}
        <Link href={`/products/${id}`}>
             <div className="relative h-72 overflow-hidden">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
            </div>
          )}

          <img
            src={image}
            alt={title}
            onLoad={() => setIsImageLoaded(true)}
            className={`
              w-full h-full object-cover transition-all duration-500
              ${isImageLoaded ? "opacity-100" : "opacity-0"}
              group-hover:scale-110
            `}
          />
        </div>
</Link>
       

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            flex flex-col justify-end p-4
          "
        >

          <div className="flex items-center gap-2">

            {/* View Details Button (shadcn) */}
            <Link href={`/products/${id}`} className="flex-1">
  <Button
              className="
                flex-1 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5
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
            

            {/* Shopping Cart Button (shadcn) */}
            <Button 
              size="icon"
              className="
                w-11 h-11 rounded-xl text-white
                bg-linear-to-br from-[#6A5BFF] to-[#9B7CFF]
                flex items-center justify-center
                hover:shadow-lg hover:shadow-purple-500/50
                transform hover:scale-110 active:scale-95
                transition-all duration-300
              "
            >
              <ShoppingCart size={18} />
            </Button>

          </div>
        </div>

      </div>

      {/* Product Info */}
      <div className="mt-4 px-1">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-linear-to-r from-[#6A5BFF] to-[#FF77E9] bg-clip-text text-transparent">
            ${price}
          </span>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Free
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
