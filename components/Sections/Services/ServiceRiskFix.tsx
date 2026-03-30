import Link from "next/link";
import { ServicePage } from "@/lib/servicesData";
import Image from "next/image";
interface ServiceRiskFixProps {
  service: ServicePage;
}

export default function ServiceRiskFix({ service }: ServiceRiskFixProps) {
  return (
    <section className="bg-[#2E3538] py-20 px-4">
      <div className="max-w-[1248px] mx-auto px-[40px]">
        <div className="grid md:grid-cols-2 gap-12">

          {/* The Risk */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">The Risk</h2>
            <div className="space-y-7">
              {service.risks.map((risk, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Image src={risk.icon} alt={risk.title} width={24} height={24} />
                  <div>
                    <h3 className="font-bold text-white text-[15px] mb-1">
                      {risk.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {risk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Fix */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">The Fix</h2>
            <div className="space-y-7">
              {service.fixes.map((fix, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Image src={fix.icon} alt={fix.title} width={24} height={24} />
                  <div>
                    <h3 className="font-bold text-white text-[15px] mb-1">
                      {fix.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {fix.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
           <Link
          href="/quote"
          className="bg-[#c8922a] hover:bg-[#b07d22] transition-colors text-white text-sm font-semibold px-6 py-3 rounded"
        >
          Get Your FREE Inspection
        </Link>
        </div>

      </div>
    </section>
  );
}