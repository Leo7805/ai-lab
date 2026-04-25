'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (isLoading) {
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!name) {
      setError('Name is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // In a real app, you would send the data to your backend here.
      console.log('Registering user:', {
        name,
        email: normalizedEmail,
        password,
      });
    }, 600);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-slate-100 p-4">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* form */}
          <form className="space-y-4" noValidate onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                autoComplete="name"
                placeholder="your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                inputMode="email"
                autoComplete="email"
                placeholder="your@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="pr-20"
                />

                <Button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 inset-y-0 flex items-center text-sm text-muted-foreground bg-transparent hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError('');
                  }}
                  className="pr-20"
                />

                <Button
                  type="button"
                  aria-label={
                    showConfirmPassword ? 'Hide password' : 'Show password'
                  }
                  aria-pressed={showConfirmPassword}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 inset-y-0 flex items-center text-sm text-muted-foreground bg-transparent hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            {/* error message */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Register Button */}
            <Button
              type="submit"
              disabled={
                !name || !email || !password || !confirmPassword || isLoading
              }
              className="w-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Create Account
            </Button>

            {/* sign in link */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-muted-foreground underline decoration-muted-foreground/60 underline-offset-4 hover:text-foreground hover:decoration-foreground/60 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
