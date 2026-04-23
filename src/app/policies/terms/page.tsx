"use client";
import { useLanguage } from "@/components/LanguageContext";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-500 text-[#18324A]">
      <h1 className="text-4xl font-bold tracking-tight mb-4">{t("Terms of Service")}</h1>
      <p className="text-[#2F6672] mb-12">Last updated: April 12, 2026</p>
      
      <p className="text-lg leading-relaxed mb-8">
        Welcome to Aequum Orthos. These terms outline the rules and regulations for the use of our website and services.
        By accessing this website, we assume you accept these terms and conditions.
      </p>

      <Accordion className="w-full space-y-4">
        <AccordionItem value="item-1" className="border border-[#9DB7AE]/20 rounded-2xl bg-white px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-[#E8A48C]">
            1. Medical Disclaimer
          </AccordionTrigger>
          <AccordionContent className="text-[#2F6672] text-base leading-relaxed pb-4">
            The products and information provided on this site are not intended to diagnose, treat, cure, or prevent any 
            medical condition. Always seek the advice of your physician or other qualified health provider with any questions 
            you may have regarding a medical condition.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border border-[#9DB7AE]/20 rounded-2xl bg-white px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-[#E8A48C]">
            2. Product Usage
          </AccordionTrigger>
          <AccordionContent className="text-[#2F6672] text-base leading-relaxed pb-4">
            Our insoles are designed for daily wear. However, an adaptation period of 3-7 days is normal. If you experience 
            severe or lasting pain while using our products, discontinue use immediately.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border border-[#9DB7AE]/20 rounded-2xl bg-white px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-[#E8A48C]">
            3. Accuracy of Information
          </AccordionTrigger>
          <AccordionContent className="text-[#2F6672] text-base leading-relaxed pb-4">
            We are not responsible if information made available on this site is not accurate, complete or current. 
            The material is provided for general information only and should not be relied upon as the sole basis for making decisions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border border-[#9DB7AE]/20 rounded-2xl bg-white px-6">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-[#E8A48C]">
            4. User Account Obligations
          </AccordionTrigger>
          <AccordionContent className="text-[#2F6672] text-base leading-relaxed pb-4">
            When tracking your foot analysis on our platform, you are responsible for maintaining the confidentiality 
            of your account and password. We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
