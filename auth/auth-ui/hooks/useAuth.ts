'use client';

import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  function isBrowser() {
    return typeof window !== 'undefined';
  }

  function login() {
    if (!isBrowser()) {
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  }

  function logout() {
    if (!isBrowser()) {
      return;
    }

    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  }

  function isLoggedIn() {
    if (!isBrowser()) {
      return false;
    }

    return localStorage.getItem('isLoggedIn') === 'true';
  }

  function requireAuth() {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }

  return { login, logout, isLoggedIn, requireAuth };
}
