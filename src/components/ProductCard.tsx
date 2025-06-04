import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product);
    toast.success(`${product.title} adicionado ao carrinho!`);
  }

  return (
    <article
      role="group"
      aria-label={`Produto: ${product.title}`}
      className="border rounded p-4 shadow-sm hover:shadow-md transition"
    >
      <img
        src={product.thumbnail}
        alt={`Imagem do produto ${product.title}`}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      <p className="mt-2 font-bold">R$ {product.price.toFixed(2).replace('.', ',')}</p>
      <button
        onClick={handleAdd}
        className="mt-3 w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label={`Adicionar ${product.title} ao carrinho`}
      >
        Adicionar ao carrinho
      </button>
    </article>
  );
}
