import "./blog.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity";


export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main>
      <section 
        className="section blog-hero-section" 
        role="banner" 
        aria-label="Blog hero section"
      >
        <div className="blog-hero-bg">
          <Image
            src="/sunset_and_palm_tree.png"
            alt="Southern California sunset with palm tree silhouette"
            fill
            priority
            className="blog-hero-image"
            style={{ objectFit: "cover" }}
          />
          <div className="blog-hero-overlay" aria-hidden="true"></div>
          <div className="blog-hero-content">
            <h1 className="blog-hero-content-h1">Blog</h1>
          </div>
        </div>
        <div className="blog-info-section">
          <p>
            Welcome to our blog! Here you&apos;ll find articles about the latest
            trends in the mortgage industry, tips for first-time homebuyers, and
            more.
          </p>
        </div>
      </section>
      <section 
        className="blog-container" 
        role="region" 
        aria-labelledby="blog-posts-title"
      >
        <div className="blog-grid" role="list">
          {posts.map((post) => (
            <article key={post.slug.current} className="blog-card" role="listitem">
              <Link
                href={`/blog/${post.slug.current}`}
                className="blog-card-link"
                aria-label={`Read full article: ${post.title}`}
              >
                <div className="thumbnail-wrapper">
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail}
                      alt={`Featured image for article: ${post.title}`}
                      width={400}
                      height={250}
                      className="thumbnail"
                    />
                  )}
                </div>
                <div className="blog-content">
                  <h3 className="post-title">{post.title}</h3>
                  <hr className="post-divider" aria-hidden="true" />
                  <p className="post-excerpt">{post.excerpt}</p>
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
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
