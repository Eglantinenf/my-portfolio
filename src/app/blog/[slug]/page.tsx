import { BlogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

export default function BlogPostPage({ params }: Params) {
  const post = BlogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return notFound();
  }
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </article>
  );
}
