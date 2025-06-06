'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CartPage() {
  const { cart, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
      toast.success('Compra finalizada com sucesso! 🛒');
    }, 1200);
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-primary">Seu carrinho</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">O carrinho está vazio.</p>
      ) : (
        <section className="flex flex-col h-[70vh]">
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm border border-gray-200 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="mb-2 sm:mb-0">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity}x R$ {item.price.toFixed(2)} ={' '}
                    <strong className="text-gray-800">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t py-4 px-2 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-lg font-semibold text-gray-800">Total: R$ {total.toFixed(2)}</p>

              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-medium transition"
                >
                  Esvaziar
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className={`px-4 py-2 rounded font-medium text-white transition ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {loading ? 'Finalizando...' : 'Finalizar Compra'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
