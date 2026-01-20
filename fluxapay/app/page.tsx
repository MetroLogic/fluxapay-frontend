import Hero from "@/features/landing/components/Hero";
import Navbar from "@/features/landing/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}
