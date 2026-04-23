"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PackageSearch, Repeat, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

// Dummy Order Data
const orders = [
  {
    id: "ORD-9381-XYZ",
    date: "Oct 15, 2026",
    status: "Shipped", // Ordered, Processing, Shipped, Delivered
    total: 90.99,
    itemCount: 1,
    products: [
      {
        name: "Aequum Relief+",
        size: "M (Men 8-9.5)",
        qty: 1,
        // Since we don't have remote images configured, using local placeholder pattern if possible,
        // or a known safe proxy image. In reality, this would map to standard asset paths.
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "ORD-1011-ABC",
    date: "Mar 02, 2026",
    status: "Delivered",
    total: 85.00,
    itemCount: 1,
    products: [
      {
        name: "Aequum Daily Comfort",
        size: "M (Men 8-9.5)",
        qty: 1,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=200&auto=format&fit=crop"
      }
    ]
  }
];

export default function OrdersPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t("Order History")}</h1>
        <p className="text-[#2F6672]">{t("Track, review, and reorder your past purchases.")}</p>
      </header>

      {orders.length === 0 ? (
        <Card className="rounded-3xl border-dashed border-2 border-[#9DB7AE]/50 bg-white/50 p-12 text-center">
          <div className="w-16 h-16 bg-[#EEF4F3] rounded-full flex items-center justify-center mx-auto mb-4">
            <PackageSearch className="w-8 h-8 text-[#9DB7AE]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t("No orders yet")}</h3>
          <p className="text-[#2F6672] mb-6">{t("Looks like you haven't made your first purchase.")}</p>
          <Button className="bg-[#18324A] hover:bg-[#18324A]/90 rounded-full px-8">{t("Browse Products")}</Button>
        </Card>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="rounded-3xl border-none shadow-sm bg-white overflow-hidden transition-shadow hover:shadow-md">
              {/* Order Header */}
              <div className="bg-[#EEF4F3]/50 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#9DB7AE]/10">
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="text-[#2F6672] block mb-0.5">{t("Order Placed")}</span>
                    <span className="font-semibold text-[#18324A]">{order.date}</span>
                  </div>
                  <Separator orientation="vertical" className="bg-[#9DB7AE]/30 h-8" />
                  <div>
                    <span className="text-[#2F6672] block mb-0.5">{t("Total")}</span>
                    <span className="font-semibold text-[#18324A]">${order.total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#2F6672]">Order #{order.id}</span>
                  <Badge 
                    variant="outline" 
                    className={`rounded-full px-3 py-1 bg-white border-none shadow-sm ${
                      order.status === 'Delivered' ? 'text-[#9DB7AE]' : 
                      order.status === 'Shipped' ? 'text-[#E8A48C]' : 'text-[#18324A]'
                    }`}
                  >
                    {order.status}
                  </Badge>
                </div>
              </div>
              
              {/* Order Items */}
              <CardContent className="p-6">
                <div className="flex flex-col gap-6">
                  {order.products.map((product, idx) => (
                     <div key={idx} className="flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center">
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20 rounded-xl bg-[#F4EFE8] overflow-hidden shrink-0 border border-black/5">
                            <Image 
                              src={product.image} 
                              alt={product.name} 
                              fill 
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg text-[#18324A] mb-1">{product.name}</h4>
                            <p className="text-[#2F6672] text-sm">Size: {product.size} &nbsp;&bull;&nbsp; Qty: {product.qty}</p>
                          </div>
                        </div>
                     </div>
                  ))}
                </div>

                <Separator className="bg-[#9DB7AE]/20 my-6" />

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button className="bg-[#18324A] hover:bg-[#18324A]/90 text-white rounded-xl shadow-none">
                    <Repeat className="w-4 h-4 mr-2" />{t("Buy it again")}</Button>
                  <Button variant="outline" className="border-[#9DB7AE]/30 text-[#18324A] hover:bg-[#EEF4F3] rounded-xl">
                    <ExternalLink className="w-4 h-4 mr-2" />{t("View Invoice")}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
