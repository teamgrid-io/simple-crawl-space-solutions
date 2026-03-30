import Image from "next/image";


export default function ServiceWarranty() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1248px] mx-auto px-[40px]">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* LEFT — Image */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={ "/frameless.png"}
                alt="Warranty"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Two text blocks */}
          <div className="flex-1 flex flex-col gap-10">

            {/* Block 1 */}
            <div>
              <h2 className="text-xl md:text-[30px] font-bold text-gray-900 mb-3 leading-snug">
                <span className="text-[#D59438]">Our Warranty:</span>{" "}
                10 Years of Risk-Free Protection
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                A 10-year warranty means the risk is off your shoulders. If there&apos;s a
                problem, it gets fixed—no loopholes, no extra cost. You get lasting
                protection and peace of mind.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h2 className="text-xl md:text-[30px] font-bold text-gray-900 mb-3 leading-snug">
                <span className="text-[#D59438]">What Sets Us Apart:</span>{" "}
                100% Transparency
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We don&apos;t believe in upsells, scare tactics, or complicated packages.
                You&apos;ll get a clear explanation of what your crawl space needs and
                nothing it doesn&apos;t. Expect clear quotes, full photo documentation, and
                zero surprises.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}