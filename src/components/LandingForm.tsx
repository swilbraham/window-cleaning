"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "Absolutely brilliant service! Always on time, friendly, and spotless results.",
    name: "Sarah M.",
    location: "Liverpool",
  },
  {
    text: "Outstanding job every time. The water-fed pole system leaves the windows sparkling.",
    name: "James K.",
    location: "Chester",
  },
  {
    text: "After being let down by others, Fresh For Less was a relief. Reliable and great value.",
    name: "Linda T.",
    location: "Wirral",
  },
];

export default function LandingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Social proof + benefits */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Get Your Free Quote
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Fill in a few details and we&apos;ll get back to you with a
                competitive quote — usually within a couple of hours.
              </p>

              {/* Quick benefits */}
              <div className="mt-8 space-y-4">
                {[
                  "Free no-obligation quote",
                  "Same-day response guaranteed",
                  "Traditional & water-fed pole cleaning",
                  "Domestic and commercial properties",
                  "Easy GoCardless direct debit payments",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <svg className="h-5 w-5 shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              {/* Compact testimonials */}
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex -space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">5.0 from 100+ reviews</span>
                </div>

                <div className="space-y-3">
                  {testimonials.map((t, i) => (
                    <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-4">
                      <p className="text-sm text-slate-300 leading-relaxed">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <p className="mt-2 text-xs font-medium text-slate-500">
                        {t.name} — {t.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone CTA */}
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Prefer to call?</p>
                  <a href="tel:07724564683" className="text-lg font-bold text-blue-400 hover:text-blue-300">
                    07724 564683
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Simple form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-white p-8 text-center shadow-2xl sm:p-10"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                <p className="mt-2 text-slate-600">
                  We&apos;ve received your details and will be in touch shortly with your quote.
                </p>
              </motion.div>
            ) : (
              <form
                action="https://formsubmit.co/simonwilbraham@sky.com"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
              >
                <input type="hidden" name="_subject" value="New Quote Request (Ad Landing Page)" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    Request a Free Quote
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Takes less than 30 seconds
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="lp-name" className="block text-sm font-medium text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="lp-name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lp-phone" className="block text-sm font-medium text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="lp-phone"
                      name="phone"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="07xxx xxxxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="lp-postcode" className="block text-sm font-medium text-slate-700">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      id="lp-postcode"
                      name="postcode"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="e.g. L1 4AQ"
                    />
                  </div>

                  <div>
                    <label htmlFor="lp-type" className="block text-sm font-medium text-slate-700">
                      Property Type *
                    </label>
                    <select
                      id="lp-type"
                      name="property_type"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="Terraced House">Terraced House</option>
                      <option value="Semi-Detached">Semi-Detached</option>
                      <option value="Detached House">Detached House</option>
                      <option value="Bungalow">Bungalow</option>
                      <option value="Flat / Apartment">Flat / Apartment</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get My Free Quote
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  No spam. No obligation. We reply within 2 hours.
                </p>

                {/* Guarantee */}
                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Satisfaction Guarantee
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
