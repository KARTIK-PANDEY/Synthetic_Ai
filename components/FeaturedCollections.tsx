import Link from 'next/link'
import Image from 'next/image'
import { featuredCollections } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function FeaturedCollections() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Featured Collections</h2>
        <Link href="/collections" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCollections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-64">
              <Image
                src={collection.imageUrl}
                alt={collection.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{collection.title}</h3>
                <p className="text-sm text-gray-200 mb-2">{collection.description}</p>
                <p className="text-xs text-gray-300">{collection.count.toLocaleString()} images</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

