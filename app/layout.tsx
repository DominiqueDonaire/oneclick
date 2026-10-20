import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONECLICK",
  description: "Service information portal for FPOP CHCC – General Santos (prototype)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="bg-teal-700 text-white">
          <nav className="mx-auto flex max-w-4xl flex-wrap items-center gap-4 p-4">
            <Link href="/" className="text-lg font-bold">ONECLICK</Link>
            <Link href="/services">Services</Link>
            <Link href="/location">Location</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-4xl p-4">{children}</main>
        <footer className="mx-auto max-w-4xl p-4 text-sm text-gray-500">
          Prototype with sample data. Not official FPOP information.
        </footer>
      </body>
    </html>
  );
}