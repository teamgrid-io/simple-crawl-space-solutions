import Image from "next/image";
import Link from "next/link";

export default function ServiceHero() {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      <Image
        src={'/house.png'}
        alt={'Service Hero Image'}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-extrabold uppercase tracking-wide leading-tight text-4xl md:text-5xl lg:text-[3rem] max-w-3xl drop-shadow-lg">
          Simple Crawl Space Solutions
        </h1>
        <p className="mt-4 text-white/90 text-sm md:text-base max-w-xl leading-relaxed">
          Simple Crawl Space Solutions was built on one idea: make repairs easy to 
understand, easy to trust, and easy to move forward with
        </p>
        <Link
          href="/quote"
          className="mt-7 bg-[#D59438] hover:bg-[#C0852D] text-white font-semibold text-sm
                     px-8 py-3 rounded transition-colors duration-200"
        >
          Get Your FREE Inspection
        </Link>
      </div>
    </section>
  );
}