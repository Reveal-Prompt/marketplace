
import Search from "@/components/Search";
import CardList from "@/components/CardList";


export default function Home() {
  return (
    <div>
     
      {/* <SearchSection /> */}
      <div className="w-full flex justify-center py-8">
        <div className=" w-full max-w-2xl">
          <Search placeholder={"Search products..."}/>
        </div>
      </div>
        
      <div className="flex justify-center w-full ">
      <CardList 
  type="products"
  dataUrl="/dataset.json"
  title="Featured Prompts"
  subtitle="Discover premium AI prompts crafted by experts"
/>
</div>

    
    </div>
  );
}