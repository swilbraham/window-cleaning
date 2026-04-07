"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Woolton, Liverpool",
    text: "Absolutely brilliant service! They've been cleaning our windows for over a year now and they're always on time, friendly, and the results are spotless. Couldn't recommend them more highly.",
    rating: 5,
    type: "Domestic",
  },
  {
    name: "James K.",
    location: "Chester",
    text: "We use Fresh For Less for our office building and they do an outstanding job every time. The water-fed pole system leaves the windows sparkling and they're very professional to deal with.",
    rating: 5,
    type: "Commercial",
  },
  {
    name: "Linda T.",
    location: "Heswall, Wirral",
    text: "After being let down by two previous window cleaners, finding Fresh For Less was a relief. Reliable, thorough, and great value for money. My conservatory has never looked better!",
    rating: 5,
    type: "Domestic",
  },
  {
    name: "David R.",
    location: "Warrington",
    text: "Fantastic service from start to finish. Got a quote the same day I called, and they were out cleaning the following week. The GoCardless payment system is really convenient too.",
    rating: 5,
    type: "Domestic",
  },
  {
    name: "Mark S.",
    location: "St Helens",
    text: "We manage several commercial properties and Fresh For Less handles all the window cleaning. They're flexible, reliable, and always deliver excellent results. Highly recommended for business owners.",
    rating: 5,
    type: "Commercial",
  },
  {
    name: "Karen P.",
    location: "Formby",
    text: "The best window cleaners we've ever had. They clean our 3-storey home including the skylights, and every window is streak-free. The pure water system is amazing.",
    rating: 5,
    type: "Domestic",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-slate-50 py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            Customer Reviews
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Don&apos;t Just Take Our Word For It
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Here&apos;s what our customers across Merseyside and Cheshire have to say about our service.
          </p>
        </AnimatedSection>

        {/* Aggregate rating */}
        <AnimatedSection delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-slate-900">5.0</div>
              <StarRating rating={5} />
            </div>
            <div className="h-10 w-px bg-amber-200" />
            <div className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">Excellent</span>
              <br />
              Based on 100+ reviews
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    {testimonial.type}
                  </span>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
