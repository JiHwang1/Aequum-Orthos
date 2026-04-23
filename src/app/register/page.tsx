"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/LanguageContext";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { t } = useLanguage();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Usually redirect to onboarding or quiz
    window.location.href = "/quiz"; 
  };

  return (
    <div className="min-h-screen bg-[#F4EFE8] flex items-center justify-center p-6 text-[#18324A] relative overflow-hidden pt-24">
      {/* Decorative calm blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8A48C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#9DB7AE]/20 blur-3xl pointer-events-none" />
      
      <Card className="max-w-md w-full p-8 md:p-12 rounded-3xl border-none shadow-xl bg-white/90 backdrop-blur-sm z-10 my-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">{t("Create an Account")}</h1>
          <p className="text-[#2F6672] text-sm">Join us to maintain perfect balance and comfort every day.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#2F6672]">First Name</Label>
              <Input 
                id="firstName" 
                {...register("firstName")} 
                className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" 
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#2F6672]">Last Name</Label>
              <Input 
                id="lastName" 
                {...register("lastName")} 
                className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" 
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2F6672]">Email</Label>
            <Input 
              id="email" 
              type="email" 
              {...register("email")} 
              className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#2F6672]">{t("Password")}</Label>
            <Input 
              id="password" 
              type="password" 
              {...register("password")} 
              className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" 
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-[#18324A] hover:bg-[#18324A]/90 text-white rounded-full py-6 text-lg shadow-md transition-all mt-4 hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-[#2F6672]">{t("Already have an account?")} {" "}
          <Link href="/login" className="text-[#18324A] font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
