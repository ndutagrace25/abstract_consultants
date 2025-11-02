"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header />
      <PageHero title="Contact Us" image="/images/obradleys/3.jpg" />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                  We&apos;d love to hear from you. Reach out to us for any
                  inquiries, project discussions, or collaboration
                  opportunities.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  {/* Contact Details Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <svg
                            className="w-6 h-6 text-teal-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-1">
                            Phone
                          </h4>
                          <Link
                            href="tel:+254700000000"
                            className="text-slate-700 hover:text-teal-600 transition-colors"
                          >
                            +254 700 000 000
                          </Link>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <svg
                            className="w-6 h-6 text-teal-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-1">
                            Email
                          </h4>
                          <Link
                            href="mailto:info@abstractconsultants.com"
                            className="text-slate-700 hover:text-teal-600 transition-colors break-all"
                          >
                            info@abstractconsultants.com
                          </Link>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <svg
                            className="w-6 h-6 text-teal-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-1">
                            Location
                          </h4>
                          <p className="text-slate-700">Nairobi, Kenya</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours Card */}
                  <div className="bg-slate-50 rounded-2xl shadow-lg p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Office Hours
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Saturday</span>
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
