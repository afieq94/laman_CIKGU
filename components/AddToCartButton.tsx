"use client";

import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AddToCartButtonProps {
  item: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
}

export function AddToCartButton({ item }: AddToCartButtonProps) {
  const addItem = useCart((state) => state.addItem);

  return (
    <Button
      onClick={() => addItem(item)}
      className="mt-4 w-full rounded-full bg-coffee text-cream hover:bg-stone-800"
    >
      <Plus className="mr-2 h-4 w-4" />
      Tambah ke Bakul
    </Button>
  );
}
