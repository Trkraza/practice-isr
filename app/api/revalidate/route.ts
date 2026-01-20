import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { slug } = await req.json()

  await fetch(`${process.env.BLOG_URL}/api/revalidate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.REVALIDATE_SECRET,
      slug,
    }),
  })

  return NextResponse.json({ revalidated: true })
}
