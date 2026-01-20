import { ReactNode } from "react";

export function FluxaButton({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-md transition hover:scale-[1.02] hover:bg-gray-100">
      {children}
    </button>
  );
}