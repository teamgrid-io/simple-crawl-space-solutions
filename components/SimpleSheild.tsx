"use client";
import Image from "next/image";
export default function SimpleShieldSection() {
  const columnsAndRows = [
    {
      header: "Solution",
      values: ["Encapsulation", "Water\nManagement", "Insulation", "SimpleShield™"],
    },
    { header: "Stops\nMoisture", values: ["check", "cross", "warning:(Some)", "check"] },
    { header: "Stops\nWater", values: ["cross", "check", "cross", "check"] },
    { header: "Improves Air\nQuality", values: ["check", "warning:(Indirectly)", "cross", "check"] },
    { header: "Saves\nEnergy", values: ["check", "cross", "check", "check"] },
    { header: "Prevents\nFlooding", values: ["cross", "check", "cross", "check"] },
  ];

  const Check = () => (
    <Image src="/check.svg" alt="Checkmark" width={20} height={20} className="mx-auto" />
  );

  const Cross = () => (
    <Image src="/crossIcon.svg" alt="Cross" width={25} height={25} className="mx-auto" />
  );

  const Warning = ({ text }: { text?: string }) => (
    <div className="flex flex-row items-center gap-1">
      <Image src="/error.svg" alt="Warning" width={18} height={18} className="mx-auto" />
      {text && <span className="text-[11px] text-amber-500 whitespace-nowrap">{text}</span>}
    </div>
  );

  const renderCell = (val: string, isLabelCol: boolean) => {
    if (isLabelCol) {
      return (
        <span className="text-sm font-bold text-gray-800 whitespace-pre-line leading-snug text-[16px]">
          {val}
        </span>
      );
    }
    if (val === "check") return <Check />;
    if (val === "cross") return <Cross />;
    if (val.startsWith("warning")) {
      const text = val.includes(":") ? val.split(":")[1] : undefined;
      return <Warning text={text} />;
    }
    return null;
  };

  return (
    <section className="bg-white my-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            SimpleShield™ System
          </h2>
        </div>
        <p className="text-center text-gray-500 text-sm md:text-[15px] max-w-2xl mx-auto mb-12 leading-relaxed">
          SimpleShield™ is the all-in-one system that fully seals, drains, and insulates your crawl space.
          It targets every central problem area below your home in one streamlined process. The result
          is maximum protection, long-term savings, and a foundation you never have to worry about.
        </p>

        {/* ✅ Added -mx-4 px-4 on mobile so table uses full screen width with scroll */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex min-w-max">
            {columnsAndRows.map((col, idx) => {
              const isLabelCol = idx === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    // ✅ Narrower label col on mobile, same on desktop
                    isLabelCol
                      ? "w-32 md:w-44"
                      : "flex-1 min-w-[80px] md:min-w-[120px] border-l-2 border-gray-200"
                  }`}
                >
                  {/* Header */}
                  <div className="flex h-14 justify-center px-2 md:px-4">
                    <div className="w-full border-b-1 border-gray-300 flex items-start">
                      <p className="whitespace-pre-line text-start text-[14px] md:text-[18px] text-gray-800 leading-[1.2] font-proxima-nova">
                        {col.header}
                      </p>
                    </div>
                  </div>

                  {/* Value cells */}
                  {col.values.map((val, i) => (
                    <div
                      key={i}
                      className={`h-12 flex items-center ${
                        isLabelCol ? "justify-start px-2 md:px-4" : "justify-center"
                      }`}
                    >
                      {renderCell(val, isLabelCol)}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnote */}
        <p className="text-gray-400 text-xs mt-8 italic text-center">
          *Encapsulation can help after water management is done, but won&apos;t handle standing water alone.
        </p>

      </div>
    </section>
  );
}