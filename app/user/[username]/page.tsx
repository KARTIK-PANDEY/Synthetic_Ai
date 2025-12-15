'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import MediaGallery from '@/components/MediaGallery'
import { mockMedia, MediaItem } from '@/lib/data'
import { User, Image as ImageIcon, Heart, Download, Eye } from 'lucide-react'

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [userMedia, setUserMedia] = useState<MediaItem[]>([])
  const [user, setUser] = useState<{ name: string; avatar: string; username: string } | null>(null)

  useEffect(() => {
    // Find user from media items
    const foundUser = mockMedia.find((item) => item.author.username === username)?.author
    if (foundUser) {
      setUser(foundUser)
      // Get all media by this user
      const media = mockMedia.filter((item) => item.author.username === username)
      setUserMedia(media)
    }
  }, [username])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">User not found</p>
      </div>
    )
  }

  const totalViews = userMedia.reduce((sum, item) => sum + item.views, 0)
  const totalDownloads = userMedia.reduce((sum, item) => sum + item.downloads, 0)
  const totalLikes = userMedia.reduce((sum, item) => sum + item.likes, 0)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* User Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src={user.avatar}
              alt={user.name}
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
              <p className="text-gray-600 mb-4">@{user.username}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center space-x-2">
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{userMedia.length}</p>
                    <p className="text-sm text-gray-600">Images</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{totalViews.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Views</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{totalDownloads.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Downloads</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{totalLikes.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Likes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User's Media */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Images by {user.name}</h2>
          {userMedia.length > 0 ? (
            <MediaGallery media={userMedia} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images uploaded yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

