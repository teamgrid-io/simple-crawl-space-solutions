import HeroSection from "@/components/Sections/HomePage/HeroSection";
import DangersSection from "@/components/Sections/HomePage/DangersSection";
import SolutionsSection from "@/components/Sections/HomePage/SolutionsSection";
import ImageSection from "@/components/Sections/HomePage/ImageSection";
import SimpleShieldSection from "@/components/Sections/HomePage/SimpleSheild";
import SolutionForEveryNeedsSection from "@/components/Sections/HomePage/SolutionForEveryNeeds";
import InstallationProcessSection from "@/components/Sections/HomePage/InstallationProcess";
import SecureHomeSection from "@/components/Sections/HomePage/SecureHomeCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DangersSection />
      <SolutionsSection />
      <ImageSection />
      <SimpleShieldSection />
      <SolutionForEveryNeedsSection />
      <InstallationProcessSection />
      <SecureHomeSection />
    </>
  );
}
