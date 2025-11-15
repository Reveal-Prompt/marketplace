import Search from "@/components/Search";
import ProductCard from "../components/ProductCard";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* <SearchSection /> */}
      <div className="w-full flex justify-center py-8">
        <div className=" w-full max-w-2xl">
          <Search placeholder={"Search products..."}/>
        </div>
      </div>
        
      <div className="flex justify-center py-16">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-10">
          <ProductCard
            image='/product-1.jpg'
            title="Orange eyes"
            price="$20.00"
          />
          <ProductCard
            image='/product-2.jpg'
            title="Cyberpunk woman"
            price="$25.00"
          />
          <ProductCard
            image='/product-3.jpg'
            title="Futuristic man"
            price="$50.00"
          />
        </div>
      </div>
    </div>
  );
}