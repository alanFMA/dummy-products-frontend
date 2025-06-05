import { render, screen } from '@testing-library/react';
import { CartButton } from '@/components/CartButton';
import { CartItem } from '@/types/cartItem';
import { CartProvider } from '@/context/CartContext';
import '@testing-library/jest-dom';

function renderWithCart(cartItems: CartItem[] = []) {
  const mockLocalStorage = {
    getItem: () => JSON.stringify(cartItems),
    setItem: jest.fn(),
  };

  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
    writable: true,
  });

  render(
    <CartProvider>
      <CartButton />
    </CartProvider>,
  );
}

describe('CartButton', () => {
  it('renderiza corretamente com 0 itens', () => {
    renderWithCart([]);
    expect(screen.getByRole('link')).toHaveTextContent('Carrinho');
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('mostra a quantidade total de itens', () => {
    renderWithCart([
      {
        id: 1,
        title: 'Produto 1',
        price: 10,
        quantity: 2,
        thumbnail: '',
        category: '',
        description: '',
        brand: '',
      },
      {
        id: 2,
        title: 'Produto 2',
        price: 5,
        quantity: 3,
        thumbnail: '',
        category: '',
        description: '',
        brand: '',
      },
    ]);
    expect(screen.getByText('5')).toBeInTheDocument(); // 2 + 3 = 5
    expect(screen.getByLabelText(/ir para o carrinho/i)).toBeInTheDocument();
  });
});
