import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="space-y-4 py-4">
      <h1 className="text-2xl font-bold">Our Services</h1>
      <ul className="space-y-3">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}`} className="block rounded border p-4 hover:bg-teal-50">
              <h2 className="font-semibold">{s.name.en}</h2>
              <p className="text-sm text-gray-600">{s.description.en}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}