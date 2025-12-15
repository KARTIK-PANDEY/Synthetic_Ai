'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import MediaGallery from '@/components/MediaGallery'
import { featuredCollections, mockMedia, MediaItem } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

export default function CollectionDetailPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const [collection, setCollection] = useState(featuredCollections.find((c) => c.id === id))
  const [collectionMedia, setCollectionMedia] = useState<MediaItem[]>([])

  useEffect(() => {
    if (collection) {
      // Get media related to this collection (in a real app, this would come from an API)
      const media = mockMedia.slice(0, 20) // Simulate collection media
      setCollectionMedia(media)
    }
  }, [collection])

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Collection not found</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={collection.imageUrl}
          alt={collection.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <Link
              href="/collections"
              className="inline-flex items-center space-x-2 text-white hover:text-gray-200 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Collections</span>
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{collection.title}</h1>
            <p className="text-xl text-gray-200 mb-2">{collection.description}</p>
            <p className="text-gray-300">{collection.count.toLocaleString()} images</p>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {collectionMedia.length > 0 ? (
          <MediaGallery media={collectionMedia} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No media in this collection yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

