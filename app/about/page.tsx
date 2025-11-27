import { Lightbulb, Users, Zap, Target } from 'lucide-react';
import Link from 'next/link';
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">About Reveal Prompt</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We're here to make AI simple and creative. Whether you're a content creator, developer, or just curious about AI, 
          we provide ready-to-use prompts that save you time and spark brilliant ideas.
        </p>
      </div>

      {/* Mission & Vision - Redesigned */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We make AI accessible to everyone. Our mission is to give you powerful, ready-made prompts that help you 
              create amazing content, solve problems, and innovate—without needing to be an AI expert. Think of us as 
              your AI creativity partner.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where AI helps everyone unlock their creative potential. We want to build a thriving 
              community where people share ideas, learn together, and inspire each other to achieve more.
            </p>
          </div>
        </div>

        {/* Why We Exist Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-3xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Reveal Prompt?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Creating with AI can be overwhelming. You might have a great idea but struggle to describe it to an AI in the right way. 
            That's exactly the problem we solve. We've done the hard work for you—curating, testing, and refining the best prompts 
            so you can focus on what matters: creating amazing things.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you need help writing, coding, brainstorming, or designing, our library of prompts gets you started instantly. 
            No trial and error. Just results.
          </p>
        </div>

        {/* Key Features / What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Time-Saving Prompts</h3>
                  <p className="text-gray-600">
                    Skip the guesswork. Use battle-tested prompts designed to get results right away, 
                    whether you're writing content or debugging code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Community</h3>
                  <p className="text-gray-600">
                    Connect with other creators and developers. Share your discoveries, learn new techniques, 
                    and collaborate on exciting projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                  <p className="text-gray-600">
                    Our library grows every day with new prompts for writing, coding, design, marketing, 
                    and beyond. Always something new to explore.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">For Everyone</h3>
                  <p className="text-gray-600">
                    Whether you're a beginner just starting with AI or an advanced user, our prompts 
                    scale with your expertise and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore thousands of prompts and join our growing community of creators today.
          </p>
          
          <Link href={'/'} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors" >
            Browse Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}