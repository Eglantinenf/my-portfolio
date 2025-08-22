"use client";
import BlogPostCard from "./BlogPostCard";
import FeaturedPosts from "./FeaturedPosts";
import { BlogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { useState } from "react";

const filters = [
  "All",
  "React",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Backend",
  "Next.js",
  "Story",
  "Frontend",
];

const BlogSection = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredPosts =
    selectedFilter === "All"
      ? BlogPosts
      : BlogPosts.filter((post) => post.tags.includes(selectedFilter));

  return (
    <section id="blog" className="section-bg px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2
        className="text-3xl text-center font-extrabold text-purple-700 dark:text-purple-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Latest Blog Posts
      </motion.h2>
      <FeaturedPosts />
      <div
        role="group"
        aria-label="Blogs filters"
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() =>
              selectedFilter === filter
                ? setSelectedFilter("All")
                : setSelectedFilter(filter)
            }
            className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium
    ${
      selectedFilter === filter
        ? "bg-purple-700 text-white dark:bg-purple-400 dark:text-black shadow-lg"
        : "bg-white/60 text-purple-800 dark:bg-white/10 dark:text-purple-200 border-purple-300 dark:border-purple-600 hover:bg-purple-100 dark:hover:bg-white/20"
    }
  `}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
