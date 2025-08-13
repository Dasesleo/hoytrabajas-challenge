import Link from "next/link";
import { CartLink } from "./CartLink";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-lg font-semibold hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            Tienda
          </Link>
          <Link
            href="/best-combo"
            className="text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5"
          >
            Mejor combinación
          </Link>
        </div>
        <CartLink />
      </nav>
    </header>
  );
}
