"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Fresh For Less Window Cleaning" className="h-12 w-12 rounded-lg object-contain" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-tight">
                  Fresh For Less
                </span>
                <span className="text-xs text-blue-400 leading-tight">
                  Window Cleaning
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional window cleaning for homes and businesses across
              Merseyside and Cheshire. Traditional & water-fed pole methods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: "#services", label: "Our Services" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#areas", label: "Service Areas" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#about", label: "About Us" },
                { href: "#quote", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Liverpool",
                "Wirral",
                "Chester",
                "Warrington",
                "St Helens",
                "Southport",
                "Ellesmere Port",
                "Runcorn & Widnes",
              ].map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href="tel:07724564683"
                  className="flex items-center gap-3 transition-colors hover:text-blue-400"
                >
                  <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07724 564683
                </a>
              </li>
              <li>
                <a
                  href="mailto:simonwilbraham@sky.com"
                  className="flex items-center gap-3 transition-colors hover:text-blue-400"
                >
                  <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  simonwilbraham@sky.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Serving Merseyside & Cheshire
              </li>
            </ul>

            {/* GoCardless link */}
            <div className="mt-6">
              <a
                href="https://pay.gocardless.com/al/pay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600/10 border border-green-500/20 px-4 py-2 text-sm font-medium text-green-400 transition-colors hover:bg-green-600/20"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Sign Up to GoCardless
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
            <p>
              &copy; {currentYear} Fresh For Less Window Cleaning. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>Serving Merseyside & Cheshire with pride</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
