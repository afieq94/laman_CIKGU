"use client";

import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useSyncExternalStore } from "react";

export function CartSheet() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();
  // Render only after hydration so persisted cart data cannot mismatch the server HTML.
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  if (!mounted) return null;

  const total = getTotalPrice();

  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline" size="icon" className="relative rounded-full" />}
      >
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-caramel text-[10px] font-bold text-white">
              {getTotalItems()}
            </span>
          )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Bakul Pesanan</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex max-h-[60vh] flex-col gap-4 overflow-y-auto pr-2">
          {items.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-stone-500">Bakul anda kosong.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-stone-100 pb-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-coffee">{item.name}</h4>
                  <p className="text-sm text-caramel">{item.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto h-7 w-7 text-stone-400 hover:text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="mt-6 space-y-4 border-t border-stone-100 pt-6">
            <div className="flex items-center justify-between font-display text-xl font-bold text-coffee">
              <span>Jumlah Keseluruhan</span>
              <span>RM {total.toFixed(2)}</span>
            </div>
            <DialogFooter>
              <Button className="w-full rounded-full bg-coffee py-6 text-cream hover:bg-stone-800">
                Checkout Sekarang
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
