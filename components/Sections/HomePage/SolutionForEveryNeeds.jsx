import Image from "next/image";

const audiences = [
  {
    title: "Homeowners",
    image: "/frameless.png",
    desc: "Upgrading your crawl space defends the biggest investment you'll ever make—your home.",
  },
  {
    title: "Property Managers",
    image: "/framed-shower.png",
    desc: "Solving problems early prevents costly repairs, tenant complaints, and emergency disruptions.",
  },
  {
    title: "Real Estate Agents",
    image: "/semi-frameless.png",
    desc: "Fixing crawl space issues improves indoor air, lowers energy costs, and protects home value.",
  },
];

export default function SolutionsForEveryNeedSection() {
  return (
    <section className="bg-white my-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Crawl Space Solutions for Every Need
          </h2>
        </div>

        {/* 3-col cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {audiences.map((item) => (
            <div key={item.title} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <h3 className="font-bold text-gray-900 text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}