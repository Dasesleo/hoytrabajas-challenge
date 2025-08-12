# Backend (Spring Boot)

## Scope de este módulo

- Modelos de dominio: `Product`, `CartItem`, `Cart`
- Servicios de aplicación en memoria: `ProductService`, `CartService`
- Tests unitarios: `CartTest`
- Endpoints REST:
  - `GET /api/products` — Devuelve la lista estática de productos.
  - `POST /api/cart` — Agrega un producto al carrito.
  - `GET /api/cart` — Devuelve los productos en el carrito.

## Requisitos

- Java 21, Maven

## Ejecutar

```bash
./mvnw spring-boot:run
```
