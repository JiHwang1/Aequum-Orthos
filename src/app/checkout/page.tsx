"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  city: z.string().min(1, "City is required."),
  zipCode: z.string().min(5, "Valid zip code is required."),
  cardNumber: z.string().min(16, "Card number must be 16 digits.").max(16),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "MM/YY format required."),
  cvc: z.string().length(3, "CVC must be 3 digits.")
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { t } = useLanguage();

  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Order submitted:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F4EFE8] flex items-center justify-center p-6 text-[#18324A]">
        <Card className="max-w-md w-full p-12 text-center rounded-3xl border-none shadow-lg bg-white">
          <div className="w-20 h-20 bg-[#EEF4F3] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#9DB7AE]" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed</h1>
          <p className="text-[#2F6672] mb-8 leading-relaxed">
            Thank you for choosing Aequum Orthos. Your journey to clinical calm and sensory comfort begins now.
          </p>
          <Button onClick={() => window.location.href = "/"} className="w-full bg-[#18324A] hover:bg-[#18324A]/90 rounded-full py-6">
            Return to Homepage
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4EFE8] pt-24 pb-24 px-6 lg:px-12 text-[#18324A]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Form Section */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold tracking-tight mb-8">{t("Secure Checkout")}</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Contact Info */}
            <Card className="rounded-2xl border-none shadow-sm p-6 bg-white space-y-4">
              <h2 className="text-xl font-semibold mb-4">{t("1. Contact Information")}</h2>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#2F6672]">{t("Email Address")}</Label>
                <Input id="email" {...register("email")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE] ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}`} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </Card>

            {/* Shipping Info */}
            <Card className="rounded-2xl border-none shadow-sm p-6 bg-white space-y-4">
              <h2 className="text-xl font-semibold mb-4">{t("2. Shipping Address")}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#2F6672]">First Name</Label>
                  <Input id="firstName" {...register("firstName")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE] ${errors.firstName ? "border-red-400" : ""}`} />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#2F6672]">Last Name</Label>
                  <Input id="lastName" {...register("lastName")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE] ${errors.lastName ? "border-red-400" : ""}`} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-[#2F6672]">Street Address</Label>
                <Input id="address" {...register("address")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE] ${errors.address ? "border-red-400" : ""}`} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[#2F6672]">City</Label>
                  <Input id="city" {...register("city")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE]`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-[#2F6672]">ZIP Code</Label>
                  <Input id="zipCode" {...register("zipCode")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE]`} />
                </div>
              </div>
            </Card>

            {/* Payment Info */}
            <Card className="rounded-2xl border-none shadow-sm p-6 bg-white space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{t("3. Payment Method")}</h2>
                <Lock className="w-5 h-5 text-[#9DB7AE]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-[#2F6672]">Card Number</Label>
                <Input id="cardNumber" placeholder="0000 0000 0000 0000" {...register("cardNumber")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE]`} />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-[#2F6672]">Expiry (MM/YY)</Label>
                  <Input id="expiry" placeholder="MM/YY" {...register("expiry")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE]`} />
                  {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc" className="text-[#2F6672]">CVC</Label>
                  <Input id="cvc" placeholder="123" {...register("cvc")} className={`rounded-xl bg-[#F4EFE8]/50 border-transparent focus-visible:ring-[#9DB7AE]`} />
                  {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
                </div>
              </div>
            </Card>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#E8A48C] hover:bg-[#E8A48C]/90 text-white rounded-full py-7 text-lg font-bold shadow-md transition-transform hover:-translate-y-1">
              {isSubmitting ? "Processing..." : "Place Order • $85.00"}
            </Button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full md:w-80 shrink-0 hidden md:block">
          <Card className="rounded-2xl border-none shadow-sm bg-white p-6 sticky top-24">
             <h3 className="text-lg font-semibold mb-4">{t("Summary")}</h3>
             <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#EEF4F3] rounded-md relative overflow-hidden shrink-0">
                   {/* Hardcoding image for checkout flow demo */}
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Da4SRGURSlBe1QT82DZ_dwGo2O6F7EHIT_h8ujnGdPFWbcvM2ewrfMVMNU_vilTs74OdxGqlk8SuMDNO4aQd4snLHtlE_ZKm_jGd2-8ZalzOCz9zs4JGPbaZfL5x3ey7JvwxmLuBiMJN80OOs9fDVqcI7vZEqJyqq8T83wetIgEf8K8OqVAw9OcqaW-luoWrlgL6Jt9u3Tmy-2U00XRKEuFfdz3eB48teSrktzU4WpFhhMnGUR1DMLfiYJaYoMAaw4N_Iln_ldA" alt="Aequum Relief+" fill className="object-cover" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-[#18324A]">Aequum Relief+</p>
                  <p className="text-[#2F6672]">Qty: 1</p>
                </div>
                <div className="ml-auto font-semibold">$85.00</div>
             </div>
             <Separator className="my-4 bg-[#9DB7AE]/20" />
             <div className="space-y-2 text-sm text-[#2F6672]">
                <div className="flex justify-between">
                  <span>{t("Subtotal")}</span>
                  <span>$85.00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Shipping")}</span>
                  <span>$5.99</span>
                </div>
             </div>
             <Separator className="my-4 bg-[#9DB7AE]/20" />
             <div className="flex justify-between font-bold text-lg text-[#18324A]">
                <span>{t("Total")}</span>
                <span>$90.99</span>
             </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
