import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="space-y-4 py-4">
      <Link href="/services" className="text-teal-700">← Back to services</Link>
      <h1 className="text-2xl font-bold">{service.name.en}</h1>
      <p>{service.description.en}</p>

      <section>
        <h2 className="font-semibold">Requirements</h2>
        <ul className="list-disc pl-6">
          {service.requirements.en.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">Fees / Coverage</h2>
        <p>{service.fees.en}</p>
      </section>

      <section>
        <h2 className="font-semibold">Schedule</h2>
        <p>{service.schedule.en}</p>
      </section>
    </div>
  );
}