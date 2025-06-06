import { ProtectedRoute } from '@/components/ProtectedRoute';
import HomePage from '@/views/HomePage';

export default function Page() {
  return (
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  );
}
