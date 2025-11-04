"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  heading: string;
  subHeading: string;
  category: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/astray/1.jpeg",
    heading:
      "Modern residential development with sustainable design principles",
    subHeading: "Creating spaces that inspire and elevate living",
    category: "Architecture: Residential",
  },
  {
    id: 2,
    image: "/images/castle/1.jpg",
    heading: "Welcoming spaces that provide places to gather",
    subHeading: "create the heart and soul of a space",
    category: "Interiors: Lobbies",
  },
  {
    id: 3,
    image: "/images/nanare/1.jpg",
    heading: "Contemporary urban housing solution",
    subHeading: "Redefining modern urban living",
    category: "Urban Design: Housing",
  },
  {
    id: 4,
    image: "/images/obradleys/1.jpg",
    heading: "Premium residential complex with world-class amenities",
    subHeading: "Where luxury meets functionality",
    category: "Architecture: Luxury",
  },
  {
    id: 5,
    image: "/images/residential.jpg",
    heading: "Gated communities focused of family wholistic living",
    subHeading: "Where security, comfort, and nature converge",
    category: "Project type: Residential",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.heading}
          fill
          className="object-cover transition-opacity duration-700"
          priority={currentSlide === 0}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 bottom-32 -translate-y-1/2 z-10 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 bottom-32 -translate-y-1/2 z-10 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
              {currentSlideData.heading}
            </h1>

            {/* Sub heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight mb-6">
              {currentSlideData.subHeading}
            </h2>

            {/* Sub-text */}
            <p className="text-lg md:text-xl text-white/90 font-light">
              {currentSlideData.category}
            </p>
          </div>
        </div>

        {/* Page Indicator - Bottom Right */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/40 w-2 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-white text-sm font-light">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
