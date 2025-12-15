import Link from 'next/link'
import { categories } from '@/lib/data'

export default function CategoryGrid() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
              {category.icon}
            </span>
            <span className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

