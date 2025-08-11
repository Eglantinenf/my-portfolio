"use client";
import React from "react";
import Image from "next/image";
import { BlogPost } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(
      new Date(post.date).toLocaleDateString("fa-IR-u-nu-latn", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }, [post.date]);

  return (
    <motion.article
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <a href={post.url || "#"} className="block">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover rounded-t-lg"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {post.text}
          </p>
          <div className="flex flex-wrap gap-2 mt-2 px-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
      <footer className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm">
        <time dateTime={post.date}>{formattedDate}</time>
        <span>{post.readTime}</span>
      </footer>
    </motion.article>
  );
};

export default BlogPostCard;
