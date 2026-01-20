// // app/api/posts/route.ts
// import { getPosts, savePost } from '@/lib/db'
// import { NextResponse } from 'next/server'

// export async function GET() {
//   return NextResponse.json(await getPosts())
// }

// export async function POST(req: Request) {
//   const body = await req.json()
//   await savePost(body)
//   return NextResponse.json({ ok: true })
// }
import { NextResponse } from 'next/server'
import { savePost } from '@/lib/db'

export async function POST(req: Request) {
  const post = await req.json()
  await savePost(post)

  // 🔥 trigger blog revalidation
  await fetch('https://practice-isr-backend.vercel.app/api/revalidate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: 'supersecret123',
      slug: post.slug,
    }),
  })

  return NextResponse.json({ ok: true })
}
