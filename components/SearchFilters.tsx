'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { categories } from '@/lib/data'

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  type: 'all' | 'photo' | 'video' | 'music'
  orientation: 'all' | 'horizontal' | 'vertical' | 'square'
  category: string
  color: string
  minWidth: string
  minHeight: string
}

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    orientation: 'all',
    category: 'all',
    color: 'all',
    minWidth: '',
    minHeight: '',
  })

  const colors = [
    { value: 'all', label: 'All Colors', color: 'bg-gray-300' },
    { value: 'red', label: 'Red', color: 'bg-red-500' },
    { value: 'orange', label: 'Orange', color: 'bg-orange-500' },
    { value: 'yellow', label: 'Yellow', color: 'bg-yellow-500' },
    { value: 'green', label: 'Green', color: 'bg-green-500' },
    { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { value: 'purple', label: 'Purple', color: 'bg-purple-500' },
    { value: 'pink', label: 'Pink', color: 'bg-pink-500' },
    { value: 'black', label: 'Black', color: 'bg-black' },
    { value: 'white', label: 'White', color: 'bg-white border' },
  ]

  const updateFilter = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      type: 'all',
      orientation: 'all',
      category: 'all',
      color: 'all',
      minWidth: '',
      minHeight: '',
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== 'all' && v !== ''
  ).length

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
      >
        <Filter className="w-5 h-5" />
        <span>Filters</span>
        {activeFiltersCount > 0 && (
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Filter Results</h3>
            <div className="flex items-center space-x-2">
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => updateFilter('type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="photo">Photos</option>
                <option value="video">Videos</option>
                <option value="music">Music</option>
              </select>
            </div>

            {/* Orientation Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Orientation
              </label>
              <select
                value={filters.orientation}
                onChange={(e) => updateFilter('orientation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Orientations</option>
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
                <option value="square">Square</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <div className="grid grid-cols-5 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateFilter('color', color.value)}
                    className={`relative h-10 rounded-lg border-2 transition ${
                      filters.color === color.value
                        ? 'border-blue-600 ring-2 ring-blue-300'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${color.color}`}
                    title={color.label}
                  >
                    {filters.color === color.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Width (px)
              </label>
              <input
                type="number"
                value={filters.minWidth}
                onChange={(e) => updateFilter('minWidth', e.target.value)}
                placeholder="e.g. 1920"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Height (px)
              </label>
              <input
                type="number"
                value={filters.minHeight}
                onChange={(e) => updateFilter('minHeight', e.target.value)}
                placeholder="e.g. 1080"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

