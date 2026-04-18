import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full rounded-t-[2.5rem] mt-20 tonal-shift-bg flat-no-shadows bg-stone-100 dark:bg-slate-900 text-slate-900 dark:text-stone-100 font-inter text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-20 py-16 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-manrope font-black text-slate-900 dark:text-stone-50 mb-4">Aequum Orthos</h4>
            <p className="text-slate-500 dark:text-stone-400 font-inter text-sm">
              Precision Wellness for Every Step.
            </p>
          </div>
          <p className="text-slate-500 dark:text-stone-400 font-inter text-sm mt-8">
            © 2024 Aequum Orthos. Precision Wellness for Every Step.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 dark:text-stone-50 mb-2 font-label">Explore</h4>
            <Link href="/" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Shop Collection</Link>
            <Link href="/science" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Science Deep-Dive</Link>
            <Link href="/quiz" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Fit Quiz</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 dark:text-stone-50 mb-2 font-label">Support</h4>
            <Link href="/faq" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">FAQ</Link>
            <Link href="#" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Shipping</Link>
            <Link href="#" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Contact Us</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 dark:text-stone-50 mb-2 font-label">Legal</h4>
            <Link href="#" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 dark:text-stone-400 font-inter text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline decoration-stone-300 underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
