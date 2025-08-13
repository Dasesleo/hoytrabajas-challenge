# Prueba Técnica — API y Carrito de Compras

Monorepo con **Spring Boot (backend)** y **Next.js + Tailwind (frontend)**.  
Cumple los requisitos del documento: endpoints REST, carrito en memoria y frontend con listado/agregado/visualización, y página adicional con la lógica `findBestCombination`.

## Ejecución recomendada

1. **Backend primero**

   - Ir a la carpeta `backend/`.
   - Seguir las instrucciones detalladas en su [README](backend/README.md) para instalación y ejecución.
   - Esto levantará la API en `http://localhost:8080`.

2. **Frontend después**
   - Ir a la carpeta `frontend/`.
   - Seguir las instrucciones detalladas en su [README](frontend/README.md) para configuración y ejecución.
   - Esto levantará la aplicación en `http://localhost:3000`, consumiendo el backend.

> Es importante levantar primero el backend para que el frontend pueda consumir la API correctamente.

---
