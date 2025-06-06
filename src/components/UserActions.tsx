'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export function UserActions() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) return null;

  function handleLogout() {
    logout();
    router.push('/login');
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1 text-sm text-red-600 font-medium hover:underline transition"
    >
      <LogOut size={16} />
      Sair
    </button>
  );
}
