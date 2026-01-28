'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Upload, Heart, Image, Download, User } from 'lucide-react';

export default function UserDashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    if (user.role !== 'user') {
      router.replace(user.role === 'admin' ? '/admin' : '/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || user.role !== 'user') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  const stats = [
    { label: 'Uploads', value: '0', icon: Upload },
    { label: 'Favorites', value: '0', icon: Heart },
    { label: 'Downloads', value: '0', icon: Download },
    { label: 'Collections', value: '0', icon: Image },
  ];

  return (
    <div className="min-h-[60vh]">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">User Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {user.name}. Manage your content and activity.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{user.email}</span>
              <button
                onClick={() => {
                  logout();
                  router.push('/');
                  router.refresh();
                }}
                className="text-sm text-primary hover:underline"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="border rounded-xl bg-card p-4 flex items-center gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl bg-card p-6">
            <h2 className="font-semibold mb-4">Quick actions</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/upload"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Upload className="h-4 w-4" />
                  Upload media
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Image className="h-4 w-4" />
                  Browse photos
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Heart className="h-4 w-4" />
                  My collections
                </Link>
              </li>
            </ul>
          </div>
          <div className="border rounded-xl bg-card p-6">
            <h2 className="font-semibold mb-4">Account</h2>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground mt-1">User account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
