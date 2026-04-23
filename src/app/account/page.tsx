"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Activity, Footprints } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function AccountDashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("Digital Wellness Dashboard")}</h1>
        <p className="text-[#2F6672]">Manage your profile and review your personal comfort analytics.</p>
      </header>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-3xl border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="bg-[#EEF4F3]/50 pb-4">
            <CardTitle className="text-xl flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#9DB7AE]" />
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#2F6672]">Name</p>
                <p className="font-semibold text-lg">Sarah Jenkins</p>
              </div>
              <Separator className="bg-[#9DB7AE]/20" />
              <div>
                <p className="text-sm text-[#2F6672]">Email</p>
                <p className="font-medium">sarah.j@example.com</p>
              </div>
              <Separator className="bg-[#9DB7AE]/20" />
              <Button variant="outline" className="w-full rounded-xl border-[#9DB7AE]/30 text-[#18324A] hover:bg-[#EEF4F3]">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Foot Analysis Recommendation */}
        <Card className="rounded-3xl border-none shadow-sm bg-[#18324A] text-white overflow-hidden relative">
          <div className="absolute top-[-20%] right-[-10%] w-[200px] h-[200px] rounded-full bg-[#E8A48C]/20 blur-3xl" />
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-xl flex items-center gap-2 font-semibold text-white/90">
              <Activity className="w-5 h-5 text-[#E8A48C]" />
              My Foot Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-2">
                <h3 className="text-3xl font-bold">Flat Type</h3>
                <span className="text-sm text-white/70 mb-1">(Low Arch)</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Based on your quiz results from Oct 12, 2026, you require rigid midfoot stabilization to correct pronation.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-4 mb-6 backdrop-blur-sm border border-white/5">
              <p className="text-xs text-white/60 mb-2 uppercase tracking-wider font-semibold">Recommended Match</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8A48C]/20 flex items-center justify-center">
                  <Footprints className="w-5 h-5 text-[#E8A48C]" />
                </div>
                <div>
                  <p className="font-semibold">Aequum Stability Max</p>
                  <p className="text-xs text-white/70">Custom-feel firm support</p>
                </div>
              </div>
            </div>

            <Link href="/products" className="block w-full text-center bg-white text-[#18324A] font-semibold rounded-full py-3 hover:bg-[#EEF4F3] transition-colors">{t("Shop")} Recommended
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
