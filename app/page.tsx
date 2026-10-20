"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { ui } from "@/data/ui";

export default function Home() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <div className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">{t.homeTitle}</h1>
      <p className="text-lg text-gray-700">{t.homeText}</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/services" className="rounded bg-teal-700 px-5 py-3 font-semibold text-white">
          {t.viewServices}
        </Link>
        <Link href="/location" className="rounded border border-teal-700 px-5 py-3 font-semibold text-teal-700">
          {t.findClinic}
        </Link>
      </div>
    </div>
  );
}