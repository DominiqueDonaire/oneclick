import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ONECLICK",
  description: "Service information portal for FPOP CHCC – General Santos (prototype)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <LanguageProvider>
          <Header />
          <main className="mx-auto max-w-4xl p-4">{children}</main>
          <footer className="mx-auto max-w-4xl p-4 text-sm text-gray-500">
            Prototype with sample data. Not official FPOP information.
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}