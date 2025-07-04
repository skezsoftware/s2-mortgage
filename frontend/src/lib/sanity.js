import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'puoa65jp',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
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