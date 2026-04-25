import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-slate-100 p-4">
      <section className="w-full max-w-md rounded-xl border bg-white/80 p-6 shadow-md backdrop-blur-sm">
        <h1 className="text-2xl font-semibold text-slate-900 text-center">
          Auth UI Lab
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Choose a page to preview your authentication flow.
        </p>

        <div className="mt-6 space-y-3">
          <Button
            asChild
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
          >
            <Link href="/login">Go to Login</Link>
          </Button>

          <Button
            asChild
            className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
          >
            <Link href="/register">Go to Register</Link>
          </Button>

          <Button
            asChild
            className="w-full bg-amber-500 text-white hover:bg-amber-600"
          >
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
