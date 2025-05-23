import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'ffh9628x',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: true,
})

export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      "thumbnail": thumbnail.asset->url,
      publishedAt
    }
  `)
}

export async function getBlogPost(slug) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      excerpt,
      "thumbnail": thumbnail.asset->url,
      publishedAt,
      content
    }
  `, { slug })
} 