import React from "react";
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="w-full">
      {/* Image container with hover overlay - separate from title/price */}
      <div className="relative group rounded-xl overflow-hidden">
        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-xl"
        />

        {/* Hover Bottom Buttons - Only over image */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            p-4 flex items-center gap-3
            bg-linear-to-t from-black/70 via-black/20 to-transparent
          "
        >
          {/* Shop Now */}
          <button
            className="
              flex-1 bg-black/80 rounded-full px-5 py-2
              text-white font-medium flex items-center justify-between
              backdrop-blur cursor-pointer hover:bg-black/90
            "
          >
            <span>Shop Now</span>
            <span>→</span>
          </button>

          {/* Cart */}
          <button className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center cursor-pointer">
            <ShoppingCart />
          </button>

          {/* Favorite */}
          <button className="w-10 h-10 bg-purple-600 rounded-full text-white flex items-center justify-center cursor-pointer">
            <Heart />
          </button>
        </div>
      </div>

      {/* Title + price - Outside the hover group */}
      <div className="mt-3">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-blue-700 font-medium">{price}</p>
      </div>
    </div>
  );
}