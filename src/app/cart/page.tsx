'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6" aria-label="Carrinho de compras">
        Carrinho de Compras
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border rounded p-4 flex justify-between items-start gap-4"
              >
                <img
                  src={item.thumbnail}
                  alt={`Imagem de ${item.title}`}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    R$ {item.price} × {item.quantity}
                  </p>
                  <p className="mt-1 font-bold">Subtotal: R$ {item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:underline"
                  aria-label={`Remover ${item.title} do carrinho`}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <strong className="text-xl">Total: R$ {total}</strong>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label="Esvaziar carrinho"
            >
              Esvaziar Carrinho
            </button>
          </div>
        </>
      )}
    </main>
  );
}
