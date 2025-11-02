import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export default function Process() {
  const phases = [
    {
      number: "01",
      title: "CONCEPT",
      items: ["Historical Cost Norms", "Basis of Estimate"],
    },
    {
      number: "02",
      title: "FEASIBILITY",
      items: [
        "Scope Measurement",
        "Preliminary & General",
        "Cost Estimates Value",
        "Budget Quotes",
        "Professional Fees",
        "Contingency",
        "Basis of Estimate",
      ],
    },
    {
      number: "03",
      title: "PRE-CONTRACT",
      items: [
        "Contract Strategy",
        "Pre-Qualification",
        "Enquiry Documents",
        "Tender and Opening",
        "Tender Adjudication",
        "Contract Negotiations",
        "Contract",
      ],
    },
    {
      number: "04",
      title: "EXECUTION",
      items: [
        "Site Meetings",
        "Payment Certificates",
        "Re-measurement",
        "Contract Administration",
        "Settling Contractual Claims",
        "Variation Orders",
        "Financial Reviews",
        "Final Account",
        "Close-Out Reports",
      ],
    },
    {
      number: "05",
      title: "OPERATION",
      items: [
        "Maintenance Contracts",
        "Maintenance Cost Estimates",
      ],
    },
  ];

  return (
    <div>
      <Header />
      <PageHero title="Our Process" />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Introduction Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Our Process
                </h2>
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                  Our process is developed with years of experience and
                  benchmarked with the world&apos;s best methods to ensure
                  successful project delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Phases */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-8 lg:space-y-12">
                {phases.map((phase, index) => (
                  <div
                    key={phase.number}
                    className="bg-white rounded-xl shadow-lg p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                  >
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                      {/* Phase Number & Title */}
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-2xl">
                              {phase.number}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                            {phase.title}
                          </h3>
                        </div>
                      </div>

                      {/* Phase Items */}
                      <div className="md:w-2/3">
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                            >
                              <svg
                                className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-base text-slate-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
