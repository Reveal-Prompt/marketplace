"use client";

import Link from "next/link";
import { CartSidebar } from "../CartSidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
            <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-gray-800 text-gray-900 font-semibold rounded-lg hover:bg-black/5 transition-all duration-300"
                >
                  Tools
                </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

