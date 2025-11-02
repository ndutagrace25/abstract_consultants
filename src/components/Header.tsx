"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-30 h-20 rounded">
                <Image
                  src="/images/logo.jpg"
                  alt="Abstract Consultants Logo"
                  fill
                  className="object-contain rounded"
                  priority
                />
              </div>
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white p-2"
              aria-label="Open menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-teal-900 overflow-y-auto">
          <div className="min-h-screen">
            {/* Top Bar */}
            <div className="container mx-auto px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center"
                >
                  <div className="relative w-32 h-16 rounded border-2 border-white p-2 bg-white">
                    <Image
                      src="/images/logo.jpg"
                      alt="Abstract Consultants Logo"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Content */}
            <div className="container mx-auto px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
                {/* Column 1 */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Services
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/services/architecture"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Architecture
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/planning"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Urban Design + Planning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/interiors"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Interiors
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Sectors
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/sectors/hospitality"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Hospitality
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sectors/housing"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Housing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sectors/public"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Public
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sectors/workplace"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Workplace
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sectors/featured"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Featured
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Specialties
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/specialties/reuse"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Reuse and Renovation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/specialties/resilience"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Resilience
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/specialties/sustainability"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Sustainability
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/specialties/visualization"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Visualization
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      People
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/people/team"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/people/culture"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Culture
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/people/careers"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-lg hover:underline"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 pt-8">
                    <Link
                      href="/news"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white text-lg hover:underline"
                    >
                      News + Insights
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white text-lg hover:underline"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
