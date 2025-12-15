// Mock data for the SyntheticsAI site

export interface MediaItem {
  id: number
  type: 'photo' | 'video' | 'music'
  title: string
  description: string
  tags: string[]
  imageUrl: string
  thumbnailUrl: string
  author: {
    name: string
    avatar: string
    username: string
  }
  views: number
  downloads: number
  likes: number
  width: number
  height: number
  size: number
  category: string
  colors: string[]
  date: string
}

export const categories = [
  { id: 'all', name: 'All', icon: '📷' },
  { id: 'backgrounds', name: 'Backgrounds', icon: '🎨' },
  { id: 'fashion', name: 'Fashion', icon: '👗' },
  { id: 'nature', name: 'Nature', icon: '🌲' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'feelings', name: 'Feelings', icon: '❤️' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'people', name: 'People', icon: '👥' },
  { id: 'religion', name: 'Religion', icon: '🕌' },
  { id: 'places', name: 'Places', icon: '🌍' },
  { id: 'animals', name: 'Animals', icon: '🐾' },
  { id: 'industry', name: 'Industry', icon: '🏭' },
  { id: 'computer', name: 'Computer', icon: '💻' },
  { id: 'food', name: 'Food', icon: '🍕' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'transportation', name: 'Transportation', icon: '🚗' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'buildings', name: 'Buildings', icon: '🏢' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'music', name: 'Music', icon: '🎵' },
]

// Generate mock media items
const generateMockMedia = (): MediaItem[] => {
  const mockImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
  ]

  const authors = [
    { name: 'John Doe', username: 'johndoe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', username: 'janesmith', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Mike Johnson', username: 'mikej', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Sarah Williams', username: 'sarahw', avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'David Brown', username: 'davidb', avatar: 'https://i.pravatar.cc/150?img=5' },
  ]

  const titles = [
    'Beautiful Mountain Landscape',
    'Sunset Over Ocean',
    'City Skyline at Night',
    'Forest Path in Autumn',
    'Desert Dunes',
    'Tropical Beach Paradise',
    'Snowy Mountain Peak',
    'Urban Street Art',
    'Peaceful Lake Reflection',
    'Colorful Flower Garden',
    'Modern Architecture',
    'Wildlife Photography',
  ]

  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    type: (['photo', 'video', 'music'] as const)[Math.floor(Math.random() * 3)],
    title: titles[i % titles.length],
    description: `Stunning ${titles[i % titles.length].toLowerCase()} captured by our talented community.`,
    tags: ['nature', 'landscape', 'beautiful', 'scenic', 'outdoor'],
    imageUrl: mockImages[i % mockImages.length],
    thumbnailUrl: mockImages[i % mockImages.length],
    author: authors[Math.floor(Math.random() * authors.length)],
    views: Math.floor(Math.random() * 100000) + 1000,
    downloads: Math.floor(Math.random() * 50000) + 500,
    likes: Math.floor(Math.random() * 10000) + 100,
    width: [1920, 2560, 3840][Math.floor(Math.random() * 3)],
    height: [1080, 1440, 2160][Math.floor(Math.random() * 3)],
    size: Math.floor(Math.random() * 5000000) + 100000,
    category: categories[Math.floor(Math.random() * categories.length)].id,
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'],
    date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
  }))
}

export const mockMedia: MediaItem[] = generateMockMedia()

export const featuredCollections = [
  {
    id: 1,
    title: 'Editor\'s Choice',
    description: 'Hand-picked high-quality images',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    count: 150,
  },
  {
    id: 2,
    title: 'Nature & Landscapes',
    description: 'Breathtaking natural scenery',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    count: 3200,
  },
  {
    id: 3,
    title: 'Business & Technology',
    description: 'Professional business imagery',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    count: 2100,
  },
  {
    id: 4,
    title: 'People & Lifestyle',
    description: 'Authentic human moments',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    count: 4500,
  },
]

