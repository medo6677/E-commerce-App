"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function Slider({ imgs }: { imgs: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {/* السلايدر الرئيسي */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#0AAD0A",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full !h-auto rounded-xl overflow-hidden border border-gray-100 bg-white"
      >
        {imgs.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-square w-full">
              <Image
                src={img}
                alt="Product image"
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain p-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* سلايدر الصور المصغرة (Thumbnails) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full !h-auto cursor-pointer"
      >
        {imgs.map((img, i) => (
          <SwiperSlide key={i + imgs.length}>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-200 bg-white hover:border-[#0AAD0A] transition">
              <Image
                src={img}
                alt="Thumbnail"
                fill
                sizes="120px"
                className="object-contain p-1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
