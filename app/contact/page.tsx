import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have questions or feedback? Reach out and we’ll get back to you as soon
        as possible.
      </p>
      <div className="space-y-4 text-muted-foreground">
        <p>Email: support@syntheticai.com</p>
        <p>Contact form coming soon.</p>
      </div>
      <p className="mt-8">
        <Link href="/" className="text-primary hover:underline font-medium">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
