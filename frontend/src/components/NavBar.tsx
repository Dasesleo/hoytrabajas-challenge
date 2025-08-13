import Link from "next/link";
import { CartLink } from "./CartLink";

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          Tienda
        </Link>
        <CartLink />
      </nav>
    </header>
  );
}
