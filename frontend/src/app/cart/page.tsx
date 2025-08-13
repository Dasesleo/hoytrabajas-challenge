"use client";

import { useEffect, useState } from "react";
import { Cart } from "@/types/cart";
import { getOrCreateCartId } from "@/lib/cartId";
import { API_BASE } from "@/lib/api";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const cartId = getOrCreateCartId();
    fetch(`${API_BASE}/cart`, { headers: { "X-Cart-Id": cartId } })
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

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold mb-4">Tu carrito</h1>
      {!cart || cart.items.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          <ul className="divide-y">
            {cart.items.map((item) => (
              <li key={item.product.id} className="flex justify-between py-3">
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.product.price} x {item.quantity}
                  </p>
                </div>
                <span className="font-semibold">
                  ${item.product.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t pt-4 font-bold">
            <span>Total</span>
            <span>${cart.total}</span>
          </div>
        </div>
      )}
    </main>
  );
}
