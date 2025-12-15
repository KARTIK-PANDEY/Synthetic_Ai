'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import MediaGallery from '@/components/MediaGallery'
import SearchFilters, { FilterState } from '@/components/SearchFilters'
import { mockMedia, MediaItem } from '@/lib/data'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>(mockMedia)
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    orientation: 'all',
    category: 'all',
    color: 'all',
    minWidth: '',
    minHeight: '',
  })

  useEffect(() => {
    let results = mockMedia

    // Apply search query
    if (query) {
      const lowerQuery = query.toLowerCase()
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery) ||
          item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      )
    }

    // Apply filters
    if (filters.type !== 'all') {
      results = results.filter((item) => item.type === filters.type)
    }

    if (filters.category !== 'all') {
      results = results.filter((item) => item.category === filters.category)
    }

    if (filters.orientation !== 'all') {
      results = results.filter((item) => {
        const aspectRatio = item.width / item.height
        if (filters.orientation === 'horizontal') return aspectRatio > 1
        if (filters.orientation === 'vertical') return aspectRatio < 1
        if (filters.orientation === 'square') return Math.abs(aspectRatio - 1) < 0.1
        return true
      })
    }

    if (filters.minWidth) {
      const minWidth = parseInt(filters.minWidth)
      results = results.filter((item) => item.width >= minWidth)
    }

    if (filters.minHeight) {
      const minHeight = parseInt(filters.minHeight)
      results = results.filter((item) => item.height >= minHeight)
    }

    setFilteredMedia(results)
  }, [query, filters])

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {query ? `Search Results for "${query}"` : 'Browse All Media'}
          </h1>
          <p className="text-gray-600">
            Found {filteredMedia.length.toLocaleString()} results
          </p>
        </div>

        <SearchFilters onFilterChange={handleFilterChange} />

        {filteredMedia.length > 0 ? (
          <MediaGallery media={filteredMedia} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No results found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

