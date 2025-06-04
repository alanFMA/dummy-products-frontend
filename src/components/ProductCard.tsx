import { Product } from '@/types/product';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
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
      <p className="mt-2 font-bold">R$ {product.price}</p>
    </article>
  );
}
