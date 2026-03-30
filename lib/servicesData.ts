export interface ServicePage {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  description: string;
  risks: {
    icon: string;
    title: string;
    description: string;
  }[];
  fixes: {
    icon: string;
    title: string;
    description: string;
  }[];
  steps: string[];
  howItWorksImage: string;
}

export const servicesData: Record<string, ServicePage> = {
  encapsulation: {
    slug: "encapsulation",
    title: "Crawl Space Encapsulation",
    heroTitle: "CRAWL SPACE ENCAPSULATION",
    heroSubtitle:
      "Support better air quality, lower energy costs, and greater comfort upstairs with a sealed crawl space.",
    heroImage: "/house.png",
    description:
      "Crawl space encapsulation wraps the area under a home to block moisture, air, and pests. It uses a thick vapor barrier on floors and foundation walls, plus waterproofing and proper ventilation control. This turns a damp space into a dry and clean zone that fights mold, rot, and energy waste.",
    risks: [
      {
        icon: "/crossIcon.svg",
        title: "Constant Musty Smells",
        description:
          "Dampness creates a pervasive musty smell that typically upstairs and makes your home feel unhealthy.",
      },
      {
        icon: "/crossIcon.svg",
        title: "Rising Allergy Flare-Ups",
        description:
          "Unfiltered air from the crawl space carrying mold spores, which trigger frequent allergen attacks on every family members.",
      },
      {
        icon: "/crossIcon.svg",
        title: "Extensive Wood Rot Repairs",
        description:
          "Wet conditions on wooden beams and supports. This leads to costly replacements and ongoing floors.",
      },
    ],
    fixes: [
      {
        icon: "/check.svg",
        title: "Eliminate Lingering Odors",
        description:
          "Seal the crawl space with vapor barriers and use a dehumidifier to remove the odor altogether.",
      },
      {
        icon: "/check.svg",
        title: "Block Allergen Sources",
        description:
          "Trap and filter the air, stopping the mold spores and allergens infiltrating your home.",
      },
      {
        icon: "/check.svg",
        title: "Protect Wood from Decay",
        description:
          "Apply moisture-proof barriers and repair wiring to preserve wood. This helps you avoid major repairs.",
      },
    ],
    steps: [
      "We inspect your crawl space to assess moisture levels, mold, structural damage, and ventilation issues.",
      "We prepare the space by removing debris, damaged insulation, and installing support systems if needed.",
      "We install a thick vapor barrier on all floors and walls to block moisture from entering your home.",
      "We seal all air leaks and cracks to prevent outside air and humidity from infiltrating the space.",
      "We install a dehumidifier and ventilation system to maintain optimal humidity levels year-round.",
      "We conduct a final inspection and walkthrough to ensure everything is working properly and your home is protected.",
    ],
    howItWorksImage: "/Residential-window.png",
  },
  "water-management": {
    slug: "water-management",
    title: "Crawl Space Water Management System",
    heroTitle: "CRAWL SPACE WATER MANAGEMENT",
    heroSubtitle:
      "Stop groundwater seepage with advanced drainage systems and sump pump protection.",
    heroImage: "/house.png",
    description:
      "Our water management systems redirect groundwater away from your crawl space using perimeter drainage, interior sumps, and high-capacity pumps. We install systems that prevent flooding, standing water, and long-term foundation damage.",
    risks: [
      {
        icon: "/crossIcon.svg",
        title: "Water Pooling Under Foundation",
        description:
          "Standing water weakens the foundation and leads to expensive repairs and structural failure.",
      },
      {
        icon: "/crossIcon.svg",
        title: "Mold Growth from Moisture",
        description:
          "Excess humidity creates a perfect environment for mold, affecting your family's health.",
      },
      {
        icon: "/crossIcon.svg",
        title: "Flooded Crawl Spaces",
        description:
          "Heavy rain or rising groundwater can flood your crawl space, damaging insulation and structural components.",
      },
    ],
    fixes: [
      {
        icon: "/check.svg",
        title: "Advanced Drainage Systems",
        description:
          "Install perimeter drainage and interior sumps to redirect water away from your home.",
      },
      {
        icon: "/check.svg",
        title: "Sump Pump Protection",
        description:
          "High-capacity pumps with battery backup ensure continuous protection during heavy rain.",
      },
      {
        icon: "/check.svg",
        title: "Prevent Foundation Damage",
        description:
          "Keep water away from the foundation to maintain structural integrity and avoid costly repairs.",
      },
    ],
    steps: [
      "We perform a comprehensive inspection to identify water sources, seepage points, and drainage problems in your crawl space.",
      "We assess the grading and drainage around your home's foundation to determine water flow patterns.",
      "We install interior drain tile along the foundation perimeter to collect and redirect groundwater.",
      "We place a high-capacity sump pump system with battery backup to automatically remove water from the crawl space.",
      "We install a vapor barrier to minimize moisture evaporation and work with the drainage system.",
      "We test the system to ensure it's operating properly and protecting your foundation from water damage.",
    ],
    howItWorksImage: "/Residential-window-1.png",
  },
  dehumidification: {
    slug: "dehumidification",
    title: "Crawl Space Dehumidification",
    heroTitle: "CRAWL SPACE DEHUMIDIFICATION",
    heroSubtitle:
      "Control moisture levels and protect your home from mold, wood rot, and poor air quality.",
    heroImage: "/house.png",
    description:
      "Our dehumidification systems extract excess moisture from the crawl space, maintaining optimal humidity levels. Combined with vapor barriers and proper ventilation, these systems protect wood structures, prevent mold growth, and improve air quality throughout your home.",
    risks: [
      {
        icon: "/crossIcon.svg",
        title: "Mold and Mildew Growth",
        description:
          "High humidity levels create ideal conditions for mold and mildew to spread rapidly.",
      },
      {
        icon: "/crossIcon.svg",
        title: "Wood Structural Damage",
        description:
          "Constant moisture causes wood beams and joists to weaken, warp, and eventually fail.",
      },
      {
        icon: "/crossIcon.svg",
        title: "Poor Indoor Air Quality",
        description:
          "Moisture and mold spores rise to upper levels, affecting residents' health and comfort.",
      },
    ],
    fixes: [
      {
        icon: "/check.svg",
        title: "Humidity Control",
        description:
          "Advanced dehumidifiers maintain optimal moisture levels, preventing mold and mildew.",
      },
      {
        icon: "/check.svg",
        title: "Protect Wood Structures",
        description:
          "Keep humidity low to preserve wood integrity and prevent costly structural repairs.",
      },
      {
        icon: "/check.svg",
        title: "Improve Air Quality",
        description:
          "Remove moisture and contaminants to ensure cleaner, healthier air throughout your home.",
      },
    ],
    steps: [
      "We measure humidity levels and moisture content in your crawl space to assess the severity of the problem.",
      "We install a vapor barrier on floors and walls to reduce moisture evaporation and improve system effectiveness.",
      "We select and install an appropriately-sized dehumidifier based on your crawl space's dimensions and humidity levels.",
      "We connect the dehumidifier to a condensate pump or drainage system for continuous water removal.",
      "We ensure proper ventilation and air circulation to support the dehumidifier's performance.",
      "We monitor the system and adjust humidity control settings to maintain optimal indoor air quality for your home.",
    ],
    howItWorksImage: "/framed-shower.png",
  },
};

export function getServiceBySlug(slug: string): ServicePage | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
