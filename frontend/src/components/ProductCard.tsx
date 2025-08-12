import { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <li className="flex items-center justify-between border-b py-3">
      <div>
        <p className="font-medium">{product.name}</p>
        <p className="text-sm text-gray-500">ID: {product.id}</p>
      </div>
      <span className="rounded bg-gray-100 px-2 py-1 font-semibold">
        ${product.price}
      </span>
    </li>
  );
}
