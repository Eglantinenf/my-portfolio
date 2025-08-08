import BlogPostCard from "./BlogPostCard";
import { BlogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog">
      <h2>Latest Blog Posts</h2>
      <div>
        {BlogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
