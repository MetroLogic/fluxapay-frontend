import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <nav className="grid grid-cols-3 items-center rounded-2xl bg-white/90 px-6 py-3 shadow-lg backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="FluxaPay" width={32} height={32} className="rounded-md bg-gradient-to-br from-yellow-400 to-indigo-500" />
          <span className="text-lg font-semibold text-gray-900">FluxaPay</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex justify-self-center items-center gap-8">
          <li>
            <Link href="#" className="text-sm font-medium text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Documentation
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-self-end">
          <Link
            href="/login"
            className="rounded-2xl border border-gray-200 bg-gray-25 shadow-md px-4 py-2 text-sm font-medium text-red-500 hover:bg-gray-50"
          >
            Login
          </Link>
          <button className="rounded-2xl bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800">
            Join Fluxapay
          </button>
        </div>
      </nav>
    </header>
  );
}