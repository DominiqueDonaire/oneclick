import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">FPOP Community Health Care Clinic</h1>
      <p className="text-lg text-gray-700">
        General Santos City. Find our services, requirements, schedules, and
        directions before you visit.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/services" className="rounded bg-teal-700 px-5 py-3 font-semibold text-white">
          View Services
        </Link>
        <Link href="/location" className="rounded border border-teal-700 px-5 py-3 font-semibold text-teal-700">
          Find the Clinic
        </Link>
      </div>
    </div>
  );
}