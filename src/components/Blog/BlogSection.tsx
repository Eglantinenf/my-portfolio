import BlogPostCard from "./BlogPostCard";
import { BlogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="section-bg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
