import { NextResponse } from 'next/server'
import { getPosts } from '@/lib/actions/posts'

export async function GET() {
  try {
    const posts = await getPosts()
    return NextResponse.json(posts)
  } catch (error: any) {
    console.error('Error in posts API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}