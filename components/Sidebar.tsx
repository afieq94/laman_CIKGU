import {
  Clock,
  Coffee,
  Home,
  Info,
  MapPin,
  Menu,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { CartSheet } from "./CartSheet";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-stone-200 bg-cream/50 backdrop-blur-xl lg:flex">
      <div className="flex flex-col h-full p-6">
        <a href="#" className="flex items-center gap-2.5 mb-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee">
            <Coffee className="h-5 w-5 text-cream" strokeWidth={1.5} />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-coffee">
            Laman CIKGU
          </span>
        </a>

        <nav className="flex-1 space-y-2">
          <SidebarLink href="#" icon={Home}>Utama</SidebarLink>
          <SidebarLink href="#menu" icon={Menu}>Menu</SidebarLink>
          <SidebarLink href="#about" icon={Info}>Cerita Kami</SidebarLink>
          <SidebarLink href="#contact" icon={MapPin}>Kunjungi</SidebarLink>
          <div className="mt-4 pt-4 border-t border-stone-200/60 lg:hidden block">
             {/* This is for mobile, but we handle it differently below */}
          </div>
        </nav>

        <div className="mt-auto pt-6 border-t border-stone-200/60">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-stone-600">
              <Phone className="h-4 w-4 text-caramel" />
              <span>+60 3-8734 5678</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-600">
              <Clock className="h-4 w-4 text-caramel" />
              <span>8:00 - 22:00</span>
            </div>
          </div>
          
          <a
            href="#contact"
            className="mt-6 block w-full rounded-full bg-coffee px-5 py-3 text-center text-sm font-medium text-cream transition-all hover:bg-stone-800"
          >
            Tempah Meja
          </a>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon: Icon, children }: { href: string; icon: LucideIcon; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-stone-600 transition-all hover:bg-white hover:text-coffee hover:shadow-sm"
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} />
      {children}
    </a>
  );
}

export function MobileNav() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-stone-200/80 bg-cream/80 p-2 shadow-xl backdrop-blur-xl lg:hidden">
      <MobileNavLink href="#" icon={Home} />
      <MobileNavLink href="#menu" icon={Menu} />
      <div className="px-2">
        <CartSheet />
      </div>
      <MobileNavLink href="#about" icon={Info} />
      <MobileNavLink href="#contact" icon={MapPin} />
    </div>
  );
}

function MobileNavLink({ href, icon: Icon }: { href: string; icon: LucideIcon }) {
  return (
    <a
      href={href}
      className="flex h-12 w-12 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-white hover:text-coffee"
    >
      <Icon className="h-6 w-6" strokeWidth={1.5} />
    </a>
  );
}
