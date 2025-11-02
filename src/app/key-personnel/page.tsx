import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export default function KeyPersonnel() {
  return (
    <div>
      <Header />
      <PageHero title="Key Personnel" image="/images/victoria/3.jpg" />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Introduction Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className="text-center mb-8">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight mb-4">
                    We&apos;re a young
                  </p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                    dynamic
                  </p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
                    group packed with experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Description Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-slate-50 rounded-xl shadow-md p-6 lg:p-8">
                  <p className="text-lg lg:text-xl text-slate-700 leading-relaxed text-justify sm:text-left">
                    Our team is comprised of individuals with diverse project
                    backgrounds, each with hands-on experience and an exceptional
                    work ethic. We strive to be industry leaders and as diverse as
                    the projects we take on.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl shadow-md p-6 lg:p-8">
                  <p className="text-lg lg:text-xl text-slate-700 leading-relaxed text-justify sm:text-left">
                    With a combined project experience of more than 5 years, our
                    team has executed a wide variety of projects, making commercial
                    diversity and dynamic project solutions our biggest success
                    factors.
                  </p>
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

