import { getServiceBySlug, getAllServiceSlugs } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/Sections/Services/ServiceHero";
import ServiceDescription from "@/components/Sections/Services/ServiceDescription";
import ServiceRiskFix from "@/components/Sections/Services/ServiceRiskFix";
import ServiceHowItWorks from "@/components/Sections/Services/ServiceHowitWorks";
import ServicesCTA from "@/components/Sections/Services/ServicesCta";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceDescription service={service} />
      <ServiceRiskFix service={service} />
      <ServiceHowItWorks service={service} />
      <ServicesCTA service={service} />
    </main>
  );
}
