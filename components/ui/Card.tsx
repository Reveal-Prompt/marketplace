"use client";
import React, { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface ProductCardProps {
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

interface ToolCardProps {
  id: number;
  toolname: string;
  description: string;
  image: string;
}

type CardProps = 
  | ({ type: "product" } & ProductCardProps)
  | ({ type: "tool" } & ToolCardProps);

export default function Card(props: CardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isProduct = props.type === "product";

  const image = isProduct ? props.image.base64 : props.image;
  const displayTitle = isProduct ? props.short_prompt : props.toolname;

  const linkHref = isProduct ? `/products/${props._id}` : `/tools/${props.toolname}`;
  console.log(linkHref)
  const description = isProduct ? props.long_prompt : props.description;
  const category = isProduct ? props.category : undefined;

  return (
    <Link href={linkHref} className="block w-full group">
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-purple-100 to-pink-100 shadow-md hover:shadow-2xl transition-all duration-500">
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden cursor-pointer">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={image ? `data:${isProduct ? props.image.format : "image/jpeg"};base64,${image}` : ""}
            alt={displayTitle}
            onLoad={() => setIsImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-110`}
          />
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0
            bg-linear-to-t from-black/80 via-black/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            flex flex-col justify-end p-4"
        >
          {isProduct ? (
            <div className="flex items-center gap-2">
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
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Card Info */}
      <div className="mt-4 px-1">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {displayTitle}
        </h3>

        {isProduct && category && (
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
