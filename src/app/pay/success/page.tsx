import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Payment Successful
            </h1>
            <p className="mb-8 text-slate-500">
              Thank you! Your payment has been received. We&apos;ll be in touch
              shortly to confirm your booking.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
