import Link from "next/link";

const cities = [
  "Charlotte",
  "Concord",
  "Gastonia",
  "Huntersville",
  "Matthews",
  "Mooresville",
  "Indian Trail",
  "Monroe",
];

export default function ServiceServingArea() {
  return (
    <section className="bg-[#2E3538] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-10">
          Proudly Serving Charlotte, NC
        </h2>

        {/* Cities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 mb-12">
          {cities.map((city) => (
            <span key={city} className="text-white text-[15px]">
              {city}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/quote"
          className="bg-[#D59438] hover:bg-[#C0852D] transition-colors text-white text-sm font-semibold px-6 py-3 rounded"
        >
          Get Your FREE Inspection
        </Link>

      </div>
    </section>
  );
}