'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stunning free images & royalty free stock
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Over 5.8 million+ high quality stock images, videos and music shared by our talented community.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for images, videos, music..."
                className="w-full px-6 py-4 pl-14 pr-32 text-gray-900 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/photos" className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg backdrop-blur-sm transition">
              Photos
            </Link>
            <Link href="/videos" className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg backdrop-blur-sm transition">
              Videos
            </Link>
            <Link href="/music" className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg backdrop-blur-sm transition">
              Music
            </Link>
            <Link href="/collections" className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg backdrop-blur-sm transition">
              Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

