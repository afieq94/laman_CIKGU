"use client";

import Image from "next/image";
import { ChevronDown, Grid2X2, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import type { DisplayMenuItem } from "@/types/menu";

type MenuBrowserProps = {
  items: DisplayMenuItem[];
};

const ALL_CATEGORIES = "Semua Kategori";

export function MenuBrowser({ items }: MenuBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))),
    [items]
  );

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === ALL_CATEGORIES || item.category === activeCategory;
    const searchableText = `${item.name} ${item.description} ${item.category}`.toLowerCase();

    return matchesCategory && searchableText.includes(query.trim().toLowerCase());
  });

  function selectCategory(category: string) {
    setActiveCategory(category);
    setIsCategoryListOpen(false);
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <p className="px-4 text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
          Sub Menu
        </p>
        <div className="mt-3 space-y-1 rounded-2xl border border-stone-200/80 bg-white/70 p-2">
          <CategoryButton
            category={ALL_CATEGORIES}
            activeCategory={activeCategory}
            onSelect={selectCategory}
          />
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              activeCategory={activeCategory}
              onSelect={selectCategory}
            />
          ))}
        </div>
      </aside>

      <div>
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari hidangan..."
            className="h-13 w-full rounded-2xl border border-stone-200 bg-white px-12 text-sm text-coffee outline-none transition focus:border-caramel focus:ring-4 focus:ring-caramel/10"
          />
        </label>

        <div className="relative mt-4 lg:hidden">
          <button
            type="button"
            aria-expanded={isCategoryListOpen}
            onClick={() => setIsCategoryListOpen((isOpen) => !isOpen)}
            className="flex w-full items-center justify-between rounded-2xl border border-caramel/60 bg-white px-4 py-3.5 text-left text-sm font-semibold text-coffee"
          >
            <span className="flex items-center gap-3">
              <Grid2X2 className="h-5 w-5 text-caramel" />
              {activeCategory}
            </span>
            <ChevronDown className={`h-5 w-5 text-caramel transition-transform ${isCategoryListOpen ? "rotate-180" : ""}`} />
          </button>

          {isCategoryListOpen && (
            <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-xl shadow-coffee/10">
              <CategoryButton category={ALL_CATEGORIES} activeCategory={activeCategory} onSelect={selectCategory} />
              {categories.map((category) => (
                <CategoryButton key={category} category={category} activeCategory={activeCategory} onSelect={selectCategory} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-stone-500">
            {activeCategory === ALL_CATEGORIES ? "Semua hidangan" : activeCategory}
          </p>
          <p className="text-sm text-stone-400">{filteredItems.length} hidangan</p>
        </div>

        {filteredItems.length ? (
          <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                id={`menu-${item.category.toLowerCase().replaceAll(" ", "-")}`}
                className="group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-caramel/40 hover:shadow-xl hover:shadow-coffee/5"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-caramel">{item.category}</span>
                    <span className="font-display text-lg font-semibold text-coffee">{item.price}</span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-semibold text-coffee">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.description}</p>
                  <AddToCartButton item={item} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-3xl border border-dashed border-stone-300 bg-white/60 px-6 py-14 text-center">
            <p className="font-display text-xl font-semibold text-coffee">Tiada hidangan ditemui</p>
            <p className="mt-2 text-sm text-stone-500">Cuba cari nama lain atau pilih kategori berbeza.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryButton({
  category,
  activeCategory,
  onSelect,
}: {
  category: string;
  activeCategory: string;
  onSelect: (category: string) => void;
}) {
  const isActive = category === activeCategory;

  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${isActive ? "bg-caramel/10 font-semibold text-caramel" : "text-stone-600 hover:bg-stone-50 hover:text-coffee"}`}
    >
      {category}
      {isActive && <span aria-hidden>✓</span>}
    </button>
  );
}
