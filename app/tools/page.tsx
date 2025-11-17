import Card from "@/components/ui/Card";
import CardList from "@/components/features/CardList";
import ReviewSection from "@/components/sections/ReviewSection";
import BackTomarketPlace from "@/components/features/BackToMarketPlace";


export default function ToolPage() {
    return (
        <>
         <BackTomarketPlace/>
             <CardList 
  type="tools"
  dataUrl="/tools.json"
  title="AI Tools"
  subtitle="Explore powerful AI tools for your projects"
/>
       

        </>
      

       
  

       
    );
}