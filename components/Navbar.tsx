"use client";

import { CartSidebar } from "./CartSidebar";
import Image from "next/image";


export default function NavBar() {


 

  return (
    <nav >
      <div className="w-[99%] mx-auto px-6 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo-white.png" alt="Logo" width={250} height={40} />
          </div>
         <CartSidebar />
        </div>
      </div>
    </nav>
  );
}

