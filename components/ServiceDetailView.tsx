"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ui } from "@/data/ui";
import type { services } from "@/data/services";

export default function ServiceDetailView({
  service,
}: {
  service: (typeof services)[number];
}) {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <div className="space-y-4 py-4">
      <Link href="/services" className="text-teal-700">{t.back}</Link>
      <h1 className="text-2xl font-bold">{service.name[lang]}</h1>
      <p>{service.description[lang]}</p>

      <section>
        <h2 className="font-semibold">{t.requirements}</h2>
        <ul className="list-disc pl-6">
          {service.requirements[lang].map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">{t.fees}</h2>
        <p>{service.fees[lang]}</p>
      </section>

      <section>
        <h2 className="font-semibold">{t.schedule}</h2>
        <p>{service.schedule[lang]}</p>
      </section>
    </div>
  );
}