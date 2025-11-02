import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export default function ProjectPortfolio() {
  return (
    <div>
      <Header />
      <PageHero title="Project Portfolio" />
      <main className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg text-slate-600 leading-relaxed">
              Content coming soon...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

