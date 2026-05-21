// sanity/lib/client.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-01-01',
  useCdn: false, // false = always fresh data
})

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, any>
): Promise<T> {
  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60 },
    })
  } catch {
    return null as unknown as T
  }
}