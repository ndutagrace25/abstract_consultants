import Image from "next/image";

interface PageHeroProps {
  title: string;
  image?: string;
}

export default function PageHero({ title, image = "/images/astray/1.jpeg" }: PageHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Title */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

