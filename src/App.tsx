import { About } from "@/components/About";
import { Backdrop } from "@/components/Backdrop";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function App() {
  return (
    <div className="relative isolate flex min-h-screen flex-col justify-between overflow-x-clip">
      <Backdrop />
      <Navbar />
      <main className="mx-auto w-full max-w-[1536px] flex-1 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-y-4">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <CodingProfiles />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
