"use client";

import AnimatedSection from "./AnimatedSection";

const merseysideAreas = [
  "Liverpool",
  "Birkenhead",
  "Wallasey",
  "St Helens",
  "Bootle",
  "Crosby",
  "Formby",
  "Southport",
  "Huyton",
  "Kirkby",
  "Prescot",
  "Bebington",
  "Heswall",
  "West Kirby",
  "Hoylake",
  "Maghull",
  "Rainhill",
  "Halewood",
  "Woolton",
  "Allerton",
];

const cheshireAreas = [
  "Chester",
  "Warrington",
  "Ellesmere Port",
  "Neston",
  "Runcorn",
  "Widnes",
  "Northwich",
  "Winsford",
  "Frodsham",
  "Helsby",
  "Nantwich",
  "Crewe",
  "Macclesfield",
  "Wilmslow",
  "Knutsford",
  "Congleton",
  "Sandbach",
  "Middlewich",
  "Alsager",
  "Tarporley",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            Wide Coverage
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Areas We Cover
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Proudly serving homes and businesses across Merseyside and Cheshire.
            Don&apos;t see your area? Get in touch — we may still be able to help.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-blue-50/50 to-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Merseyside</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {merseysideAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    <svg className="h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/50 to-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Cheshire</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {cheshireAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    <svg className="h-4 w-4 shrink-0 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <p className="text-slate-500">
            Not listed?{" "}
            <a href="tel:07724564683" className="font-semibold text-blue-600 hover:text-blue-700">
              Call us on 07724 564683
            </a>{" "}
            — we cover more areas than shown.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
