import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <article
      role="group"
      aria-label={`Produto: ${product.title}`}
      className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 flex flex-col justify-between h-full transition hover:shadow-md"
    >
      <img
        src={product.thumbnail}
        alt={`Imagem do produto ${product.title}`}
        className="w-full h-40 object-contain mb-3"
      />

      <h3 className="text-lg font-semibold text-primary">{product.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
      <p className="text-base font-bold text-gray-800 mb-3">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </p>

      <button
        onClick={() => {
          addToCart(product);
          toast.success(`${product.title} adicionado ao carrinho!`);
        }}
        className="mt-auto bg-primary text-white w-full py-2 px-4 rounded hover:bg-primary/90 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label={`Adicionar ${product.title} ao carrinho`}
      >
        Adicionar ao carrinho
      </button>
    </article>
  );
}
