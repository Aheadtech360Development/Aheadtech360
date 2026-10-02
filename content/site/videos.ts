import type { VideoItem } from './types'

/**
 * The founder testimonial videos: vertical (9:16) mp4s in /public/videos, each with the poster shown
 * until it is played. One definition, so every page that shows a founder video shows the same tile.
 */
export const FOUNDER_VIDEOS = {
  ezdtfmaker: { src: '/videos/ezt.mp4', poster: '/images/testimonials/video-1.webp', orientation: 'portrait' },
  trashedpunk: { src: '/videos/at360.mp4', poster: '/images/testimonials/video-2.webp', orientation: 'portrait' },
} as const satisfies Record<string, Omit<VideoItem, 'label'>>
