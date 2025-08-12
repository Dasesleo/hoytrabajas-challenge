# Backend (Spring Boot)

## Scope de este módulo

- Modelos de dominio: `Product`, `CartItem`, `Cart`
- Servicios de aplicación en memoria: `ProductService`, `CartService`
- Tests unitarios:

  - `CartServiceTest`: Prueba la correcta gestión de productos en el carrito y `cartId`s distintos.
  - `ProductServiceTest`: Verifica que `findById()` funciona correctamente para productos válidos e inválidos.
  - `CartControllerIntegrationTest`: Prueba los endpoints de la API: `POST /api/cart` y `GET /api/cart`.

- Endpoints REST:
  - `GET /api/products` — Devuelve la lista estática de productos.
  - `POST /api/cart` — Agrega un producto al carrito. Requiere `productId` y `quantity` en el body.
  - `GET /api/cart` — Devuelve los productos en el carrito. Requiere el header `X-Cart-Id` (por defecto `default`).

## Requisitos

- Java 21, Maven

## Ejecutar

```bash
./mvnw spring-boot:run
```
