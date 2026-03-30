"use client";
import Image from "next/image";
export default function AboutCta() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-4">

      {/* Decorative leaf shapes */}
      <div className="absolute left-0 top-0 h-full w-64 pointer-events-none select-none">
        <Image src="/Vector.png" alt="Decorative Leaf" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-start pl-4 md:pl-24">
        <h2 className="text-[#3A5E5E] text-3xl md:text-4xl font-bold leading-tight max-w-[600px] mb-5">
          Secure Your Home&apos;s Future With a 10-Year Warrant
        </h2>
        <p className="text-gray-500 text-sm md:text-[15px] max-w-[610px] leading-relaxed mb-8">
          Crawl spaces are often where serious home problems begin. Taking care of it today
          can stop future damage. With a 10-year warranty, that choice comes with confidence.
        </p>
        <button className="bg-[#c8922a] hover:bg-[#b07d22] transition-colors text-white text-sm font-semibold px-6 py-3 rounded">
          Get Your FREE Inspection
        </button>
      </div>

    </section>
  );
}
