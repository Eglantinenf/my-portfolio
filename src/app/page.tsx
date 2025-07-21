import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#17092c] via-[#6919a2] to-[#5922d7]">
      <Navbar />
      <Hero name="Nastaran Farjami" />
    </main>
  );
}
