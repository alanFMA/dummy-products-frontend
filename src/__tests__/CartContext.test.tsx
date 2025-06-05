import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

const mockProduct: Product = {
  id: 1,
  title: 'Produto Teste',
  price: 10.5,
  description: 'Descrição',
  category: 'Categoria',
  thumbnail: '',
  brand: 'Marca',
};

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adiciona produto ao carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(1);
  });

  it('incrementa a quantidade se o produto já existir', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct);
    });

    expect(result.current.cart[0].quantity).toBe(2);
  });

  it('remove produto do carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.removeFromCart(mockProduct.id);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it('limpa o carrinho', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it('aumenta a quantidade com increaseQuantity()', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.increaseQuantity(mockProduct.id);
    });

    expect(result.current.cart[0].quantity).toBe(2);
  });

  it('diminui a quantidade com decreaseQuantity() até o mínimo de 1', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.decreaseQuantity(mockProduct.id);
    });

    expect(result.current.cart[0].quantity).toBe(1); // nunca menor que 1
  });

  it('diminui a quantidade se for maior que 1', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.increaseQuantity(mockProduct.id);
      result.current.decreaseQuantity(mockProduct.id);
    });

    expect(result.current.cart[0].quantity).toBe(1);
  });
});
