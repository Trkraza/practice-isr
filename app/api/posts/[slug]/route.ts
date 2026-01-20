// import { getPost } from '@/lib/db'
// import { NextResponse } from 'next/server'

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await params
//   const post = await getPost(slug)

//   return NextResponse.json(post ?? null)
// }
import { NextResponse } from 'next/server'
import { getPost } from '@/lib/posts'

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  const post = await getPost(slug)

  return NextResponse.json(post)
}
