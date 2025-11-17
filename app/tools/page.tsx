import Card from "@/components/Card";
import CardList from "@/components/CardList";
import ReviewSection from "@/components/ReviewSection";


export default function ToolPage() {
    return (
        <div>
           <CardList 
  type="tools"
  dataUrl="/tools.json"
  title="AI Tools"
  subtitle="Explore powerful AI tools for your projects"
/>

       
        </div>

       
    );
}