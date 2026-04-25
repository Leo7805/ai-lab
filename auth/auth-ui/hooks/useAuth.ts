'use client';

import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  function login() {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  }

  function logout() {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  }

  function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  function requireAuth() {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }

  return { login, logout, isLoggedIn, requireAuth };
}
