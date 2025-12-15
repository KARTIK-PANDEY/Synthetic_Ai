import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About SyntheticsAI</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition">Press</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/license" className="hover:text-white transition">Content License</Link></li>
              <li><Link href="/dmca" className="hover:text-white transition">DMCA</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/api" className="hover:text-white transition">API</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
            <p className="mt-4 text-sm">
              Over 5.8 million free stock photos, videos, and music shared by our talented community.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SyntheticsAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

