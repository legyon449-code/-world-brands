import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "WORLD BRANDS — Jahon brendlari bir joyda", description: "O'zbekiston uchun zamonaviy xalqaro marketplace.", applicationName: "WORLD BRANDS", manifest: "/manifest.webmanifest" };
export const viewport: Viewport = { themeColor: "#18241d", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>;
}
