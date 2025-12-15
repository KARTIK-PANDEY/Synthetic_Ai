'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Download, Eye, User } from 'lucide-react'
import { MediaItem } from '@/lib/data'

interface MediaGalleryProps {
  media: MediaItem[]
  columns?: number
}

export default function MediaGallery({ media, columns = 4 }: MediaGalleryProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  }

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols] || gridCols[4]} gap-4`}>
      {media.map((item) => (
        <Link
          key={item.id}
          href={`/media/${item.id}`}
          className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative aspect-square">
            <Image
              src={item.thumbnailUrl}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {hoveredId === item.id && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1 text-white bg-black bg-opacity-50 px-3 py-2 rounded-lg">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{item.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white bg-black bg-opacity-50 px-3 py-2 rounded-lg">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">{item.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white bg-black bg-opacity-50 px-3 py-2 rounded-lg">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{item.likes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
            {item.type !== 'photo' && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-semibold uppercase">
                {item.type}
              </div>
            )}
          </div>
          <div className="p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Image
                src={item.author.avatar}
                alt={item.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600 truncate">{item.author.name}</span>
            </div>
            <p className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

