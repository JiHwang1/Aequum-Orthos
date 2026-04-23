"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollText, ShieldAlert, RefreshCcw } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();

  const pathname = usePathname();

  const links = [
    { name: "Refund Policy", href: "/policies/refund", icon: RefreshCcw },
    { name: "Terms of Service", href: "/policies/terms", icon: ScrollText },
    { name: "Privacy Policy", href: "/policies/privacy", icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE8] pt-24 pb-20 px-6 lg:px-12 text-[#18324A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-2">
            <h2 className="text-sm uppercase tracking-widest text-[#9DB7AE] font-semibold mb-6 px-4">{t("Legal & Policies")}</h2>
            <nav className="space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                      isActive 
                        ? "bg-[#18324A] text-white" 
                        : "text-[#2F6672] hover:bg-white hover:text-[#18324A]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-grow bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white">
          <div className="prose prose-slate max-w-prose">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
