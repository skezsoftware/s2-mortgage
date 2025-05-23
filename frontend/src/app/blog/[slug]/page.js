import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getBlogPost } from '@/lib/sanity'
import '../blog.css'

export const dynamic = 'force-static'

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug)

  return (
    <article className="blog-post">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <time className="post-date">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      {post.thumbnail && (
        <div className="post-image">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={800}
            height={400}
            className="post-thumbnail"
          />
        </div>
      )}

      <div className="post-content">
        <PortableText value={post.content} />
      </div>
    </article>
  )
} 