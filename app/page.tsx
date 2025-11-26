
import Search from "@/components/features/search/Search";
import CardList from "@/components/features/CardList";
import ToolsSection from "@/components/sections/ToolsSection";


export default function Home() {
  return (
    <div>



      <div className="flex justify-center w-full ">
        <CardList
          type="products"
          dataUrl="/api/prompts"
          title="Featured Prompts"
          subtitle="Discover premium AI prompts crafted by experts"
        />
      </div>
      <ToolsSection/>


    </div>
  );
}