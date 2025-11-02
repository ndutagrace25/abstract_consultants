import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { projects, otherProjects } from "@/data/projects";
import Image from "next/image";

export default function ProjectPortfolio() {
  return (
    <div>
      <Header />
      <PageHero title="Project Portfolio" image="/images/obradleys/2.jpg" />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Projects Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Featured Projects
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                A showcase of our diverse portfolio spanning residential,
                commercial, and industrial projects across Kenya.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                          project.status === "Complete"
                            ? "bg-green-500/90 text-white"
                            : "bg-blue-500/90 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {project.name}
                    </h3>

                    <div className="space-y-3">
                      {/* Location */}
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"
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
                        <p className="text-slate-700 text-sm">{project.location}</p>
                      </div>

                      {/* Cost */}
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-slate-900 font-semibold text-sm">
                          {project.cost}
                        </p>
                      </div>

                      {/* Period */}
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-slate-700 text-sm">{project.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Additional Projects
                </h2>
                <p className="text-lg text-slate-700">
                  More projects we&apos;ve successfully completed
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl shadow-lg p-8 lg:p-10">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {otherProjects.map((project) => (
                    <li
                      key={project.id}
                      className="flex items-center gap-3 text-slate-700 hover:text-teal-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-teal-600 shrink-0"
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
                      <span className="text-lg">{project.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
