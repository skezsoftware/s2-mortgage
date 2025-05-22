import React from "react";
import Image from "next/image";
import "./blog.css";

const blogs = [
  {
    id: 1,
    title: "5 Steps to Owning Your First Home",
    excerpt:
      "Discover a simple and empowering approach to buying your first home in Southern California...",
    image: "/placeholder_blog.png",
  },
  {
    id: 2,
    title: "Understanding Prequalification vs. Preapproval",
    excerpt:
      "Learn the key differences between prequalification and preapproval, and why it matters for your home search...",
    image: "/placeholder_blog.png",
  },
  {
    id: 3,
    title: "Refinancing: Is Now the Right Time?",
    excerpt:
      "Explore the benefits and timing of refinancing your mortgage in today's market...",
    image: "/placeholder_blog.png",
  },
  {
    id: 4,
    title: "VA Loans: Benefits for Veterans & Families",
    excerpt:
      "A guide to VA loans and how they can help veterans and their families achieve homeownership...",
    image: "/placeholder_blog.png",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroOverlay"></div>
        <Image
          src="/sunset_and_palm_tree.png"
          alt="Family at the beach"
          fill
          className="heroImage"
          priority
        />
        <div className="heroContent">
          <h1>Blog</h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blogGridSection">
        <div className="blogGrid">
          {blogs.map((blog) => (
            <article className="blogCard" key={blog.id}>
              <div className="blogImageWrapper">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="blogImage"
                />
              </div>
              <div className="blogCardContent">
                <h2 className="blogTitle">{blog.title}</h2>
                <p className="blogExcerpt">{blog.excerpt}</p>
                <a className="blogReadMore" href="#">Read more &rarr;</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}