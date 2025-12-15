import Hero from '@/components/Hero'
import FeaturedCollections from '@/components/FeaturedCollections'
import CategoryGrid from '@/components/CategoryGrid'
import MediaGallery from '@/components/MediaGallery'
import { mockMedia } from '@/lib/data'

export default function Home() {
  // Get featured media (first 20 items)
  const featuredMedia = mockMedia.slice(0, 20)

  return (
    <div className="bg-gray-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedCollections />
        <CategoryGrid />
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Stock Photos</h2>
          <MediaGallery media={featuredMedia} />
        </div>
      </div>
    </div>
  )
}

