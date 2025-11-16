"use client";

import { CartSidebar } from "./CartSidebar";



export default function NavBar() {


 

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-6 ">
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

