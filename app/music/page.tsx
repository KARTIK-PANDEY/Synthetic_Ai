import MediaGallery from '@/components/MediaGallery'
import { mockMedia } from '@/lib/data'

export default function MusicPage() {
  const music = mockMedia.filter((item) => item.type === 'music')

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Free Stock Music</h1>
          <p className="text-gray-600 text-lg">
            Discover {music.length.toLocaleString()} free high-quality music tracks
          </p>
        </div>
        <MediaGallery media={music} />
      </div>
    </div>
  )
}

