'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    const filteredList = products.filter((p) => p.title.toLowerCase().includes(term));
    setFiltered(filteredList);
  }, [search, products]);

  return (
    <main aria-labelledby="main-heading" className="p-6">
      <h1 id="main-heading" className="text-3xl font-bold mb-6 text-primary">
        Catálogo de Produtos
      </h1>

      <section role="search" className="mb-6">
        <label htmlFor="search" className="sr-only">
          Buscar produtos
        </label>
        <input
          id="search"
          type="text"
          placeholder="Buscar por nome..."
          aria-label="Campo de busca de produtos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 text-black rounded-md px-4 py-2 w-full sm:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </section>

      {loading ? (
        <p aria-live="polite" role="status">
          Carregando produtos...
        </p>
      ) : filtered.length === 0 ? (
        <p aria-live="assertive" className="text-accent font-medium">
          Nenhum produto encontrado para: <strong>{search}</strong>
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}
