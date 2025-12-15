import MediaGallery from '@/components/MediaGallery'
import { mockMedia } from '@/lib/data'

export default function PhotosPage() {
  const photos = mockMedia.filter((item) => item.type === 'photo')

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Free Stock Photos</h1>
          <p className="text-gray-600 text-lg">
            Discover {photos.length.toLocaleString()} free high-quality photos
          </p>
        </div>
        <MediaGallery media={photos} />
      </div>
    </div>
  )
}

