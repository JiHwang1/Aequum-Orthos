"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import { useLanguage } from "@/components/LanguageContext";
import { ImageModal } from "@/components/ui/image-modal";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const product = products.find(p => p.slug === params.slug) || products[0];

  return (
    <div className="w-full bg-surface">
      <section className="pt-20 lg:pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm font-label text-on-surface-variant hover:text-primary transition-colors mb-12">
            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>{t("Back")} to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div 
                className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container-low ghost-border cursor-pointer"
                onClick={() => setSelectedImage(product.images[0])}
              >
                <Image src={product.images[0]} alt={product.name} fill className="object-cover hover:scale-105 transition-transform duration-700 ease-out" priority/>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface hover:text-secondary transition-colors z-10">
                  <span className="material-symbols-outlined">zoom_in</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {product.images.slice(1).map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer ghost-border opacity-70 hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image src={img} alt={`${product.name} detail`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex text-[#F5B041]">
                  {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <span className="font-label text-sm text-on-surface-variant underline decoration-outline-variant underline-offset-4 cursor-pointer hover:text-primary">
                  {product.rating} ({product.reviews} Reviews)
                </span>
              </div>
              <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-on-surface mb-4">{product.name}</h1>
              <p className="font-headline text-2xl font-semibold text-secondary mb-8">${product.price}</p>
              
              <div className="space-y-6 mb-10">
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm font-label text-on-surface"><span className="material-symbols-outlined text-secondary mr-3 text-lg">check</span>Medical-grade dynamic arch support</li>
                  <li className="flex items-center text-sm font-label text-on-surface"><span className="material-symbols-outlined text-secondary mr-3 text-lg">check</span>Targeted Aeq-Mass™ nodes for plantar relief</li>
                  <li className="flex items-center text-sm font-label text-on-surface"><span className="material-symbols-outlined text-secondary mr-3 text-lg">check</span>High-rebound shock absorbing heel pad</li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-surface-container-low rounded-2xl ghost-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-headline font-bold text-on-surface">{t("Select Size")}</span>
                  <button className="text-secondary text-sm font-label underline underline-offset-4 hover:text-primary transition-colors">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="py-3 rounded-xl border border-outline-variant bg-surface text-on-surface font-label hover:border-primary hover:bg-surface-container-high transition-colors focus:bg-primary focus:text-on-primary focus:border-primary outline-none">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 rounded-full tactile-gradient text-on-primary font-label text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(0,29,52,0.15)] hover:shadow-[0_15px_40px_rgba(0,29,52,0.2)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-xl">shopping_cart</span>{t("Add to Cart")} — ${product.price}
              </button>
            </div>
          </div>
        </div>
      </section>

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage || ""} 
        imageAlt={product.name} 
      />
    </div>
  );
}
