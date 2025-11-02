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
        <div className="fixed inset-0 z-50 bg-teal-900 overflow-y-auto">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/process"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  Our Process
                </Link>
                <Link
                  href="/project-portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  Project Portfolio
                </Link>
                <Link
                  href="/our-clients"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  Our Clients
                </Link>
                <Link
                  href="/key-personnel"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  Key Personnel
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-white hover:text-teal-200 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
