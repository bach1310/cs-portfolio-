import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Honors from "@/components/Honors";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 tech-grid text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Honors />
      </main>
      <Contact />
    </div>
  );
}
