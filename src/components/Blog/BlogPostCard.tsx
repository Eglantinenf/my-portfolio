import React from "react";
import Image from "next/image";
import { BlogPost } from "@/data/blogPosts";

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article>
      <a href={post.url || "#"}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={600}
          loading="lazy"
        />
        <h3>{post.title}</h3>
        <p>{post.text}</p>
      </a>
      <footer>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
        <span>{post.readTime}</span>
      </footer>
    </article>
  );
};

export default BlogPostCard;
