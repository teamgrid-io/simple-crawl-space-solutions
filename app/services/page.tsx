import { redirect } from "next/navigation";
import { getAllServiceSlugs } from "@/lib/servicesData";

export default async function ServicesPage() {
  const slugs = getAllServiceSlugs();
  
  // Redirect to the first service by default
  if (slugs.length > 0) {
    redirect(`/services/${slugs[0]}`);
  }
  
  // Fallback (should not happen if services exist)
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>No services available</p>
    </div>
  );
}
