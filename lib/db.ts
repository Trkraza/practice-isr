// lib/db.ts
import { kv } from '@vercel/kv'

export type Post = {
  slug: string
  title: string
  content: string
}

export async function getPosts(): Promise<Post[]> {
  return (await kv.get<Post[]>('posts')) ?? []
}

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((p) => p.slug === slug)
}

export async function savePost(post: Post) {
  const posts = await getPosts()
  const updated = posts.filter((p) => p.slug !== post.slug)
  await kv.set('posts', [...updated, post])
}
