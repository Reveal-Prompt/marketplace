"use client";

import { CartSidebar } from "./CartSidebar";



export default function NavBar() {


 

  return (
    <nav className="bg-linear-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            
          </div>

          {/* Cart Icon with Sidebar */}
         <CartSidebar />
        </div>
      </div>
    </nav>
  );
}

