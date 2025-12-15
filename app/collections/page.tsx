import Link from 'next/link'
import Image from 'next/image'
import { featuredCollections } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function CollectionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Featured Collections</h1>
          <p className="text-gray-600 text-lg">
            Curated collections of high-quality free images, videos, and music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-gray-200 mb-3">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">{collection.count.toLocaleString()} images</p>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

