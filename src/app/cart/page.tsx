'use client';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CartPage() {
  const { cart, clearCart } = useCart();
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
              onClick={handleCheckout}
              disabled={loading}
              className={`px-4 py-2 rounded transition text-white ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {loading ? 'Finalizando...' : 'Finalizar Compra'}
            </button>
          </div>
        </>
      )}
    </main>
  );
}
