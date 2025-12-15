'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import MediaGallery from '@/components/MediaGallery'
import { mockMedia, categories, MediaItem } from '@/lib/data'

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.id as string
  const [categoryMedia, setCategoryMedia] = useState<MediaItem[]>([])

  useEffect(() => {
    if (categoryId === 'all') {
      setCategoryMedia(mockMedia)
    } else {
      const filtered = mockMedia.filter((item) => item.category === categoryId)
      setCategoryMedia(filtered)
    }
  }, [categoryId])

  const category = categories.find((cat) => cat.id === categoryId) || categories[0]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">{category.icon}</span>
            <h1 className="text-4xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Browse {categoryMedia.length.toLocaleString()} free {category.name.toLowerCase()} images, videos, and music
          </p>
        </div>

        {categoryMedia.length > 0 ? (
          <MediaGallery media={categoryMedia} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No media found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

