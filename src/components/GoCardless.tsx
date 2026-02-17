"use client";

import AnimatedSection from "./AnimatedSection";

export default function GoCardless() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
              <div className="grid lg:grid-cols-2">
                {/* Left content */}
                <div className="p-8 sm:p-12">
                  <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                    Easy Payment
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                    Set Up Hassle-Free Direct Debit
                  </h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    No more chasing cash or remembering to pay. With GoCardless
                    Direct Debit, your window cleaning payments are taken
                    automatically after each clean.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Automatic payments — no remembering",
                      "Protected by the Direct Debit Guarantee",
                      "Cancel anytime with full flexibility",
                      "Secure & trusted by millions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <svg className="h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://pay.gocardless.com/al/pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-700 hover:-translate-y-0.5"
                  >
                    Sign Up to GoCardless
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Right visual */}
                <div className="flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-8 sm:p-12">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                      <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Direct Debit Guarantee
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-xs mx-auto">
                      All payments are protected by the Direct Debit Guarantee,
                      giving you full peace of mind.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Secure & Encrypted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
