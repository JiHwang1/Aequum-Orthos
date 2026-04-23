"use client";

import Image from "next/image";
import reviews from "@/data/reviews.json";
import { useLanguage } from "@/components/LanguageContext";



export default function ReviewsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-surface min-h-screen pt-20 lg:pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="font-label text-sm uppercase tracking-[0.05em] text-secondary ghost-border px-3 py-1 bg-surface-container-highest rounded-full">Social Proof</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.02em] text-on-surface">The consensus is relief.</h1>
            <p className="font-body text-xl text-on-surface-variant max-w-lg mx-auto md:mx-0">Based on thousands of clinical trials and everyday wearers who refused to settle for standard arch pain.</p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div className="flex max-w-[120px]">
                {reviews.slice(0, 3).map((r, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-surface overflow-hidden relative ${i > 0 ? '-ml-4' : ''}`}>
                    <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#F5B041] mb-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold">4.8/5.0 from 1,240 reviews</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full max-w-md mx-auto">
            <div className="bg-surface-container-low rounded-3xl p-8 ghost-border">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-6">Rating Breakdown</h3>
              <div className="space-y-4">
                {[
                  { stars: 5, pct: 86 },
                  { stars: 4, pct: 10 },
                  { stars: 3, pct: 3 },
                  { stars: 2, pct: 1 },
                  { stars: 1, pct: 0 },
                ].map(row => (
                  <div key={row.stars} className="flex items-center gap-4 text-sm font-label">
                    <span className="w-12 text-on-surface-variant">{row.stars} Stars</span>
                    <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: `${row.pct}%` }}></div>
                    </div>
                    <span className="w-8 text-right text-on-surface-variant">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-24 bg-surface-container-lowest py-16 ghost-border border-l-0 border-r-0">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <h3 className="font-headline font-bold text-outline uppercase tracking-widest text-sm">Trusted By</h3>
           {/* Dummy logos */}
           <div className="font-headline font-black text-2xl tracking-tighter">HealthLine</div>
           <div className="font-headline font-black text-2xl tracking-tighter">Medical Today</div>
           <div className="font-headline font-black text-2xl tracking-tighter">Podiatry Daily</div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
             <div key={r.id} className="bg-surface-container-lowest rounded-2xl p-8 ghost-border hover:shadow-[0_20px_50px_rgba(0,29,52,0.06)] transition-all duration-300 flex flex-col">
               <div className="flex justify-between items-start mb-6">
                 <div className="flex text-[#F5B041]">
                   {[...Array(r.rating)].map((_, idx) => <span key={idx} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                 </div>
                 <span className="font-label text-xs text-outline">{r.date}</span>
               </div>
               <h4 className="font-headline text-lg font-bold text-on-surface mb-3">{r.title}</h4>
               <p className="font-body text-on-surface-variant flex-1 italic mb-8 relative z-10 before:content-['\201C'] before:absolute before:-left-3 before:-top-2 before:text-4xl before:text-outline/20">
                 {r.content}
               </p>
               <div className="flex items-center gap-3 pt-6 border-t border-outline-variant/10">
                 <div className="w-10 h-10 rounded-full relative overflow-hidden bg-surface-container-high">
                   <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                 </div>
                 <div>
                   <p className="font-label text-sm font-bold text-on-surface">{r.name}</p>
                   {r.verified && <p className="font-label text-[10px] uppercase tracking-wider text-secondary flex items-center"><span className="material-symbols-outlined text-[12px] mr-1">verified</span> Verified Buyer</p>}
                 </div>
               </div>
             </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mt-32">
        <div className="max-w-4xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden isolate">
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVHIDvsHQ9wovlANIIC5kqpmhv9YV8LY3090v_GwqyBM0dRgvftNkgKHWNMQ8TFNjrKjnGOiqMKZJV1YlZ4fFilu6t59RGiTfhfzLcbzpW9Znh38nH948KLs4ZW-GnMqRHQXCby4x3rT4kv6P3LXkz3doTnDI6vQ4NYtDXQ-5_H3eyy_0T_f4U5V692BskRceZLuA3MMRqUBuZi9HcmmZfnN2hfl10YoB-9cx2KHC6h5Ylzpn84u8I0o-m5RKCDPGLnizr4aRWy8c')] bg-cover bg-center opacity-10 mix-blend-overlay z-0"></div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-primary mb-6 relative z-10">Ready to feel the relief?</h2>
          <p className="font-body text-primary-fixed mb-10 max-w-lg mx-auto relative z-10">Join thousands of others who have stepped into a more comfortable life. Backed by our 90-day Comfort Guarantee.</p>
          <button className="px-8 py-4 bg-surface text-primary rounded-full font-label text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300 relative z-10">{t("Shop")} Aequum Orthos
          </button>
        </div>
      </section>
    </div>
  );
}
