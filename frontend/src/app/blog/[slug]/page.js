import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getBlogPost } from "@/lib/sanity";
import "../blog.css";

export const dynamic = "force-static";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  return (
    <main>
      <article 
        className="blog-post" 
        role="article"
        aria-labelledby="blog-post-title"
      >
        <header className="post-header">
          <h1 id="blog-post-title" className="post-title">{post.title}</h1>
          <p className="post-description">{post.excerpt}</p>
          <time 
            className="post-date"
            dateTime={post.publishedAt}
            aria-label={`Published on ${new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}
          >
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        {post.thumbnail && (
          <figure className="post-image">
            <Image
              src={post.thumbnail}
              alt={`Featured image for article: ${post.title}`}
              width={800}
              height={400}
              className="post-thumbnail"
            />
          </figure>
        )}

        <div className="post-content" role="main">
          <PortableText value={post.content} />
        </div>
      </article>
    </main>
  );
}
