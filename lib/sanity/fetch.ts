import type { DisplayMenuItem, SanityMenuItem } from "@/types/menu";
import { isSanityConfigured } from "@/sanity/env";
import { sanityClient } from "./client";
import { urlForImage } from "./image";
import { MENU_ITEMS_QUERY } from "./queries";

const FALLBACK_MENU_ITEMS: DisplayMenuItem[] = [
  {
    id: "fallback-1",
    name: "Croissant Kaya Butter",
    description:
      "Pastri mentega rangup dengan kaya buatan sendiri — pairing sempurna untuk kopi pagi anda.",
    price: "RM 14",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    id: "fallback-2",
    name: "Nasi Lemak Cikgu Special",
    description:
      "Hidangan utama kebanggaan kami — nasi lemak dengan ayam goreng berempah dan sambal istimewa.",
    price: "RM 28",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
  },
  {
    id: "fallback-3",
    name: "Pandan Crème Brûlée",
    description:
      "Krim pandan lembut dengan topping gula karamel renyah — penutup manis yang elegan.",
    price: "RM 18",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
];

function toDisplayMenuItem(item: SanityMenuItem): DisplayMenuItem {
  return {
    id: item._id,
    name: item.title,
    description: item.description,
    price: `RM ${item.price}`,
    image: urlForImage(item.image).width(800).height(600).fit("crop").url(),
  };
}

export async function getMenuItems(): Promise<DisplayMenuItem[]> {
  if (!isSanityConfigured) {
    console.warn(
      "[Sanity] NEXT_PUBLIC_SANITY_PROJECT_ID belum diset. Menggunakan data fallback."
    );
    return FALLBACK_MENU_ITEMS;
  }

  try {
    const items = await sanityClient.fetch<SanityMenuItem[]>(MENU_ITEMS_QUERY);

    if (!items.length) {
      return FALLBACK_MENU_ITEMS;
    }

    return items.map(toDisplayMenuItem);
  } catch (error) {
    console.error("[Sanity] Gagal fetch menu items:", error);
    return FALLBACK_MENU_ITEMS;
  }
}
