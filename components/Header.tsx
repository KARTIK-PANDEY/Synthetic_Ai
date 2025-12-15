'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X, User, Heart, Download, Upload } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">SyntheticsAI</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for images, videos, music..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </form>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/photos" className="text-gray-700 hover:text-blue-600 font-medium">
              Photos
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-blue-600 font-medium">
              Videos
            </Link>
            <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
              Music
            </Link>
            <Link href="/collections" className="text-gray-700 hover:text-blue-600 font-medium">
              Collections
            </Link>
            <Link href="/upload" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
              <Upload className="w-4 h-4" />
              <span>Upload</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for images, videos, music..."
              className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/photos" className="text-gray-700 hover:text-blue-600 font-medium">
                Photos
              </Link>
              <Link href="/videos" className="text-gray-700 hover:text-blue-600 font-medium">
                Videos
              </Link>
              <Link href="/music" className="text-gray-700 hover:text-blue-600 font-medium">
                Music
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-blue-600 font-medium">
                Collections
              </Link>
              <Link href="/upload" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium">
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </Link>
              <Link href="/login" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

