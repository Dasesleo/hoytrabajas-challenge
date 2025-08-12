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
        className="rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>

      {ok && (
        <span className="flex items-center gap-1 text-xs text-green-700">
          <CheckCircleIcon className="h-4 w-4" aria-hidden="true" />
          Agregado
        </span>
      )}
      {err && <span className="text-xs text-red-700">{err}</span>}
    </div>
  );
}
