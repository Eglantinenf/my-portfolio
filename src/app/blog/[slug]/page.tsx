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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-8 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm"
        aria-label="Back to blog list"
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
          className="flex-shrink-0"
        >
          <path d="m12 19-7-7 7-7" />
        </svg>
        Back to Blogs
      </button>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {formatPersianDate(post.date)}
            </time>

            <span
              className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"
              aria-hidden="true"
            ></span>

            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {post.author}
            </span>

            <span
              className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"
              aria-hidden="true"
            ></span>

            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readTime} read time
            </span>
          </div>
        </header>

        <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 aspect-video">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-full object-cover"
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          {post.text}
        </div>
      </article>
    </div>
  );
}
