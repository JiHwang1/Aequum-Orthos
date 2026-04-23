"use client";
import { useLanguage } from "@/components/LanguageContext";


export default function RefundPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-500 text-[#18324A]">
      <h1 className="text-4xl font-bold tracking-tight mb-8">{t("Refund Policy")}</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">{t("Our 90-Day Guarantee")}</h2>
          <p className="text-[#2F6672] leading-relaxed">
            At Aequum Orthos, your comfort and health are our top priority. We believe it takes time for your 
            body to adjust to proper biomechanical support. That's why we offer a risk-free 90-day trial period 
            on all insole purchases.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">{t("Eligibility for Returns")}</h2>
          <div className="bg-[#EEF4F3] rounded-2xl p-6 border border-[#9DB7AE]/20">
            <ul className="list-disc list-inside space-y-2 text-[#2F6672]">
              <li>Items must be returned within 90 days of the delivery date.</li>
              <li>Slight wear from normal testing is completely fine and expected.</li>
              <li>Please include your original order number or receipt in the package.</li>
              <li>Gift cards are non-refundable.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">{t("The Process")}</h2>
          <p className="text-[#2F6672] leading-relaxed mb-4">
            To start a return, please visit our <a href="/contact" className="text-[#E8A48C] hover:underline font-medium">{t("Contact")} Page</a> to 
            request a return authorization. We will provide you with a pre-paid shipping label.
          </p>
          <p className="text-[#2F6672] leading-relaxed">
            Once your return is received and inspected, we will send you an email to notify you. Your refund will 
            be processed, and a credit will automatically be applied to your credit card or original method of payment, 
            within a certain amount of days.
          </p>
        </section>
      </div>
    </div>
  );
}
