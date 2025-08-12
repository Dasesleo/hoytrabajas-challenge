import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function ProductList({ products }: { products: Product[] }) {
  if (!products?.length) {
    return (
      <div className="rounded-lg border p-4 text-sm text-gray-600">
        No hay productos para mostrar.
      </div>
    );
  }
  return (
    <ul className="divide-y">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
