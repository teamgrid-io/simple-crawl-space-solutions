import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DangersSection from "@/components/DangersSection";
import SolutionsSection from "@/components/SolutionsSection";
import ImageSection from "@/components/ImageSection";
import SimpleShieldSection from "@/components/SimpleSheild";
import SolutionForEveryNeedsSection from "@/components/SolutionForEveryNeeds";
import InstallationProcessSection from "@/components/InstallationProcess";
import SecureHomeSection from "@/components/SecureHomeCta";
import Footer from "@/components/Footer";
export default function Home() {
  return (
      <div className="">
        <Navbar />
        <HeroSection />
        <DangersSection />
        <SolutionsSection />
        <ImageSection />
        <SimpleShieldSection />
        <SolutionForEveryNeedsSection />
        <InstallationProcessSection />
        <SecureHomeSection />
        <Footer />
      </div>
  );
}
