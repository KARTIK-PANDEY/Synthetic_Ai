'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Heart, Eye, Share2, User, Calendar, Tag, Image as ImageIcon } from 'lucide-react'
import { mockMedia, MediaItem } from '@/lib/data'
import MediaGallery from '@/components/MediaGallery'

export default function MediaDetailPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const [media, setMedia] = useState<MediaItem | null>(null)
  const [relatedMedia, setRelatedMedia] = useState<MediaItem[]>([])

  useEffect(() => {
    const foundMedia = mockMedia.find((item) => item.id === id)
    if (foundMedia) {
      setMedia(foundMedia)
      // Get related media (same category, different item)
      const related = mockMedia
        .filter((item) => item.category === foundMedia.category && item.id !== foundMedia.id)
        .slice(0, 12)
      setRelatedMedia(related)
    }
  }, [id])

  if (!media) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Media not found</p>
      </div>
    )
  }

  const handleDownload = () => {
    // In a real app, this would trigger a download
    alert('Download started! In a real app, this would download the file.')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: media.title,
          text: media.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Media Display */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative w-full" style={{ aspectRatio: `${media.width} / ${media.height}`, maxHeight: '80vh' }}>
            <Image
              src={media.imageUrl}
              alt={media.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  <Download className="w-5 h-5" />
                  <span>Free Download</span>
                </button>
                <button
                  onClick={() => alert('Added to favorites!')}
                  className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <Heart className="w-5 h-5" />
                  <span>{media.likes.toLocaleString()}</span>
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{media.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>{media.downloads.toLocaleString()} downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{media.title}</h1>
              <p className="text-gray-600 mb-6">{media.description}</p>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {media.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/search?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {media.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={media.author.avatar}
                  alt={media.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <Link href={`/user/${media.author.username}`} className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                    {media.author.name}
                  </Link>
                  <p className="text-gray-600">@{media.author.username}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Image Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium capitalize">{media.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions</span>
                  <span className="font-medium">{media.width} × {media.height} px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size</span>
                  <span className="font-medium">{(media.size / 1024 / 1024).toFixed(2)} MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <Link href={`/category/${media.category}`} className="font-medium text-blue-600 hover:underline capitalize">
                    {media.category}
                  </Link>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Published</span>
                  <span className="font-medium">{new Date(media.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">License</h3>
              <p className="text-sm text-gray-600 mb-4">
                Free for commercial use. No attribution required.
              </p>
              <Link href="/license" className="text-sm text-blue-600 hover:underline">
                Learn more about our license →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Media */}
        {relatedMedia.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Images</h2>
            <MediaGallery media={relatedMedia} />
          </div>
        )}
      </div>
    </div>
  )
}

