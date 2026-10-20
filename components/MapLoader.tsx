"use client";

import dynamic from "next/dynamic";

const ClinicMap = dynamic(() => import("./ClinicMap"), {
  ssr: false,
  loading: () => <p className="p-4 text-gray-500">Loading map...</p>,
});

export default function MapLoader() {
  return <ClinicMap />;
}