import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Coffee,
  Leaf,
  MapPin,
  Phone,
  Sparkles,
  Wifi,
} from "lucide-react";
import { getMenuItems } from "@/lib/sanity/fetch";
import { Sidebar, MobileNav } from "@/components/Sidebar";
import { AddToCartButton } from "@/components/AddToCartButton";
import { CartSheet } from "@/components/CartSheet";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const highlights = [
  { icon: Coffee, label: "Kopi Artisan" },
  { icon: Leaf, label: "Bahan Segar" },
  { icon: Wifi, label: "WiFi Percuma" },
  { icon: Sparkles, label: "Suasana Cozy" },
];

export default async function Home() {
  const menuItems = await getMenuItems();

  return (
    <div className="cafe-grain flex min-h-screen">
      <Sidebar />
      <MobileNav />
      
      <main className="flex-1 lg:pl-64">
        {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-caramel/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-500 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
              Modern Cafe & Kitchen
            </div>

            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.1] tracking-tight text-coffee sm:text-6xl lg:text-7xl">
              Laman
              <br />
              <span className="italic text-caramel">CIKGU</span>
            </h1>

            <div className="absolute right-4 top-4 hidden lg:block">
              <CartSheet />
            </div>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
              Citarasa Authentic, Sentuhan Hati — ruang di mana kopi artisan
              bertemu hidangan rumahan dalam suasana yang hangat dan moden.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-7 py-3.5 text-sm font-medium text-cream transition-all hover:bg-stone-800"
              >
                Tempah Meja
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/50 px-7 py-3.5 text-sm font-medium text-coffee backdrop-blur-sm transition-all hover:border-caramel hover:bg-white"
              >
                Lihat Menu
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-stone-200/80 pt-8">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-stone-500">
                  <Icon className="h-4 w-4 text-caramel" strokeWidth={1.5} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-coffee/10 sm:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
                alt="Suasana kafe moden Laman CIKGU"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-stone-200/80 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:-left-8">
              <p className="font-display text-2xl font-semibold text-coffee">4.9</p>
              <p className="text-xs text-stone-500">Rating pelanggan</p>
            </div>

            <div className="absolute -right-2 top-8 rounded-2xl border border-stone-200/80 bg-coffee px-4 py-3 text-cream shadow-lg sm:-right-6">
              <p className="text-xs uppercase tracking-widest opacity-70">Buka Hari Ini</p>
              <p className="text-sm font-medium">8:00 — 22:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Spotlight */}
      <section id="menu" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-caramel">
                Menu Spotlight
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-coffee sm:text-4xl md:text-5xl">
                Rasa Pilihan Kami
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-stone-500 sm:text-right">
              Tiga hidangan kegemaran tetamu — dari pastri pagi hingga pencuci
              mulut yang memikat.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {menuItems.map((item, index) => (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-caramel/40 hover:shadow-xl hover:shadow-coffee/5"
              >
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-caramel">
                      {item.category}
                    </span>
                    <span className="font-display text-lg font-semibold text-coffee">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-semibold text-coffee transition-colors group-hover:text-caramel">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">
                    {item.description}
                  </p>
                  <AddToCartButton 
                    item={{
                      id: item.name, // Using name as ID since menuItems doesn't have ID in the mock/fetch
                      name: item.name,
                      price: item.price,
                      image: item.image
                    }} 
                  />
                </div>

                <span className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs font-medium text-coffee shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-white border border-stone-200/80">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-full">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                  alt="Barista menyediakan kopi di Laman CIKGU"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-l lg:from-white/30 lg:to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-caramel">
                  Cerita Kami
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-coffee sm:text-4xl">
                  Lebih Daripada
                  <br />
                  Sekadar Kafe
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                  <p>
                    Laman CIKGU bermula sebagai sudut kecil untuk guru-guru
                    berkongsi kopi dan cerita. Hari ini, ia telah berkembang
                    menjadi kafe moden yang masih memegang jiwa komuniti —
                    hangat, autentik, dan penuh kasih sayang.
                  </p>
                  <p>
                    Setiap cawan kopi diseduh dengan teliti, setiap hidangan
                    disediakan dari resipi turun-temurun. Kami mencipta ruang
                    di mana anda boleh berehat, bekerja, atau sekadar menikmati
                    detik yang tenang.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-100 pt-8">
                  <div>
                    <p className="font-display text-2xl font-semibold text-caramel sm:text-3xl">
                      15+
                    </p>
                    <p className="mt-1 text-xs text-stone-500">Tahun Dapur</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-caramel sm:text-3xl">
                      30+
                    </p>
                    <p className="mt-1 text-xs text-stone-500">Jenis Kopi</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-caramel sm:text-3xl">
                      Daily
                    </p>
                    <p className="mt-1 text-xs text-stone-500">Pastri Segar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto bg-coffee text-stone-300">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-caramel/20">
                  <Coffee className="h-4 w-4 text-caramel" strokeWidth={1.5} />
                </div>
                <span className="font-display text-xl font-semibold text-cream">
                  Laman CIKGU
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">
                Kafe moden dengan jiwa tradisional. Datang untuk kopi, tinggal
                untuk suasana.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-all hover:border-caramel hover:bg-caramel hover:text-cream"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-all hover:border-caramel hover:bg-caramel hover:text-cream"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-caramel">
                Lokasi
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" strokeWidth={1.5} />
                  <span>
                    No. 12, Jalan Cikgu Rahman,
                    <br />
                    43000 Kajang, Selangor
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-caramel" strokeWidth={1.5} />
                  <a href="tel:+60387345678" className="transition-colors hover:text-cream">
                    +60 3-8734 5678
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-caramel">
                Waktu Operasi
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-cream">Isnin – Jumaat</p>
                    <p className="text-stone-400">8:00 pagi – 10:00 malam</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-cream">Sabtu & Ahad</p>
                    <p className="text-stone-400">8:00 pagi – 11:00 malam</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone-700/60 pt-8 text-xs text-stone-500 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Laman CIKGU. Hak cipta terpelihara.</p>
            <p className="italic text-stone-600">Brewed with heart, served with care.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
