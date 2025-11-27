"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ReviewSection() {
 const [reviews, setReviews] = useState([
  { name: "Sarah Johnson", rating: 5, comment: "This prompt saved me hours of work! Highly recommended.", date: "2 days ago" },
  { name: "Mike Chen", rating: 5, comment: "Best investment I've made for my marketing campaigns.", date: "1 week ago" },
  { name: "Emma Davis", rating: 4, comment: "Great prompt, very versatile and easy to customize.", date: "2 weeks ago" },
  { name: "Liam Smith", rating: 5, comment: "Absolutely fantastic! The output quality is superb.", date: "3 days ago" },
  { name: "Olivia Brown", rating: 4, comment: "Really useful for my AI art projects. Saves a lot of time.", date: "5 days ago" },
  { name: "Noah Wilson", rating: 5, comment: "Excellent prompt with clear instructions. Highly effective.", date: "1 week ago" },
  { name: "Ava Martinez", rating: 4, comment: "Works well but needed slight adjustments for my use case.", date: "2 weeks ago" },
  { name: "Ethan Taylor", rating: 5, comment: "I love it! The results exceeded my expectations.", date: "3 weeks ago" },
  { name: "Sophia Anderson", rating: 5, comment: "Perfect for generating high-quality images consistently.", date: "1 month ago" },
  { name: "James Thomas", rating: 4, comment: "Very good prompt, very intuitive and flexible.", date: "1 month ago" }
]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  // 🔥 FIXED TYPE-SAFE HANDLECHANGE
  type FormDataType = typeof formData;

  const handleChange = <K extends keyof FormDataType>(
    field: K,
    value: FormDataType[K]
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (formData.name.trim() && formData.comment.trim()) {
      const newReview = {
        ...formData,
        date: "Just now"
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className=" max-w-7xl mx-auto px-4 py-6"
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    {/* Reviews Column with Scroll */}
    {/* Reviews Column */}
<div 
  className="lg:col-span-2 space-y-6 overflow-y-auto px-2"
  style={{ maxHeight: "400px" }} // Smaller height
>
  {reviews.map((review, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + idx * 0.05 }}
      className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
          <span className="text-xs text-gray-500">{review.date}</span>
        </div>
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={14} fill="#FBBF24" className="text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
    </motion.div>
  ))}
</div>


    {/* Form Column */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="lg:col-span-1"
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a Review</h3>
        
        <div className="space-y-5">
          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleChange("rating", star)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star
                    size={32}
                    fill={star <= formData.rating ? "#FBBF24" : "none"}
                    className={star <= formData.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={formData.comment}
              onChange={(e) => handleChange("comment", e.target.value)}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Share your experience..."
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200"
          >
            Submit Review
          </button>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

  );
}
