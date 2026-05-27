import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MouseGlow } from "@/components/MouseGlow";

export default function Home() {
  return (
    <main>
      <MouseGlow />
      <Navbar />
      <Hero />
    </main>
  )
}