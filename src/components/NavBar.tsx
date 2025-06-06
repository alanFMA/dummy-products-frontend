'use client';

import Link from 'next/link';
import { CartButton } from './CartButton';
import { UserActions } from './UserActions';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-primary">
          DummyProducts
        </Link>
        <div className="flex items-center gap-4">
          <CartButton />
          <UserActions />
        </div>
      </nav>
    </header>
  );
}
