"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle, ShoppingBag, Settings, LogOut } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();

  const pathname = usePathname();

  const navItems = [
    { name: "My Dashboard", href: "/account", icon: UserCircle },
    { name: "Order History", href: "/account/orders", icon: ShoppingBag },
    { name: "Settings", href: "/account/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE8] pt-24 pb-16 px-6 lg:px-12 text-[#18324A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 bg-white/50 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1">{t("My Account")}</h2>
              <p className="text-[#2F6672] text-sm">Welcome back, Sarah</p>
            </div>
            
            <nav className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive 
                        ? "bg-[#18324A] text-white shadow-md" 
                        : "text-[#2F6672] hover:bg-white hover:text-[#18324A]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-12 pt-6 border-t border-[#9DB7AE]/20">
              <button className="flex items-center gap-3 px-4 py-2 text-[#E8A48C] hover:text-red-500 transition-colors w-full text-left font-medium">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}
