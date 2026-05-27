import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroSidebar } from "./HeroSidebar";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <HeroContent />
      <HeroSidebar />
    </section>
  );
}