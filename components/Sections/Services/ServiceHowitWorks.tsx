import Image from "next/image";
import Link from "next/link";
import { ServicePage } from "@/lib/servicesData";

interface ServiceHowItWorksProps {
  service: ServicePage;
}

export default function ServiceHowItWorks({ service }: ServiceHowItWorksProps) {
  return (
    <section className="relative w-full min-h-[500px] flex flex-col md:flex-row">

      {/* Full-bleed background halves */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="flex-1 bg-[#A75C39]" />
        <div className="flex-1 bg-gray-300" />
      </div>

      {/* LEFT — text constrained to right edge of 1248px left half */}
      <div className="relative z-10 flex-1 flex justify-end">
        <div className="w-full max-w-[624px] px-10 py-14 flex flex-col justify-between">
          <div>
            <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-10">
              How Does {service.title} Work?
            </h2>
            <ol className="space-y-6">
              {service.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white">
                  <span className="shrink-0 text-sm font-semibold mt-0.5">
                    {idx + 1}.
                  </span>
                  <p className="text-sm leading-relaxed opacity-95">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12">
             <Link
          href="/quote"
          className="bg-[#c8922a] hover:bg-[#b07d22] transition-colors text-white text-sm font-semibold px-6 py-3 rounded"
        >
          Get Your FREE Inspection
        </Link>
          </div>
        </div>
      </div>

      {/* RIGHT — image fully fills its half, edge to edge */}
      <div className="relative z-10 flex-1 min-h-[400px] md:min-h-0">
        <Image
          src={service.howItWorksImage ?? "/placeholder.jpg"}
          alt={`How ${service.title} works`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>

    </section>
  );
}