import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About/AboutSection";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero name="Nastaran Farjami" />
      <AboutSection />
    </main>
  );
}
