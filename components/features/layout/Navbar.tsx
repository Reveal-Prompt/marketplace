"use client";

import Link from "next/link";
import { CartSidebar } from "../CartSidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function NavBar() {




  return (
    <nav >
      <div className="w-[99%] mx-auto px-6 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={'/'}>
            <div className="flex items-center gap-2">

              <Image src="/assets/logo/logo.png" alt="Logo" width={200} height={40} />


            </div>
          </Link>
          {/* <CartSidebar /> */}
          <Link href={'/tools'}>
            <Button className="bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-colors duration-300">
              Tools
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

