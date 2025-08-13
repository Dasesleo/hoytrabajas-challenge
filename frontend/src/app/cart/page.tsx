"use client";

import { useEffect, useState } from "react";
import { Cart } from "@/types/cart";
import { getOrCreateCartId } from "@/lib/cartId";
import { API_BASE } from "@/lib/api";
import { formatMoney } from "@/lib/format";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const cartId = getOrCreateCartId();
    fetch(`${API_BASE}/cart`, {
      headers: { "X-Cart-Id": cartId },
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      .then((data: Cart) => {
        setCart(data);
        setLoading(false);
      })
      .catch((e) => {
        setErr(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Cargando carrito...</p>;
  if (err) return <p className="p-6 text-red-600">Error: {err}</p>;

  const isEmpty = !cart || cart.items.length === 0;

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Tu carrito</h1>
      {isEmpty ? (
        <div className="rounded-lg border p-6 text-gray-600">
          <p>El carrito está vacío.</p>
          <Link
            href="/"
            className="mt-3 inline-block rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <ul className="divide-y rounded-lg border">
            {cart!.items.map((item) => (
              <li
                key={item.product.id}
                className="flex items-center justify-between px-4 py-3"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatMoney(item.product.price)} × {item.quantity}
                  </p>
                </div>
                <span className="font-semibold">
                  {formatMoney(item.product.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t pt-4 font-bold">
            <span>Total</span>
            <span>{formatMoney(cart!.total)}</span>
          </div>
          <div>
            <Link
              href="/"
              className="mt-2 inline-block rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
            >
              Seguir comprando
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
