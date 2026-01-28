import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <p className="text-muted-foreground mb-8">
        We’re not hiring at the moment, but we’re always interested in hearing
        from talented people. Send your portfolio to careers@syntheticai.com.
      </p>
      <Link href="/" className="text-primary hover:underline font-medium">
        ← Back to home
      </Link>
    </div>
  );
}
