import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Honors from "@/components/Honors";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white editorial-grid text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Honors />
        <Projects />
        <Leadership />
        <Capabilities />
      </main>
      <Contact />
    </div>
  );
}
