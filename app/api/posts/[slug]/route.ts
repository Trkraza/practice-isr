// app/api/posts/[slug]/route.ts
import { getPost } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  return NextResponse.json(await getPost(params.slug))
}
