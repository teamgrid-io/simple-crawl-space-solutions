"use client"
import Image from "next/image";

export default function ImageSection() { 
    return (
        <div className="w-full">
            <Image
                src="/paralax.jpg"
                alt="Crawl Space Image"
                width={1200}
                height={800}
                className="w-full h-auto object-cover shadow-md"
            />
        </div>
    );
}
