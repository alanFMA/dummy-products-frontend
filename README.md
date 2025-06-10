# 🛍️ Dummy Products

Uma aplicação web moderna construída com **Next.js**, **TypeScript** e **Tailwind CSS**, consumindo dados da [DummyJSON API](https://dummyjson.com/products). Permite ao usuário simular uma navegação em um catálogo de produtos, adicionar itens ao carrinho e realizar uma compra fictícia.

> 🔗 [Acesse a aplicação online](https://dummy-products-frontend-f1n8.vercel.app/)

## ✨ Funcionalidades

- 🔐 Autenticação fake (login/logout com token local)
- 🛒 Carrinho de compras persistente com `localStorage`
- 🔎 Busca de produtos por nome
- ✅ Finalização de compra com feedback visual
- ♿ Acessibilidade aprimorada com `aria-*` e navegação sem mouse
- 📱 Responsivo em múltiplos dispositivos
- 🌙 Interface clean com Tailwind CSS

## 🧪 Tecnologias utilizadas

- <img width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /> [Next.js 14](https://nextjs.org/)
- <img width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /> [TypeScript](https://www.typescriptlang.org/)
- <img width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /> [Tailwind CSS](https://tailwindcss.com/)
- <img width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" /> [Jest](https://jestjs.io/)
- <img width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /> [React Context API](https://reactjs.org/docs/context.html)
- 🔔 [Sonner](https://sonner.emilkowal.ski/)
- <img width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" /> [Vercel](https://vercel.com/)

## 🔧 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dummy-products.git

# Acesse o diretório
cd dummy-products

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

## 📁 Estrutura de Pastas

```
src/
├── components/       → Componentes reutilizáveis (Navbar, Footer, etc)
├── context/          → Contextos de autenticação e carrinho
├── pages/            → Rotas principais do Next.js
├── views/            → Views separadas para rotas autenticadas
├── types/            → Tipagens TypeScript
```

## 🧪 Testes

Este projeto utiliza [Jest](https://jestjs.io/) para testes unitários.

Para executar os testes:

```bash
npm run test
```

Com cobertura de código:
```bash
npm run test -- --coverage
```

## 🧼 Padrões de Código

- ESLint com regras de acessibilidade (`jsx-a11y`)
- Prettier para formatação automática
- Husky para pré-commits

## 🚀 Deploy

Este projeto está hospedado na Vercel:

> 🌍 [https://dummy-products-frontend-f1n8.vercel.app/](https://dummy-products-frontend-f1n8.vercel.app/)
