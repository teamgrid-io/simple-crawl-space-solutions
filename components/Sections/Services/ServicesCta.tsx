"use client";
import Image from "next/image";
import Link from "next/link";
import { ServicePage } from "@/lib/servicesData";

interface ServicesCTAProps {
  service: ServicePage;
}

export default function ServicesCTA({ service }: ServicesCTAProps) {
  // Create dynamic CTA text based on service
  const ctaMessages: Record<string, { title: string; description: string }> = {
    encapsulation: {
      title: "Secure Your Home's Future With a 10-Year Warranty",
      description:
        "Crawl space encapsulation seals out moisture, mold, and pests. Taking care of it today stops expensive damage tomorrow. With a 10-year warranty, that choice comes with confidence.",
    },
    "water-management": {
      title: "Protect Your Foundation From Water Damage",
      description:
        "Advanced water management systems keep groundwater out and your foundation strong. Don't wait for flooding or structural problems. Get protected today with our proven solutions.",
    },
    dehumidification: {
      title: "Breathe Easier With Perfect Humidity Control",
      description:
        "A dry crawl space means a healthy home. Our dehumidification systems prevent mold, protect wood, and improve air quality throughout. Start protecting your family today.",
    },
  };

  const cta = ctaMessages[service.slug] || ctaMessages.encapsulation;

  return (
    <section className="relative bg-white overflow-hidden py-20 px-4">
      {/* Decorative leaf shapes */}
      <div className="absolute left-0 top-0 h-full w-64 pointer-events-none select-none">
        <Image
          src="/Vector.png"
          alt="Decorative Leaf"
          width={200}
          height={200}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-start pl-4 md:pl-24">
        <h2 className="text-[#3A5E5E] text-3xl md:text-4xl font-bold leading-tight max-w-[600px] mb-5">
          {cta.title}
        </h2>
        <p className="text-gray-500 text-sm md:text-[15px] max-w-[610px] leading-relaxed mb-8">
          {cta.description}
        </p>
        <Link
          href="/quote"
          className="bg-[#c8922a] hover:bg-[#b07d22] transition-colors text-white text-sm font-semibold px-6 py-3 rounded"
        >
          Get Your FREE Inspection
        </Link>
      </div>
    </section>
  );
}
