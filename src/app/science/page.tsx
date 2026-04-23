"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";



export default function SciencePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="w-full bg-surface-container-low pt-24 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8 z-10">
            <span className="font-label text-sm uppercase tracking-[0.05em] text-secondary">{t("Clinical Precision")}</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.02em] text-on-surface leading-tight">
              The Science of<br/>Sensory Support.
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Moving beyond rigid plastic arches, we engineered a dynamic foundation that communicates with your nervous system.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 tactile-gradient text-on-primary rounded-full font-label text-sm uppercase tracking-[0.05em] shadow-[0_10px_30px_rgba(0,29,52,0.15)] hover:shadow-[0_15px_40px_rgba(0,29,52,0.2)] transition-shadow duration-300">
                Explore the Tech
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[60px] transform -translate-y-4 scale-105 rounded-full"></div>
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden z-10">
              <Image 
                src="/science/cross_section.png" 
                alt="Insole Cross Section" 
                fill
                className="object-cover" 
              />
            </div>
            
            <div className="absolute top-1/4 -left-8 bg-surface-container-lowest/80 backdrop-blur-xl p-4 rounded-xl z-20 border border-outline-variant/15 shadow-[0_10px_30px_rgba(0,29,52,0.06)] hidden sm:block">
              <p className="font-label text-xs uppercase tracking-wider text-secondary mb-1">Density Layer</p>
              <p className="font-headline text-xl font-bold text-on-surface">1.2mm</p>
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-surface-container-lowest/80 backdrop-blur-xl p-4 rounded-xl z-20 border border-outline-variant/15 shadow-[0_10px_30px_rgba(0,29,52,0.06)] hidden sm:block">
              <p className="font-label text-xs uppercase tracking-wider text-secondary mb-1">Impact Return</p>
              <p className="font-headline text-xl font-bold text-on-surface">84%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-[-0.02em] text-on-surface">Three Pillars of Comfort</h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">A holistic approach to foot biomechanics, addressing alignment, pressure, and neurological feedback.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col h-full hover:bg-surface-container-high transition-colors duration-300">
              <div className="mb-8 rounded-lg overflow-hidden relative pb-[75%]">
                <Image src="/science/arch_alignment.png" alt="Arch Alignment" fill className="object-cover mix-blend-multiply opacity-90" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">1. Arch Correction</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Dynamic medial support that resists collapse without imposing rigid, painful restrictions on natural gait mechanics.</p>
            </div>

            <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col h-full transform md:-translate-y-8 shadow-[0_20px_50px_rgba(0,29,52,0.04)]">
              <div className="mb-8 rounded-lg overflow-hidden relative pb-[75%] bg-surface">
                <Image src="/science/pressure_map.png" alt="Pressure Map" fill className="object-cover opacity-80" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">2. Pressure Redistribution</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Micro-cellular foam structures engineered to disperse peak forces away from the heel and metatarsal heads.</p>
            </div>

            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col h-full hover:bg-surface-container-high transition-colors duration-300">
              <div className="mb-8 rounded-lg overflow-hidden relative pb-[75%]">
                <Image src="/science/sensory_texture.png" alt="Sensory Texture" fill className="object-cover mix-blend-multiply opacity-90" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">3. Sensory Feedback</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Proprietary top-cover textures designed to stimulate plantar nerves, enhancing proprioception and balance awareness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-surface rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border border-outline-variant/15">
            <div className="lg:w-1/2 space-y-8">
              <span className="font-label text-sm uppercase tracking-[0.05em] text-tertiary-container bg-tertiary-fixed px-3 py-1 rounded-full">Biomechanics</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-[-0.02em] text-on-surface">Why Flat Feet Need More.</h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Overpronation isn't just a structural issue; it's an energy leak. When the arch collapses inward, it places abnormal torque on the knee and hip joints, leading to premature fatigue and repetitive strain.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body text-on-surface">Stabilizes the subtalar joint.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body text-on-surface">Aligns the kinetic chain.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body text-on-surface">Reduces energy expenditure during gait.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full relative aspect-[4/3]">
              <Image src="/science/pronation_info.png" alt="Pronation Infographic" fill className="rounded-xl shadow-[0_20px_50px_rgba(0,29,52,0.06)] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-md mx-auto text-center space-y-8">
          <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>article</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface">The Impact of Proprioceptive Feedback on Foot Health</h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            Read our latest clinical summary detailing how targeted plantar stimulation can improve postural stability and reduce perceived fatigue in subjects with pes planus.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-3 bg-surface-container-highest text-on-surface rounded-full font-label text-sm uppercase tracking-[0.05em] hover:bg-surface-variant transition-colors duration-300 w-full sm:w-auto">
              Read Summary
            </button>
            <button className="px-8 py-3 bg-transparent text-secondary border border-secondary/30 rounded-full font-label text-sm uppercase tracking-[0.05em] hover:bg-secondary/5 transition-colors duration-300 w-full sm:w-auto">
              Download PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
