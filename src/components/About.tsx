"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "5.0", label: "Star Rating" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
                <img
                  src="/window-cleaning.jpg"
                  alt="Professional window cleaning service"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-blue-600 p-6 text-white shadow-2xl shadow-blue-600/30 sm:-bottom-8 sm:-right-8">
                <div className="text-3xl font-extrabold">10+</div>
                <div className="text-sm text-blue-100">Years of<br />Experience</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection delay={0.2}>
            <div>
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Your Local, Trusted Window Cleaning Experts
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Fresh For Less Window Cleaning has been providing exceptional window
                cleaning services across Merseyside and Cheshire for over a decade.
                We&apos;re a local, family-run business that takes pride in delivering
                outstanding results every single time.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We use both <strong>traditional methods</strong> and the latest{" "}
                <strong>water-fed pole technology</strong> to ensure every window —
                from ground floor to high-rise — gets the treatment it deserves.
                Our purified water system leaves windows sparkling clean with no
                chemicals and no residue.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether you&apos;re a homeowner wanting regular cleans, a landlord
                preparing a property, or a business looking for a reliable
                commercial cleaning partner, we&apos;ve got you covered.
              </p>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fully Insured
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  DBS Checked
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Health & Safety Compliant
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
