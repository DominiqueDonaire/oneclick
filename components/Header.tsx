"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ui } from "@/data/ui";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = ui[lang];

  return (
    <header className="bg-teal-700 text-white">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center gap-4 p-4">
        <Link href="/" className="text-lg font-bold">ONECLICK</Link>
        <Link href="/services">{t.services}</Link>
        <Link href="/location">{t.location}</Link>
        <button
          onClick={() => setLang(lang === "en" ? "fil" : "en")}
          className="ml-auto rounded border border-white px-3 py-1 text-sm font-semibold"
        >
          {lang === "en" ? "Filipino" : "English"}
        </button>
      </nav>
    </header>
  );
}