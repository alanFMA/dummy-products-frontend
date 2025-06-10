import { render, screen } from '@testing-library/react';
import { CartButton } from '@/components/CartButton';
import { CartProvider } from '@/context/CartContext';
import '@testing-library/jest-dom';

// Mock completo do AuthContext
jest.mock('@/context/AuthContext', () => ({
  useAuth: jest.fn(),
  AuthProvider: ({ children }: { children: React.ReactNode }) => children,
}));

import { useAuth } from '@/context/AuthContext';

type MockProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

function mockLocalStorageWithCart(items: MockProduct[] = []) {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: () => JSON.stringify(items),
      setItem: jest.fn(),
    },
    writable: true,
  });
}

function renderWithProviders(cartItems: MockProduct[] = []) {
  mockLocalStorageWithCart(cartItems);

  render(
    <CartProvider>
      <CartButton />
    </CartProvider>,
  );
}

describe('CartButton', () => {
  it('exibe "Carrinho" mesmo com 0 itens', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      user: 'usuario@exemplo.com',
      login: jest.fn(),
      logout: jest.fn(),
    });

    renderWithProviders([]);
    expect(screen.getByRole('link')).toHaveTextContent('Carrinho');
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('mostra a quantidade total de itens no badge', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      user: 'usuario@exemplo.com',
      login: jest.fn(),
      logout: jest.fn(),
    });

    renderWithProviders([
      { id: 1, title: 'Produto 1', price: 10, quantity: 2 },
      { id: 2, title: 'Produto 2', price: 5, quantity: 3 },
    ]);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('não renderiza se o usuário não estiver autenticado', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      user: null,
      login: jest.fn(),
      logout: jest.fn(),
    });

    renderWithProviders([]);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
