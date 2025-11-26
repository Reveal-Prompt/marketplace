export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-16 px-6">
      {/* Header */}
      <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-700 max-w-3xl text-center mb-12">
        Welcome to Reveal Prompt! We are dedicated to providing premium AI prompts and tools that 
        help creators, developers, and AI enthusiasts unlock the full potential of their projects. 
        Our platform curates high-quality prompts and resources to save you time and enhance creativity.
      </p>

      {/* Mission / Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower individuals and businesses with accessible, high-quality AI prompts 
            and tools, helping them create, innovate, and achieve their goals efficiently.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the go-to platform for AI prompt solutions, fostering a community of creators 
            and AI enthusiasts who inspire and support each other.
          </p>
        </div>
      </div>

   
    </div>
  );
}
