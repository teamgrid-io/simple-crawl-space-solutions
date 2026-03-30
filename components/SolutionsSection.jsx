"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const solutions = [
  {
    title: "Crawl Space Encapsulation",
    image: "/Residential-window.png",
    bullets: [
      "Seals your crawl space to block moisture, mold, and pests.",
      "Improves indoor air quality and creates a healthier living space.",
      "Helps lower energy bills with stable temperatures in your home.",
    ],
    href: "/services/encapsulation",
  },
  {
    title: "Crawl Space Water Management System",
    image: "/Residential-window-1.png",
    bullets: [
      "Redirects groundwater with drainage systems and a sump pump.",
      "Prevents flooding, standing water, and long-term foundation damage.",
      "Keeps your crawl space protected during heavy rain or high water levels.",
    ],
    href: "/services/water-management",
  },
  {
    title: "Crawl Space Dehumidification",
    image: "/Residential-window.png",
    bullets: [
      "Controls humidity levels to prevent mold and mildew growth.",
      "Protects wood structures from moisture damage.",
      "Improves overall air quality throughout your home.",
    ],
    href: "/services/dehumidification",
  },
];

export default function SolutionsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((i) => (i - 1 + solutions.length) % solutions.length);
  const next = () =>
    setStartIndex((i) => (i + 1) % solutions.length);

  // Always show 2 cards; wrap around
  const visibleCards = [
    solutions[startIndex % solutions.length],
    solutions[(startIndex + 1) % solutions.length],
  ];

  return (
    <section className="bg-white my-20 px-4">
      <div className="max-w-[1248px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Choose the Right Fix for
            <br />
            Your Crawl Space
          </h2>
        </div>
        <p className="text-center text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
          Your home can be stronger, healthier, and more efficient. Our simple solutions keep moisture
          out and prevent costly damage. See how each solution protects your home and your family.
        </p>

        {/* Carousel row */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Prev Arrow */}
          <Image src="/circle-arrow-left.svg" alt="Previous" width={30} height={30} onClick={prev} className="rotate-180"/>

          {/* Two Cards */}
          <div className="flex flex-1 gap-4">
            {visibleCards.map((sol, idx) => (
              <div
                key={`${sol.title}-${idx}`}
                className="flex-1 bg-[#2E3538] rounded-[3px] overflow-hidden shadow-lg flex flex-col"
              >
                {/* Card Image */}
                <div className="relative w-full h-44 md:h-52">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-base mb-4 leading-snug">
                    {sol.title}
                  </h3>
                  <ul className="space-y-2 flex-1">
                    {sol.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-[8px] w-1 h-1 rounded-full bg-white shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Link
                      href={sol.href}
                      className="text-[#D59438] hover:text-[#C0842E] text-sm font-semibold transition-colors"
                    >
                      View Solution
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
            <Image src="/circle-arrow-left.svg" alt="Next" width={30} height={30} onClick={next}/>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1 mt-6">
          {solutions.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1 h-1 rounded-[1px] transition-colors duration-200 ${
                i === startIndex ? "bg-[#000000]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
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