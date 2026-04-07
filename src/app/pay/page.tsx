"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentPage() {
  const [paymentType, setPaymentType] = useState<"booking_fee" | "full">(
    "booking_fee"
  );
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValid =
    address.trim().length > 0 &&
    (paymentType === "booking_fee" ||
      (paymentType === "full" && Number(amount) >= 20));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentType,
          amount: paymentType === "booking_fee" ? 20 : Number(amount),
          address: address.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      window.location.href = data.url;
    } catch (err) {
      setLoading(false);
      setError(
        (err as Error).message ||
          "Could not connect to payment provider. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                Secure Payment
              </span>
              <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Make a Payment
              </h1>
              <p className="text-slate-500">
                Pay securely with card or Klarna. All payments are processed by
                Stripe.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-slate-100 bg-slate-50 p-6 md:p-8"
            >
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-900">
                  Payment Type
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setPaymentType("booking_fee")}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      paymentType === "booking_fee"
                        ? "border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`block text-lg font-bold ${
                        paymentType === "booking_fee"
                          ? "text-blue-600"
                          : "text-slate-900"
                      }`}
                    >
                      &pound;20.00
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        paymentType === "booking_fee"
                          ? "text-blue-600/70"
                          : "text-slate-500"
                      }`}
                    >
                      Booking Fee
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentType("full")}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      paymentType === "full"
                        ? "border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`block text-lg font-bold ${
                        paymentType === "full"
                          ? "text-blue-600"
                          : "text-slate-900"
                      }`}
                    >
                      Full Payment
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        paymentType === "full"
                          ? "text-blue-600/70"
                          : "text-slate-500"
                      }`}
                    >
                      Enter amount
                    </span>
                  </button>
                </div>

                {paymentType === "booking_fee" && (
                  <p className="mt-3 rounded-lg border border-slate-100 bg-white px-4 py-3 text-sm text-slate-500">
                    Your &pound;20.00 booking fee will be{" "}
                    <strong>deducted from your final payment</strong> due on the
                    day.
                  </p>
                )}
              </div>

              {paymentType === "full" && (
                <div>
                  <label
                    htmlFor="pay-amount"
                    className="mb-1.5 block text-sm font-semibold text-slate-900"
                  >
                    Payment Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-slate-400">
                      &pound;
                    </span>
                    <input
                      type="number"
                      id="pay-amount"
                      min="20"
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-lg font-semibold text-slate-900 placeholder-slate-300 transition-colors focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  {amount && Number(amount) < 20 && (
                    <p className="mt-1.5 text-sm text-red-500">
                      Minimum payment is &pound;20.00
                    </p>
                  )}
                </div>
              )}

              <div>
                <label
                  htmlFor="pay-address"
                  className="mb-1.5 block text-sm font-semibold text-slate-900"
                >
                  Your Address (payment reference)
                </label>
                <input
                  type="text"
                  id="pay-address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 12 High Street, Birkenhead, CH41 1AA"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={!isValid || loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Redirecting to checkout...
                  </>
                ) : (
                  <>
                    Pay{" "}
                    {paymentType === "booking_fee"
                      ? "\u00A320.00"
                      : amount
                      ? `\u00A3${Number(amount).toFixed(2)}`
                      : ""}{" "}
                    Now
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <span className="text-xs text-slate-400">Powered by Stripe</span>
                <span className="text-xs text-slate-300">|</span>
                <span className="text-xs text-slate-400">
                  Card &amp; Klarna accepted
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
