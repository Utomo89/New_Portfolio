import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="bg-[#FAF8F4] text-[#1A1814] font-sans antialiased">
      <Navbar />
      <Hero />
      <About />      
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}