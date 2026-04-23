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

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { t } = useLanguage();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simulate API login
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.href = "/account";
  };

  return (
    <div className="min-h-screen bg-[#F4EFE8] flex items-center justify-center p-6 text-[#18324A] relative overflow-hidden">
      {/* Decorative calm blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#9DB7AE]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#EEF4F3]/80 blur-3xl pointer-events-none" />
      
      <Card className="max-w-md w-full p-8 md:p-12 rounded-3xl border-none shadow-xl bg-white/90 backdrop-blur-sm z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">{t("Welcome Back")}</h1>
          <p className="text-[#2F6672] text-sm">Continue your journey to comfort.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2F6672]">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              {...register("email")} 
              className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-[#2F6672]">{t("Password")}</Label>
              <Link href="/login/forgot" className="text-xs text-[#E8A48C] hover:underline">Forgot password?</Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              {...register("password")} 
              className="rounded-xl border-[#9DB7AE]/30 focus-visible:ring-[#9DB7AE] bg-[#F4EFE8]/30 py-6" 
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-[#18324A] hover:bg-[#18324A]/90 text-white rounded-full py-6 text-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-[#2F6672]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#18324A] font-semibold hover:underline">
            Create an account
          </Link>
        </div>
      </Card>
    </div>
  );
}
