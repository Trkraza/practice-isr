import { kv } from './kv'
import { Post } from '@/types'

export async function getAllPosts(): Promise<Post[]> {
  const keys = await kv.keys('post:*')
  if (!keys.length) return []

  const posts = await kv.mget<Post[]>(...keys)
  return posts.filter(Boolean) as Post[]
}

export async function getPost(slug: string): Promise<Post | null> {
  return kv.get<Post>(`post:${slug}`)
}

export async function savePost(post: Post) {
  await kv.set(`post:${post.slug}`, post)
}
