import { BlogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";

type Params = { params: { slug: string } };

export default function BlogPostPage({ params }: Params) {
  const post = BlogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return notFound();
  }
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
        <span>•</span>
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.readTime} read</span>
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="text-gray-600 dark:text-gray-300">{post.text}</p>
    </article>
  );
}
