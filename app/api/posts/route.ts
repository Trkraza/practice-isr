// app/api/posts/route.ts
import { getPosts, savePost } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(await getPosts())
}

export async function POST(req: Request) {
  const body = await req.json()
  await savePost(body)
  return NextResponse.json({ ok: true })
}
