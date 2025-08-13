"use client";
import { BlogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

type Params = { params: Promise<{ slug: string }> };

const formatPersianDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};
export default function BlogPostPage({ params }: Params) {
  const router = useRouter();
  const { slug } = use(params);
  const post = BlogPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button
        onClick={() => router.back()} // or router.push('/blog') for specific route
        className="flex items-center gap-1 mb-8 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
        </svg>
        Back to Blogs
      </button>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <time dateTime={post.date}>{formatPersianDate(post.date)} </time>
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
    </div>
  );
}
