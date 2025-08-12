# Frontend (Next.js)

## Scope de este módulo

- Configuración inicial de Next.js con TypeScript.
- Consumo de la API backend para mostrar productos.
- Home muestra lista de productos y permite "Agregar al carrito" (POST /api/cart con X-Cart-Id en localStorage).

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
