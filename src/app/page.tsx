"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-surface-container-highest text-on-surface text-xs font-semibold tracking-[0.05em] uppercase mb-8 font-label ghost-border">
                {t("Clinical Precision")}
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.02em] text-primary mb-6 font-headline leading-tight">
                {t("Precision Support. Sensory Comfort.")}
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant mb-10 font-body leading-relaxed max-w-lg">
                The first orthopedic insole designed for flat feet with integrated massage-relief technology. Engineered for tactile recovery with every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product/relief-plus" className="tactile-gradient text-on-primary px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:opacity-90 transition-opacity text-center inline-flex justify-center items-center gap-2">
                  {t("Shop Now")}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link href="/quiz" className="px-8 py-4 rounded-full bg-surface-container-highest text-on-surface text-base font-medium hover:bg-surface-container-high transition-colors text-center inline-flex justify-center items-center gap-2">
                  {t("Quiz")}
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden ambient-shadow isolate">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Da4SRGURSlBe1QT82DZ_dwGo2O6F7EHIT_h8ujnGdPFWbcvM2ewrfMVMNU_vilTs74OdxGqlk8SuMDNO4aQd4snLHtlE_ZKm_jGd2-8ZalzOCz9zs4JGPbaZfL5x3ey7JvwxmLuBiMJN80OOs9fDVqcI7vZEqJyqq8T83wetIgEf8K8OqVAw9OcqaW-luoWrlgL6Jt9u3Tmy-2U00XRKEuFfdz3eB48teSrktzU4WpFhhMnGUR1DMLfiYJaYoMAaw4N_Iln_ldA"
                alt="Premium orthotic massage insole resting on a smooth marble surface, soft morning light, clinical yet calming aesthetic"
                fill
                className="absolute inset-0 object-cover z-0"
                priority
              />
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl z-10 ghost-border flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-1 font-label">Core Tech</p>
                  <p className="text-lg font-semibold text-primary font-headline">Aeq-Mass™ Nodes</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">waves</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-primary mb-6 font-headline">Clinical Authority. Tactile Relief.</h2>
            <p className="text-lg text-on-surface-variant font-body">We discarded the sterile templates to build a support system that feels as good as it functions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-2xl p-8 ghost-border hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-8">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-headline">Dynamic Arch Support</h3>
              <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                Adaptive structural contouring designed specifically for flat feet, ensuring neutral alignment without rigid discomfort.
              </p>
            </div>
            
            <div className="bg-surface rounded-2xl p-8 ghost-border hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-8">
                <span className="material-symbols-outlined text-3xl">target</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-headline">Targeted Pressure Relief</h3>
              <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                Micro-calibrated zones distribute weight evenly, reducing focal points of stress during extended standing or walking.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 ghost-border hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="h-14 w-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-8 relative z-10">
                <span className="material-symbols-outlined text-3xl">spa</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-headline relative z-10">Sensory Massage Comfort</h3>
              <p className="text-on-surface-variant font-body leading-relaxed text-sm relative z-10">
                Integrated textural nodes provide passive stimulation to the plantar fascia, aiding recovery with every step.
              </p>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-tertiary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
