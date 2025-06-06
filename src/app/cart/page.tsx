import { ProtectedRoute } from '@/components/ProtectedRoute';
import CartPage from '@/views/CartPage';

export default function Page() {
  return (
    <ProtectedRoute>
      <CartPage />
    </ProtectedRoute>
  );
}
