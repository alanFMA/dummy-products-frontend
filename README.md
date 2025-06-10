# 🛒 Dummy Products

Uma aplicação frontend desenvolvida com **Next.js** para exibir produtos fictícios utilizando a API pública [DummyJSON](https://dummyjson.com/). Inclui autenticação simulada, sistema de carrinho, busca por produtos e funcionalidades de acessibilidade.

## 🚀 Demonstração

Acesse a aplicação em produção:
👉 [dummy-products.vercel.app]([https://dummy-products.vercel.app](https://dummy-products-frontend-f1n8.vercel.app/))

> 🔐 Para acessar, use qualquer e-mail e senha fictícios no login.

## 🔧 Funcionalidades

- ✅ Autenticação simulada com persistência
- 🔍 Busca em tempo real por produtos
- 🛒 Carrinho de compras com:
  - Adicionar, remover, aumentar/diminuir quantidade
  - Esvaziar carrinho
  - Finalizar compra com feedback visual
- ♿ Acessibilidade via atributos ARIA

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sonner](https://sonner.emilkowal.ski/) (toasts)
- [ESLint + Prettier](https://eslint.org/)
- [DummyJSON API](https://dummyjson.com/)

## 🖥️ Rodar localmente

```bash
git clone https://github.com/alanFMA/dummy-products-frontend.git
cd dummy-products-frontend
npm install
npm run dev
