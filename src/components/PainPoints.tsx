"use client";

import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Dirty, Streaky Windows?",
    description:
      "Nothing makes a home or business look more neglected than grimy, streak-covered windows. First impressions matter.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Time to Clean Them Yourself?",
    description:
      "Between work, family, and everything else, who has time to spend their weekend up a ladder cleaning windows?",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Hard-to-Reach Windows?",
    description:
      "Upper floors, skylights, conservatories — dangerous to attempt yourself and impossible to reach without specialist equipment.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
    title: "Let Down by Other Cleaners?",
    description:
      "Unreliable window cleaners who cancel last minute, miss scheduled cleans, or leave streaks behind. You deserve better.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
            Sound Familiar?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Are Your Windows Letting You Down?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            You&apos;re not alone. These are the problems our customers faced before they found us.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {painPoints.map((point, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50">
                <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{point.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Let us solve these problems for you
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
