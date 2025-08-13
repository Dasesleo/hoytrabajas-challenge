"use client";

import { useMemo, useState } from "react";
import { findBestCombination, ComboProduct } from "@/lib/findBestCombination";

const DATASET: ComboProduct[] = [
  { id: 1, name: "Producto 1", price: 60 },
  { id: 2, name: "Producto 2", price: 100 },
  { id: 3, name: "Producto 3", price: 120 },
  { id: 4, name: "Producto 4", price: 70 },
];

function sum(arr: ComboProduct[]) {
  return arr.reduce((acc, p) => acc + p.price, 0);
}

export default function BestComboPage() {
  const [budget, setBudget] = useState<number>(150);

  const result = useMemo(() => {
    return findBestCombination(DATASET, Number.isFinite(budget) ? budget : 0);
  }, [budget]);

  const total = sum(result);

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Mejor combinación</h1>
      <p className="mt-2 text-sm text-gray-600">
        Ingresa un presupuesto y calcula la mejor combinación (sin excederlo),
        usando el dataset del reto.
      </p>

      <form
        className="mt-6 flex items-center gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-sm text-gray-700" htmlFor="budget">
          Presupuesto
        </label>
        <input
          id="budget"
          type="number"
          min={0}
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value || "0", 10))}
          className="w-32 rounded border px-3 py-1"
        />
      </form>

      <section className="mt-6 space-y-3">
        {result.length === 0 ? (
          <div className="rounded border bg-gray-50 p-4 text-sm text-gray-600">
            No hay combinación válida para el presupuesto actual.
          </div>
        ) : (
          <>
            <ul className="divide-y rounded border">
              {result.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-gray-500">ID: {p.id}</p>
                  </div>
                  <span className="font-semibold">${p.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between border-t pt-3 font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </>
        )}
      </section>

      <details className="mt-6 cursor-pointer">
        <summary className="text-sm text-gray-700">Dataset del PDF</summary>
        <pre className="mt-2 rounded bg-gray-100 p-3 text-xs">
          {`[
  { "id": 1, "name": "Producto 1", "price": 60 },
  { "id": 2, "name": "Producto 2", "price": 100 },
  { "id": 3, "name": "Producto 3", "price": 120 },
  { "id": 4, "name": "Producto 4", "price": 70 }
]`}
        </pre>
        <p className="mt-2 text-xs text-gray-600">
          Ejemplo esperado: presupuesto 150 → Productos 1 y 4, total 130.
        </p>
      </details>
    </main>
  );
}
