"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    title: "Fresh Products Delivered to your Door",
    description: "Get 20% off your first order",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2400&q=85",
  },
  {
    title: "Fresh Picks for a Healthier You",
    description: "Discover seasonal fruits and vegetables",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2400&q=85",
  },
  {
    title: "Good Food, Made Easy",
    description: "Shop fresh favorites for the whole family",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=2400&q=85",
  },
];

export function HeroSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-label="FreshCart offers"
      className="relative overflow-hidden bg-emerald-800"
    >
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="hero-slider !h-[360px] sm:!h-[400px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0, 201, 80, 0.9) 0%, rgba(5, 223, 114, 0.5) 100%), url("${slide.image}")`,
              }}
            />
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto w-full max-w-[1440px] px-16 text-left text-white sm:px-12 lg:px-30 2xl:px-0">
                <div className="max-w-md">
                  <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href="/products"
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 hover:scale-105 duration-500"
                    >
                      Shop Now
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-white/60 px-6 text-sm font-semibold text-white transition hover:bg-white/15 hover:scale-105 duration-500"
                    >
                      View Deals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiper?.slidePrev()}
        className="hidden absolute start-4 top-1/2 z-20 lg:flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm transition hover:bg-emerald-50 sm:start-14"
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiper?.slideNext()}
        className="hidden absolute end-4 top-1/2 z-20 lg:flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm transition hover:bg-emerald-50 sm:end-14"
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>

      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => swiper?.slideToLoop(index)}
            className={`h-3 rounded-full transition-all ${
              activeIndex === index
                ? "w-8 bg-white"
                : "w-3 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
