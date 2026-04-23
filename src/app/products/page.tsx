"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F4EFE8] pt-24 pb-16 px-6 lg:px-12 text-[#18324A]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Relief Collection
            </h1>
            <p className="text-[#2F6672] text-lg max-w-2xl">
              Precision support meets sensory comfort. Find the perfect insole for your daily life.
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-[#2F6672] text-[#2F6672] rounded-full px-4 py-1">Arch Support</Badge>
            <Badge variant="outline" className="border-[#2F6672] text-[#2F6672] rounded-full px-4 py-1">Sensory Massage</Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id}>
              <Card className="rounded-2xl overflow-hidden border border-[#9DB7AE]/30 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 bg-white group cursor-pointer h-full flex flex-col">
                <div className="relative h-64 bg-[#EEF4F3] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.rating > 4.5 && (
                    <Badge className="absolute top-4 left-4 bg-[#18324A] text-white hover:bg-[#18324A]">
                      Top Rated
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <span className="text-lg font-medium">${product.price}</span>
                  </div>
                  <p className="text-sm text-[#2F6672] line-clamp-2 mb-6 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[#E8A48C] font-medium group-hover:block transition-colors">{t("Shop Now")}<ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
          
          {/* Quiz Promo Card */}
          <Link href="/quiz">
            <Card className="rounded-2xl h-full border-dashed border-2 border-[#9DB7AE] bg-[#EEF4F3]/50 flex flex-col items-center justify-center p-8 hover:bg-[#EEF4F3] transition-colors cursor-pointer text-center group">
              <div className="w-16 h-16 rounded-full bg-[#E8A48C]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 text-[#E8A48C]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Not sure which to choose?</h3>
              <p className="text-[#2F6672] text-sm">
                Take our 1-minute foot analysis quiz to find your perfect match.
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
