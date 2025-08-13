# Frontend (Next.js)

## Scope de este módulo

- Next.js (App Router) + TypeScript + Tailwind + ESLint.
- Consumo de la API backend:
  - **Listar productos** desde `GET /api/products`.
  - **Agregar al carrito** con `POST /api/cart` enviando `X-Cart-Id` (persistido en `localStorage`).
  - **Ver carrito** en `/cart`: items (producto, precio, cantidad, subtotal) y **total**.
- **Navbar** con enlace a `/cart` y **contador** de ítems (se actualiza tras agregar).
- Página **`/best-combo`**:
  - Permite ingresar un presupuesto y calcula la mejor combinación de productos sin excederlo.
  - Usa el dataset del reto y la función `findBestCombination`.
  - Ejemplo: presupuesto **150** → productos 1 y 4, total **130**.

## Requisitos

- Node.js (recomendado: LTS)
- pnpm

## Configuración

Crear un archivo `.env.local` en la carpeta `frontend` con:
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080

## Ejecutar

1. Instalar dependencias:

```bash
pnpm install
```

2. Levantar el servidor:

```bash
pnpm dev
```
