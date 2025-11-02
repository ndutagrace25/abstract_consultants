import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Page Header */}
        <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-center">
              About Us
            </h1>
          </div>
        </section>

        {/* Introduction Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-justify sm:text-left">
                  At Abstract Consultants Limited, we understand that dynamic
                  new solutions are crucial in today&apos;s market. Our company
                  was founded on these principles, with a focus on delivering
                  efficient solutions that are tailored to our clients&apos;
                  needs. Our ultimate goal is to ensure project success by
                  defining clear scope and identifying key milestones. We
                  believe that achieving project closeout is key to the
                  satisfaction of all stakeholders.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-justify sm:text-left">
                  Our team has years of experience in professional consulting,
                  and we have an intimate knowledge of value-adding principles
                  that have been successfully implemented on numerous projects.
                  Despite changing market conditions, we continue to provide
                  high-quality outputs and top-notch solutions. We are committed
                  to constantly improving our service model to better serve our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Mission Card */}
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="mb-6">
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-justify sm:text-left">
                  Our mission is to deliver high-quality professional services
                  to clients by listening and understanding their needs and by
                  implementing innovative solutions to their problems.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="mb-6">
                  <div className="w-16 h-1 bg-purple-600 rounded-full mb-4"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-justify sm:text-left">
                  Our vision is to become a trusted and recognized consultant in
                  the field by exceeding client expectations through high
                  quality service and adding value to their projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  The core principles that guide everything we do
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ingenuity
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ethics
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Integrity
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Competence
                  </h3>
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
