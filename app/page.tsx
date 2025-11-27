import CardList from "@/components/features/CardList";


export default function Home() {
  return (
    <div>



      <div className="flex justify-center w-full ">
        <CardList
         
          dataUrl="/api/prompts"
          title="Featured Prompts"
          subtitle="Discover premium AI prompts crafted by experts"
        />
      </div>
      


    </div>
  );
}