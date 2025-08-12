import { apiGet } from "@/lib/api";
import { Product } from "@/types/product";
import { ProductList } from "@/components/ProductList";

async function getProducts(): Promise<Product[]> {
  return apiGet<Product[]>("/products");
}

export default async function Home() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await getProducts();
  } catch (e) {
    error = (e as Error).message ?? "Error desconocido al obtener productos";
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Productos</h1>
      <p className="mt-1 text-sm text-gray-600">
        Backend:&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5">
          {process.env.NEXT_PUBLIC_API_BASE_URL}
        </code>
      </p>

      <section className="mt-6">
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Error cargando productos: {error}
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </section>
    </main>
  );
}
