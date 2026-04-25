'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const { isLoggedIn, requireAuth, logout } = useAuth();

  useEffect(() => {
    requireAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoggedIn()) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">You are signed in.</p>
        <Button
          type="button"
          onClick={logout}
          className="mt-6 bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors shadow-md"
        >
          Logout
        </Button>
      </section>
    </main>
  );
}
