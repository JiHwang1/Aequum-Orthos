"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import productsData from "@/data/products.json";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

// Mock cart initial state
const initialCart = [
  {
    ...productsData[0],
    quantity: 1,
    size: "M (Men 8-9.5)",
  }
];

export default function CartPage() {
  const { t } = useLanguage();

  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#EEF4F3] pt-24 pb-24 px-6 lg:px-12 text-[#18324A]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{t("Your Cart")}</h1>
        
        {cartItems.length === 0 ? (
          <Card className="rounded-2xl border-none shadow-sm p-12 text-center bg-white">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <Link href="/products">
              <Button className="bg-[#18324A] hover:bg-[#18324A]/90 rounded-full px-8">Continue Shopping</Button>
            </Link>
          </Card>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-grow space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="rounded-2xl border-none shadow-sm overflow-hidden bg-white p-4 md:p-6 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-40 bg-[#F4EFE8] rounded-xl overflow-hidden shrink-0">
                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                        <p className="text-[#2F6672] text-sm mb-2">Size: {item.size}</p>
                      </div>
                      <span className="font-semibold text-lg">${item.price}</span>
                    </div>
                    <div className="flex justify-between items-end mt-4 md:mt-0">
                      <div className="flex items-center gap-4 bg-[#EEF4F3] rounded-full px-2 py-1 border border-[#9DB7AE]/30">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#E8A48C] transition-colors"><Minus className="w-4 h-4" /></button>
                        <span className="w-6 text-center font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#E8A48C] transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => setCartItems([])} className="text-[#2F6672] hover:text-red-500 transition-colors flex items-center text-sm">
                        <Trash2 className="w-4 h-4 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="w-full lg:w-96 shrink-0">
              <Card className="rounded-2xl border border-[#9DB7AE]/30 shadow-sm bg-white p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-base">
                    <span className="text-[#2F6672]">{t("Subtotal")}</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-[#2F6672]">{t("Shipping")}</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-[#E8A48C] text-right mt-1">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>
                <Separator className="bg-[#9DB7AE]/30 mb-6" />
                <div className="flex justify-between text-xl font-bold mb-8">
                  <span>{t("Total")}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <Link href="/checkout" className="w-full">
                  <Button className="w-full bg-[#18324A] hover:bg-[#18324A]/90 text-white rounded-full py-6 text-lg shadow-md transition-transform hover:scale-[1.02]">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#2F6672]">
                  <ShieldCheck className="w-4 h-4" />{t("Secure Checkout")} & 90-Day Guarantee
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
