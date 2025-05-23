import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity";
import "./blog.css";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="section blog-hero-section">
        <div className="blog-hero-bg">
          <Image
            src="/sunset_and_palm_tree.png"
            alt="SoCal sunset with palm tree"
            fill
            priority
            className="blog-hero-image"
            style={{ objectFit: "cover" }}
          />
          <div className="blog-hero-overlay"></div>
          <div className="blog-hero-content">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
      <div className="blog-container">
        {/* <h1 className="blog-title">Blog</h1> */}
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug.current} className="blog-card">
              <Link href={`/blog/${post.slug.current}`} className="blog-card-link">
                <div className="thumbnail-wrapper">
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="thumbnail"
                    />
                  )}
                </div>
                <div className="blog-content">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <time className="post-date">
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
      </div>
    </>
  );
}
