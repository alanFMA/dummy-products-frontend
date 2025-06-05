'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Seu carrinho</h1>

      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-4">
              <p className="font-medium">{item.title}</p>
              <p>
                {item.quantity}x R$ {item.price.toFixed(2)} ={' '}
                <strong>R$ {(item.price * item.quantity).toFixed(2)}</strong>
              </p>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total: R$ {total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </main>
  );
}
