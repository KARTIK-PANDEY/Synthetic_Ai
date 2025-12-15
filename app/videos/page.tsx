import MediaGallery from '@/components/MediaGallery'
import { mockMedia } from '@/lib/data'

export default function VideosPage() {
  const videos = mockMedia.filter((item) => item.type === 'video')

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Free Stock Videos</h1>
          <p className="text-gray-600 text-lg">
            Discover {videos.length.toLocaleString()} free high-quality videos
          </p>
        </div>
        <MediaGallery media={videos} />
      </div>
    </div>
  )
}

