import MapLoader from "@/components/MapLoader";

export default function LocationPage() {
  return (
    <div className="space-y-4 py-4">
      <h1 className="text-2xl font-bold">Location and Access</h1>

      <section className="space-y-1">
        <p><span className="font-semibold">Address:</span> Barangay Dadiangas East, General Santos City</p>
        <p><span className="font-semibold">Hours:</span> Mon-Fri, 8AM-5PM (sample)</p>
        <p><span className="font-semibold">Contact:</span> (sample) 000-000-0000</p>
      </section>

      <div className="overflow-hidden rounded border">
        <MapLoader />
      </div>

      <a
        href="https://www.openstreetmap.org/?mlat=6.1164&mlon=125.1716#map=15/6.1164/125.1716"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded bg-teal-700 px-5 py-3 font-semibold text-white"
      >
        Open in map app
      </a>

      <section>
        <h2 className="font-semibold">Commuting guidance (sample)</h2>
        <p>Take a tricycle or jeepney to the city center, then ask for the clinic landmark.</p>
      </section>
    </div>
  );
}