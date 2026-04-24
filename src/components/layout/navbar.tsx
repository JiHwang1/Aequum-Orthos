"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageContext";

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: "/products", label: t('Shop') },
    { href: "/science", label: t('Science') },
    { href: "/reviews", label: t('Reviews') },
    { href: "/gallery", label: t('Gallery') },
    { href: "/quiz", label: t('Quiz') },
    { href: "/faq", label: t('FAQ') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,29,52,0.04)] no-border">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-stone-50 font-headline">
          {t("Aequum Orthos")}
        </Link>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "font-headline font-bold tracking-tighter transition-all duration-300 pb-1",
                    isActive 
                      ? "text-slate-900 dark:text-stone-50 border-b-2 border-slate-900 dark:border-stone-50" 
                      : "text-slate-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-stone-200"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/product/relief-plus" className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full tactile-gradient text-on-primary font-label text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
            {t("Shop Now")}
          </Link>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLang} 
            className="flex items-center gap-1 text-slate-900 dark:text-stone-50 hover:text-slate-500 transition-colors scale-95 active:scale-100 font-bold"
            title="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">{lang}</span>
          </button>

          <Link href="/cart" className="text-slate-900 dark:text-stone-50 hover:text-slate-500 transition-colors scale-95 active:scale-100">
            <ShoppingBag className="w-6 h-6" />
          </Link>
          <Link href="/account" className="text-slate-900 dark:text-stone-50 hover:text-slate-500 transition-colors scale-95 active:scale-100 hidden md:block">
            <User className="w-6 h-6" />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900 dark:text-stone-50">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
