import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <PageHero title="Contact Us" />
      <main className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Content coming soon...
            </p>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong className="text-slate-900">Phone:</strong> +254 700 000
                000
              </p>
              <p>
                <strong className="text-slate-900">Email:</strong>{" "}
                info@abstractconsultants.com
              </p>
              <p>
                <strong className="text-slate-900">Location:</strong> Nairobi,
                Kenya
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

