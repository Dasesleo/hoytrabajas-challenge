import Link from "next/link";
import { CartLink } from "./CartLink";

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold">
            Tienda
          </Link>
          <Link
            href="/best-combo"
            className="text-sm text-gray-700 hover:underline"
          >
            Mejor combinación
          </Link>
        </div>
        <CartLink />
      </nav>
    </header>
  );
}
