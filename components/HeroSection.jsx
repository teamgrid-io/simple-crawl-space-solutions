"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const dangers = [
    {
      title: "Mold Growth",
      desc: "Mold spreads through the crawl space and enters the air you breathe.",
    },
    {
      title: "Poor Air Quality",
      desc: "Air from the crawl space carries mold, dust, and allergens into your home.",
    },
    {
      title: "Wood Rot",
      desc: "Moisture breaks down wood supports and leads to sagging floors.",
    },
    {
      title: "High Energy Bills",
      desc: "Unsealed crawl spaces let in outside air and strain your HVAC system.",
    },
    {
      title: "Pests & Rodents",
      desc: "Mice, termites, and insects damage wiring, insulation, and wood.",
    },
    {
      title: "Flooding & Standing Water",
      desc: "Water collects under the home and weakens the foundation over time.",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[580px] md:h-[640px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/house.png" /* replace with your actual image path */
          alt="Crawl space home exterior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white uppercase tracking-wide leading-tight text-4xl md:text-5xl lg:text-[3.25rem] max-w-3xl drop-shadow-lg font-[600] leading-[62px]  ">
            Crawl Space Solutions
            <br />
            For a Healthier Home
          </h1>
          <p className="mt-2 text-white/90 text-base md:text-xl max-w-xl leading-relaxed font-[400]">
            Our simple crawl space solutions improve air quality,
            lower energy bills, and protect your home&apos;s structure.
          </p>
        </div>
      </section>
    </>
  );
}