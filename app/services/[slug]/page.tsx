import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetailView from "@/components/ServiceDetailView";

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

  return <ServiceDetailView service={service} />;
}