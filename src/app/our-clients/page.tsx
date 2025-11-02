import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { clients } from "@/data/clients";
import Image from "next/image";

export default function OurClients() {
  return (
    <div>
      <Header />
      <PageHero title="Our Clients" image="/images/nanare/4.jpg" />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Introduction Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 leading-relaxed">
                  Our client list is as vast as our experience and ranges from
                  small consultancies to multi-national companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center group"
                >
                  <div className="w-full aspect-square bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-green-300">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={150}
                      height={150}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-slate-600 text-center font-medium">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
