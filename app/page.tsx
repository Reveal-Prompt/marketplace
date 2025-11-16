
import Search from "@/components/Search";
import ProductCard from "../components/ProductCard";
import NavBar from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* Banner */}
      
      {/* <SearchSection /> */}
      <div className="w-full flex justify-center py-8">
        <div className=" w-full max-w-2xl">
          <Search placeholder={"Search products..."}/>
        </div>
      </div>
        
      <div className="flex justify-center w-full ">
  <ProductList/>
</div>

    
    </div>
  );
}