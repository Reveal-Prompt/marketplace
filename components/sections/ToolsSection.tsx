"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const tools = [
  {
    name: "Reverse Prompt",
    description: "Extract the closest matching prompt from any AI-generated image.",
    href: "/tools/reverse-prompt",
    icon: "🔍",
    status: "Coming Soon...",
  },
  {
    name: "Prompt Optimizer",
    description: "Automatically refine prompts for clearer, stronger outputs.",
    href: "/tools/prompt-optimizer",
    icon: "⚡",
    status: "Coming Soon...",
  },
  {
    name: "Style Extractor",
    description: "Analyze an image and extract its artistic style.",
    href: "/tools/style-extractor",
    icon: "🎨",
    status: "Coming Soon...",
  },
];

export default function ToolsSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-6">AI Tools</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-white/80 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl">{tool.icon}</div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {tool.name}
            </h3>

            <p className="mt-2 text-gray-600 text-sm">{tool.description}</p>

            <span className="mt-3 inline-block text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tool.status}
            </span>

            <Link
              href={tool.href}
              className="mt-4 block text-sm font-medium text-indigo-600 hover:underline"
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
