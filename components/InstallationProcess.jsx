"use client";

export default function InstallationProcess() {
  const steps = [
    {
      number: 1,
      title: "Schedule a Free Inspection",
      description:
        "Tell us when to come by, and we'll check what's happening under your home.",
    },
    {
      number: 2,
      title: "Get a Simple Plan",
      description:
        "We'll explain what's wrong and how we'll fix it — no pressure.",
    },
    {
      number: 3,
      title: "Complete the Work",
      description:
        "Our team completes it with proven tools, materials, and experience.",
    },
    {
      number: 4,
      title: "Enjoy a Healthier Home",
      description:
        "Feel the difference in comfort, safety, and peace of mind that lasts.",
    },
  ];

  return (
    <section className="bg-[#2E3538] py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-14">
          Installation Process
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex-1 flex flex-col px-8 py-2
        ${idx !== steps.length - 1 ? "mb-10 md:mb-0" : ""}
      `}
            >
              {/* Circle + Title */}
              <div
                className={`relative flex flex-col gap-5
          ${idx !== 0 ? "md:pl-8" : ""}
        `}
              >
                {/* Border line — fixed height, stops after 1st title line */}
                {idx !== 0 && (
                  <div className="absolute left-0 top-0 hidden md:block w-px bg-[#DCDCDC] h-22" />
                )}

                <div className="w-12 h-12 rounded-full border-2 border-[#c8922a] flex items-center justify-center shrink-0">
                  <span className="text-[#c8922a] font-semibold text-xl">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-[#ededec] text-base leading-relaxed font-normal
        ${idx !== 0 ? "md:pl-8" : ""}
      `}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}