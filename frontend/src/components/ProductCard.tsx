import { Product } from "@/types/product";
import { AddToCartButton } from "./AddToCartButton";
import { formatMoney } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <li className="group rounded-xl border p-4 shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold">{product.name}</p>
          <p className="text-xs text-gray-500">ID: {product.id}</p>
        </div>
        <span className="rounded bg-gray-100 px-2 py-1 font-semibold">
          {formatMoney(product.price)}
        </span>
      </div>
      <div className="mt-4">
        <AddToCartButton productId={product.id} />
      </div>
    </li>
  );
}
