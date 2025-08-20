"use client";
import BlogPostCard from "./BlogPostCard";
// import FeaturedPosts from "./FeaturedPosts";
import { BlogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";

const BlogSection = () => {
  return (
    <section id="blog" className="section-bg px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2
        className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Latest Blog Posts
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
