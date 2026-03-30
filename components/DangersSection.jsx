"use client";

import Link from "next/link";
import Image from "next/image";

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

export default function DangersSection() {
  return (
    <section className="bg-white my-20 px-4">
      <div className="max-w-[1248px] mx-auto px-[40px]">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            What Dangers Lurk in
            <br />
            Your Crawl Space
          </h2>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-7">
          {dangers.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              {/* ✕ icon */}
             
              <div >
                <div className="flex flex-row items-center"> <span className="mt-1 shrink-0">
                <Image
                  src="/crossIcon.svg"
                  alt="Cross Icon"
                  width={30}
                  height={30}
                />

              </span><p className="font-bold text-gray-900 text-[20px] font-inria-serif">{item.title}</p></div>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/quote"
            className="bg-[#D59438] hover:bg-[#C0842E] text-white font-semibold text-sm 
                       px-10 py-3.5 rounded transition-colors duration-200"
          >
            Get Your FREE Inspection
          </Link>
        </div>

      </div>
    </section>
  );
}