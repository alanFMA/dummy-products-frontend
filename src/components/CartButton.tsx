'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export function CartButton() {
  const { cart } = useCart();
  const { isAuthenticated } = useAuth();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!isAuthenticated) return null;

  return (
    <Link
      href="/cart"
      className="relative bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label={`Carrinho com ${totalItems} itens`}
    >
      <div className="flex items-center gap-2">
        <ShoppingCart size={18} />
        <span>Carrinho</span>
        {totalItems > 0 && (
          <span className="ml-1 bg-white text-primary text-xs font-bold px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
}
