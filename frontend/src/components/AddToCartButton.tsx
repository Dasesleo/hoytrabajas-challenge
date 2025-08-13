"use client";

import { apiPost } from "@/lib/api";
import { getOrCreateCartId } from "@/lib/cartId";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = { productId: number };

export function AddToCartButton({ productId }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setOk(false);
    setErr(null);
    try {
      const cartId = getOrCreateCartId();
      await apiPost(
        "/cart",
        { productId, quantity: 1 },
        { "X-Cart-Id": cartId }
      );
      setOk(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("cart:updated"));
      }
    } catch (e) {
      setErr((e as Error).message ?? "Error agregando");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:opacity-50 cursor-pointer"
        aria-live="polite"
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>

      <span className="min-h-5 text-xs" aria-live="polite" aria-atomic="true">
        {ok && (
          <span className="inline-flex items-center gap-1 text-green-700">
            <CheckCircleIcon className="h-4 w-4" aria-hidden="true" />
            Agregado
          </span>
        )}
        {err && <span className="text-red-700">{err}</span>}
      </span>
    </div>
  );
}
