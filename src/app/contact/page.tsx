"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Valid email is required."),
  topic: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { t } = useLanguage();

  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccess(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#EEF4F3] text-[#18324A] pt-24 pb-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t("How can we help?")}</h1>
          <p className="text-[#2F6672] text-lg max-w-xl">
            Whether you have a question about our 90-day guarantee or need help finding your perfect fit, our support team is ready.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Form */}
          <Card className="flex-grow p-8 md:p-12 rounded-3xl border-none shadow-sm bg-white/70 backdrop-blur-sm w-full">
            {success ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-[#EEF4F3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-[#9DB7AE]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t("Message Sent")}</h2>
                <p className="text-[#2F6672] mb-8">We've received your message and will get back to you within 24 hours.</p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="rounded-full border-[#9DB7AE] text-[#18324A] border-2">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#2F6672]">{t("Your Name")}</Label>
                    <Input id="name" {...register("name")} className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2F6672]">{t("Email Address")}</Label>
                    <Input id="email" type="email" {...register("email")} className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-[#2F6672]">{t("Topic (Optional)")}</Label>
                  <Input id="topic" placeholder="e.g. Returns, Sizing" {...register("topic")} className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#2F6672]">{t("Message")}</Label>
                  <textarea 
                    id="message" 
                    {...register("message")} 
                    className="flex min-h-[150px] w-full rounded-xl border border-[#9DB7AE]/30 bg-[#F4EFE8]/30 px-3 py-4 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9DB7AE] resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full md:w-auto px-10 bg-[#18324A] hover:bg-[#18324A]/90 text-white rounded-full py-6 shadow-md transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Card>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
            <Card className="p-8 rounded-3xl border border-[#9DB7AE]/20 shadow-sm bg-white">
              <MessageCircle className="w-8 h-8 text-[#E8A48C] mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("Check the FAQ")}</h3>
              <p className="text-sm text-[#2F6672] mb-6">
                Most questions about shipping, returns, and our 90-day guarantee are answered there.
              </p>
              <Link href="/faq" className="text-[#18324A] font-semibold flex items-center hover:underline">
                View Frequently Asked Questions <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            <Card className="p-8 rounded-3xl border border-[#9DB7AE]/20 shadow-sm bg-white">
               <h3 className="text-lg font-bold mb-4">{t("Response Time")}</h3>
               <p className="text-sm text-[#2F6672]">
                 Our clinical support team typically replies within <strong>24 hours</strong> during standard business days.
               </p>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
