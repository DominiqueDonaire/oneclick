export type Lang = "en" | "fil";

export const services = [
  {
    slug: "yakap",
    name: { en: "PhilHealth YAKAP", fil: "PhilHealth YAKAP" },
    description: {
      en: "Primary care services under the PhilHealth YAKAP program. (Sample)",
      fil: "Mga serbisyong primary care sa ilalim ng PhilHealth YAKAP. (Halimbawa)",
    },
    requirements: { en: ["Valid ID", "PhilHealth number"], fil: ["Valid ID", "PhilHealth number"] },
    fees: { en: "Sample: covered for members", fil: "Halimbawa: saklaw para sa miyembro" },
    schedule: { en: "Mon-Fri, 8AM-5PM (sample)", fil: "Lun-Biy, 8AM-5PM (halimbawa)" },
  },
  {
    slug: "hiv",
    name: { en: "HIV Services", fil: "Mga Serbisyo para sa HIV" },
    description: {
      en: "Testing, counseling, PrEP/PEP, and treatment. (Sample)",
      fil: "Pagsusuri, counseling, PrEP/PEP, at gamutan. (Halimbawa)",
    },
    requirements: { en: ["Unique ID code (UIC)"], fil: ["Unique ID code (UIC)"] },
    fees: { en: "Sample: free", fil: "Halimbawa: libre" },
    schedule: { en: "Tue and Thu, 9AM-4PM (sample)", fil: "Martes at Huwebes, 9AM-4PM (halimbawa)" },
  },
  {
    slug: "family-planning",
    name: { en: "Family Planning", fil: "Family Planning" },
    description: {
      en: "Counseling and family planning methods. (Sample)",
      fil: "Counseling at mga paraan ng family planning. (Halimbawa)",
    },
    requirements: { en: ["Valid ID"], fil: ["Valid ID"] },
    fees: { en: "Sample: low-cost", fil: "Halimbawa: mababang halaga" },
    schedule: { en: "Mon-Fri, 8AM-5PM (sample)", fil: "Lun-Biy, 8AM-5PM (halimbawa)" },
  },
  {
    slug: "animal-bite",
    name: { en: "Animal Bite Care", fil: "Serbisyo para sa Kagat ng Hayop" },
    description: {
      en: "Anti-rabies vaccination and wound care. (Sample)",
      fil: "Anti-rabies na bakuna at pangangalaga sa sugat. (Halimbawa)",
    },
    requirements: { en: ["Valid ID", "Details of the bite"], fil: ["Valid ID", "Detalye ng kagat"] },
    fees: { en: "Sample: see clinic for fees", fil: "Halimbawa: magtanong sa klinika" },
    schedule: { en: "Mon-Sat, 8AM-4PM (sample)", fil: "Lun-Sab, 8AM-4PM (halimbawa)" },
  },
  {
    slug: "laboratory",
    name: { en: "Laboratory Services", fil: "Mga Serbisyo sa Laboratoryo" },
    description: {
      en: "Basic laboratory tests and STI screening. (Sample)",
      fil: "Mga basic na laboratory test at STI screening. (Halimbawa)",
    },
    requirements: { en: ["Valid ID"], fil: ["Valid ID"] },
    fees: { en: "Sample: varies by test", fil: "Halimbawa: depende sa test" },
    schedule: { en: "Mon-Fri, 8AM-3PM (sample)", fil: "Lun-Biy, 8AM-3PM (halimbawa)" },
  },
];