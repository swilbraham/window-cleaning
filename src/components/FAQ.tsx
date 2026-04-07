"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Why might my windows not be perfectly streak-free after the first clean?",
    answer:
      "If your windows haven't been professionally cleaned in a while, residue can build up in the rubber seals, frames, and edges. During the first clean, our pure water system draws out these trapped particles, which can leave minor marks as they dry. It typically takes 2–3 regular cleans for the seals to be fully flushed out and for your windows to achieve that perfectly streak-free finish every time.",
  },
  {
    question: "What is pure water window cleaning?",
    answer:
      "Pure water cleaning uses water that has been filtered through a multi-stage purification system to remove all minerals and impurities. This purified water is fed through a water-fed pole to clean your windows, frames, and sills. Because there are no minerals left in the water, it dries completely clear — no soap, no squeegee marks, and no residue.",
  },
  {
    question: "How often should I have my windows cleaned?",
    answer:
      "For most homes, we recommend every 4 to 8 weeks to keep your windows looking their best. Commercial properties may benefit from more frequent cleans depending on location and foot traffic. We'll help you find the right schedule during your free quote.",
  },
  {
    question: "Do you clean frames and sills as well?",
    answer:
      "Yes! Every clean includes your window frames and sills at no extra cost. Our pure water system cleans the whole window unit, not just the glass, so everything looks spotless.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover Merseyside and Cheshire, including Liverpool, Wirral, St Helens, Warrington, Chester, Widnes, Runcorn, and many more areas. If you're unsure whether we cover your area, just get in touch — we're always happy to check.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept cash or bank transfer after the clean is completed. Simple and straightforward — no upfront payment needed.",
  },
  {
    question: "What if it rains after my windows are cleaned?",
    answer:
      "Rain is actually just pure water, so it won't leave marks on freshly cleaned windows. The streaks and spots you see after rain on dirty windows are caused by the existing dirt and grime being moved around. Once your windows are clean, rainwater will simply run off.",
  },
  {
    question: "Can you clean hard-to-reach windows?",
    answer:
      "Absolutely. Our water-fed pole system reaches up to 3 storeys high, so we can clean upper-floor windows, skylights, and conservatory roofs safely from the ground — no ladders needed for most jobs.",
  },
  {
    question: "Do I need to be home for the clean?",
    answer:
      "Not at all. As long as we can access your windows, we'll carry out the clean whether you're home or not. We'll let you know when we're coming and send a message once the job is done.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Simply fill in the quick quote form on this page, give us a call on 07724 564683, or drop us an email. We usually respond the same day with a no-obligation quote.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="border-b border-slate-200 last:border-b-0">
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-blue-600"
        >
          <span className="text-base font-semibold text-slate-900 sm:text-lg">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v12M6 12h12"
              />
            </svg>
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-sky-50 blur-3xl" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re
            looking for, just give us a call.
          </p>
        </AnimatedSection>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <p className="text-slate-600">
            Still have questions?{" "}
            <a
              href="tel:07724564683"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Give us a call
            </a>{" "}
            or{" "}
            <a
              href="#quote"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              send us a message
            </a>
            .
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
