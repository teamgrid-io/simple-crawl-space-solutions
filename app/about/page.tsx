import AboutCta from "@/components/Sections/About/AboutCta";
import AboutHero from "@/components/Sections/About/AboutHero";
import AboutServiceWarrranty from "@/components/Sections/About/AboutServiceWarrranty";
import ServiceServingArea from "@/components/Sections/About/Serviceservingarea";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutServiceWarrranty />
      <ServiceServingArea />
      <AboutCta />
    </main>
  );
}
