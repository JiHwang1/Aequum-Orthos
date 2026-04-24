"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

const galleryImages = [
  { src: "/gallery/asdaczxc.png", alt: "Clinical Product View" },
  { src: "/gallery/gallery-insole.png", alt: "Orthotic Insole Detail" },
  { src: "/gallery/zxcqwesad.png", alt: "Scientific Foot Analysis" },
  { src: "/gallery/zzcaw.png", alt: "Premium Material Texture" },
];

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <header className="mb-16 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-surface-container-highest text-on-surface text-xs font-semibold tracking-[0.05em] uppercase mb-4 font-label ghost-border">
            Visual Experience
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.02em] text-primary mb-6 font-headline">
            {t("Gallery")}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-body">
            Explore the intersection of clinical precision and sensory comfort. A visual testament to our commitment to foot wellness.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden ambient-shadow hover-lift bg-surface-container transition-all duration-700 isolate"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="glass-morphism p-6 rounded-2xl border border-white/10">
                  <p className="text-white font-headline font-bold text-xl tracking-tight">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
