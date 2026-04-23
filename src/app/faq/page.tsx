"use client";

import faqData from "@/data/faq.json";
import { useLanguage } from "@/components/LanguageContext";



export default function FAQPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-surface min-h-screen">
      <section className="bg-surface-container-low pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-[-0.02em] text-on-surface">{t("How can we help?")}</h1>
          <p className="font-body text-lg text-on-surface-variant">Find answers about sizing, shipping, and the science behind the relief.</p>
          <div className="relative max-w-xl mx-auto mt-8">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full pl-12 pr-4 py-4 rounded-full bg-surface border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-label"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            {faqData.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">{category.icon}</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">{category.category}</h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((q, qIdx) => (
                    <details key={qIdx} className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/20 ghost-border overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline font-semibold text-on-surface hover:bg-surface-container-low transition-colors">
                        {q.q}
                        <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="p-6 pt-0 font-body text-on-surface-variant leading-relaxed bg-surface-container-lowest border-t border-outline-variant/10">
                        {q.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-surface-container-high rounded-[2rem] p-8 ghost-border text-center">
              <div className="w-16 h-16 bg-surface rounded-full mx-auto flex items-center justify-center text-primary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Still need help?</h3>
              <p className="font-body text-on-surface-variant mb-8 text-sm">
                Our support team is available Monday through Friday, 9am to 6pm EST.
              </p>
              <div className="space-y-3">
                <button className="w-full py-3.5 rounded-full tactile-gradient text-on-primary font-label text-sm uppercase tracking-wider font-semibold transition-transform hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(0,29,52,0.1)]">
                  Start Live Chat
                </button>
                <button className="w-full py-3.5 rounded-full bg-surface text-on-surface border border-outline-variant/30 font-label text-sm uppercase tracking-wider font-semibold hover:bg-surface-container-low transition-colors">
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
