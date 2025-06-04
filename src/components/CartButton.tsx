'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export function CartButton() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      aria-label={`Ir para o carrinho com ${totalItems} itens`}
      className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 focus:outline focus:ring-2 focus:ring-blue-500"
    >
      🛒 Carrinho
      {totalItems > 0 && (
        <span className="ml-2 bg-white text-blue-600 font-bold px-2 py-0.5 rounded-full text-sm">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
