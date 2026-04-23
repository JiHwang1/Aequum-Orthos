"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F4EFE8] text-[#18324A] pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 md:mb-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">{t("We believe support shouldn't")}<br className="hidden md:block" />{t("feel like a compromise.")}</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
          <p className="text-lg md:text-xl text-[#2F6672] leading-relaxed max-w-xl">
            Aequum Orthos was born from a simple observation: clinical orthotics 
            fixed alignment but hurt the feet, while soft cushions felt great but 
            failed to solve the root problem. We engineered a balance.
          </p>
          <div className="flex-1 relative h-64 md:h-96 rounded-3xl overflow-hidden bg-[#EEF4F3]">
            {/* Standard abstract/tactile texture or lifestyle shot. */}
            <Image 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" 
              alt="Comfort and support" 
              fill 
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#18324A] text-white py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F6672] rounded-full blur-[100px] opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-[#9DB7AE] font-semibold mb-6">{t("Our Philosophy")}</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">{t("Clinical Calm")}<br />{t("+ Soft Tech")}</h3>
            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              Our designs strip away the bulky, rigid aesthetic of traditional orthopedics. 
              We use medical-grade TPU and variable density foams, sculpted into forms 
              that look as calming as they feel. It's precise biomechanics hidden inside 
              a product you'll actually want to wear.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-end">
              <span className="text-4xl font-bold text-[#E8A48C] mb-4">90%</span>
              <p className="text-white/80 font-medium">Of our beta testers reported pain reduction on day one.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-end mt-12">
              <span className="text-4xl font-bold text-[#9DB7AE] mb-4">3</span>
              <p className="text-white/80 font-medium">Signature arch profiles designed by podiatrists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder / Closing */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto py-24 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">{t("Ready to step differently?")}</h2>
        <p className="text-lg text-[#2F6672] mb-12">
          Stop choosing between feeling supported and feeling comfortable. 
          Discover the insole tailored exactly to your foot's biomechanics in under a minute.
        </p>
        <Link href="/quiz">
          <Button className="bg-[#18324A] hover:bg-[#18324A]/90 text-white rounded-full py-6 px-10 text-lg shadow-md transition-transform hover:-translate-y-1">{t("Start Your Foot Analysis")}<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
