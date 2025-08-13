"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { getOrCreateCartId } from "@/lib/cartId";
import { API_BASE } from "@/lib/api";
import type { Cart } from "@/types/cart";

export function CartLink() {
  const [count, setCount] = useState<number>(0);

  const fetchCount = useCallback(async () => {
    try {
      const cartId = getOrCreateCartId();
      const res = await fetch(`${API_BASE}/cart`, {
        headers: { "X-Cart-Id": cartId },
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const c: Cart = await res.json();
      const totalItems = Array.isArray(c?.items)
        ? c.items.reduce((acc, it) => acc + (it?.quantity ?? 0), 0)
        : 0;
      setCount(totalItems);
    } catch (err) {
      console.error("CartLink fetch error:", err);
      setCount(0);
    }
  }, []);

  useEffect(() => {
    fetchCount();
    const onUpdated = () => fetchCount();
    window.addEventListener("cart:updated", onUpdated);
    return () => window.removeEventListener("cart:updated", onUpdated);
  }, [fetchCount]);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      aria-label={`Abrir carrito. ${count} artículo${count === 1 ? "" : "s"}`}
    >
      <span className="font-medium">Carrito</span>
      <span
        className="grid min-w-5 place-items-center rounded-full bg-blue-600 px-1.5 text-xs font-bold text-white"
        aria-live="polite"
        aria-atomic="true"
      >
        {count}
      </span>
    </Link>
  );
}
