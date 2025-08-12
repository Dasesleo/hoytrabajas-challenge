import { Product } from "@/types/product";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <li className="flex items-center justify-between border-b py-3">
      <div>
        <p className="font-medium">{product.name}</p>
        <p className="text-sm text-gray-500">ID: {product.id}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="rounded bg-gray-100 px-2 py-1 font-semibold">
          ${product.price}
        </span>
        <AddToCartButton productId={product.id} />
      </div>
    </li>
  );
}
