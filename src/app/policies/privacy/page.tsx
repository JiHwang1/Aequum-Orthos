"use client";
import { useLanguage } from "@/components/LanguageContext";


export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-500 text-[#18324A] bg-white rounded-3xl p-8 border border-[#9DB7AE]/20">
      <h1 className="text-4xl font-bold tracking-tight mb-4">{t("Privacy Policy")}</h1>
      <p className="text-[#2F6672] mb-12">Last updated: April 12, 2026</p>

      <div className="space-y-8 text-[#2F6672] leading-relaxed">
        <p className="text-lg text-[#18324A] font-medium">
          Aequum Orthos respects your privacy and is committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data.
        </p>

        <div>
          <h2 className="text-xl font-bold text-[#18324A] mb-3">1. Information We Collect</h2>
          <p className="mb-4">
            We collect data necessary to provide you with the best orthotic experience. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Identity Data:</strong> First name, last name.</li>
            <li><strong>{t("Contact")} Data:</strong>{t("Shipping")} address, email address, phone number.</li>
            <li><strong>Health-related Data:</strong>{t("Quiz")} responses regarding foot shape, arch type, and discomfort areas. This helps us generate your "Digital Wellness Dashboard".</li>
            <li><strong>Financial Data:</strong> Processed securely via Stripe; we do not store full credit card details.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#18324A] mb-3">2. How We Use Your Data</h2>
          <p className="mb-2">We use your data strictly to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Process and deliver your order.</li>
            <li>Provide personalized insole recommendations based on your quiz results.</li>
            <li>Improve our website, products/services, marketing, and customer relationships.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#18324A] mb-3">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally 
            lost, used, or accessed in an unauthorized way, altered, or disclosed. Access is limited to employees 
            and partners who have a business need to know.
          </p>
        </div>
      </div>
    </div>
  );
}
