// app/api/revalidate/route.ts
// Sanity publish hone par yeh automatically website update karta hai

import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  // Secret check — unauthorized requests block karein
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  // Saare pages revalidate karein
  revalidatePath('/', 'layout')
  revalidatePath('/services')
  revalidatePath('/results')
  revalidatePath('/about')
  revalidatePath('/contact')
  revalidatePath('/blog')
  revalidatePath('/resources')
  revalidatePath('/story')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}