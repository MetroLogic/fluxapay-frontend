// features/landing/components/Hero.tsx
import Link from "next/link";
import { FluxaButton } from "./FluxaButton";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0b1f] via-[#2a1f5c] to-[#0b0b1f]">
      {/* Globe / radial backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[900px] w-[900px] rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-transparent blur-3xl" />
      </div>

      {/* Floating payment chips */}
      <div className="pointer-events-none absolute left-20 top-1/2 hidden -translate-y-1/2 md:block">
        <Chip label="Transfer" value="20,000 NGN" flag="🇳🇬" />
      </div>
      <div className="pointer-events-none absolute right-24 top-1/3 hidden md:block">
        <Chip label="Transfer" value="5,000 GHS" flag="🇬🇭" />
      </div>
      <div className="pointer-events-none absolute top-40 hidden md:block">
        <Chip label="Transfer" value="5,000 KHS" flag="🇰🇪" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Accept <span className="text-yellow-400 italic">Crypto</span>
          <br />
          Get Paid in Fiat Instantly
        </h1>

        <p className="mt-6 text-base text-gray-300 md:text-lg">
          FluxaPay lets merchants accept USDC payments on Stellar and get settled
          in local fiat with a Stripe-like API and no on-chain complexity.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/signup">
            <FluxaButton>Join Fluxapay</FluxaButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Chip({ label, value, flag }: { label: string; value: string; flag: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-lg">
      <span className="text-xl">{flag}</span>
      <div className="text-left">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}