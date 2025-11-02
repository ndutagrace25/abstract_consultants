import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div>
      <Header />
      <PageHero title="Our Services" image="/images/castle/3.jpg" />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Introduction Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6">
                We employ a personal on-site approach, ensuring transparency for
                stakeholders regardless of project size or type.
              </p>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                Our training and experience qualify us to advise on all cost and
                contractual issues. We have experience with various
                clients&apos; in-house Standard Conditions of Contract, as well
                as:
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white rounded-lg shadow-md px-6 py-4 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-600 mb-1">
                    THE JOINT BUILDING CONTRACTS COMMITTEE
                  </p>
                  <p className="text-2xl font-bold text-slate-900">JBCC</p>
                </div>
                <div className="bg-white rounded-lg shadow-md px-6 py-4 border border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">FIDIC</p>
                  <p className="text-xs text-slate-500">TM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantity Surveying Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 mb-12 border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Quantity Surveying
                  </h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  We offer full quantity surveying services on construction
                  projects. From feasibility to completion, we make sure the
                  finances of the project are accurate, managed and controlled,
                  to ensure you get the best value for your money spent. We
                  offer a wide range of quantity surveying services which
                  include;
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Financial design advice;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Value engineering;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>
                          Feasibility studies including financial modeling &
                          risk analysis;
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Cost estimates and planning;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Cash flow projections;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>
                          Contract advisory service including negotiation and
                          drafting;
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>
                          Bills of quantities of all classes from schedule of
                          rates to fixed lump sums;
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Tender/Bidding;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Tender evaluation;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Contract negotiation and administration;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>
                          Cost engineering including cost planning, cost
                          budgeting and cost control;
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Payment valuations;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Settlement of final accounts;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>
                          Evaluation, negotiation and settlement of contractual
                          claims;
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Project Management */}
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    Project Management
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  We oversee all phases of the building process, making sure the
                  project is completed on time and within scope and budget. We
                  are able to review technical reports, agreements, cash flow
                  projections and payments on behalf of project funders in order
                  to ensure that their interests are protected.
                </p>
              </div>

              {/* Development Advise */}
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    Development Advise
                  </h3>
                </div>
                <ul className="space-y-3 text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      We oversee pre-design feasibility studies involving
                      technical and economic investigations that need to be done
                      to ascertain the form of the project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      We make sure that the clients accepted design meets the
                      cost limits of the budget.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Financial Control */}
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    Financial Control
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  During Construction:
                </h4>
                <ul className="space-y-3 text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      We ensure clear financial controls are in place during
                      construction to avoid overrun on budgets and unnecessary
                      claims.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      We evaluate progress of the work on a regular basis.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      We come up with cashflow predictions and continuously
                      update cashflow predictions against actual expenditure.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Expert Advice */}
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    Expert Advice
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Abstract Consultants Limited offers expert advice to clients
                  in the construction space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contractor's Assistance & Disputes */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Contractor's Assistance */}
              <div className="bg-slate-50 rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    Contractor&apos;s Assistance
                  </h3>
                </div>
                <p className="text-base text-slate-700 mb-4">
                  Services we offer to Contractors include;
                </p>
                <ul className="space-y-2 text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Pricing bills of quantities;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Measuring Builder&apos;s work quantities;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Rate build-ups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Advice on tenders/bids</span>
                  </li>
                </ul>
              </div>

              {/* Disputes */}
              <div className="bg-slate-50 rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                    Disputes
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  We evaluate and advise in the settlement of any disputes due
                  to our extensive knowledge and expertise in the field of
                  construction costs and contracts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
