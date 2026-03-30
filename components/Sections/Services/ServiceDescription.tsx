import Image from "next/image";
import { ServicePage } from "@/lib/servicesData";

interface ServiceDescriptionProps {
  service: ServicePage;
}

export default function ServiceDescription({ service }: ServiceDescriptionProps) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1248px] mx-auto px-[40px]">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Image — LEFT side */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={ "/Residential-window.png"}
                alt={`What is ${service?.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text — RIGHT side */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              What Is {service?.title}?
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {service?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}