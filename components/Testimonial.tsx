"use client";

import { homePage } from "@/data";
import { sliderProps } from "@/utility/sliderProps";
import React, { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial: React.FC = () => {
  const { title, subtitle, testimonials } = homePage.testimonial;

  const swiperRef = useRef<SwiperType | null>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Center mode looks fine once there's room to peek at neighbouring slides,
  // but on narrow screens (< 640px) it just crops the active card on both
  // sides. Track viewport width so we can turn centeredSlides off below sm.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");

    const update = () => setIsMobile(mql.matches);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const handleEnter = async (index: number) => {
    swiperRef.current?.autoplay?.stop();

    const video = videos.current[index];
    if (!video) return;

    setActiveVideo(index);

    try {
      video.currentTime = 0;
      await video.play();
    } catch (error) {
      if ((error as DOMException)?.name !== "AbortError") {
        console.error(error);
      }
    }
  };

  const handleLeave = (index: number) => {
    const video = videos.current[index];

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setActiveVideo(null);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section className="py-16 sm:py-24 lg:py-30 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        <p className="sub-title">{subtitle}</p>

        <h2
          className="section-title max-w-full sm:max-w-120"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <Swiper
        {...sliderProps.testimonial}
        centeredSlides={!isMobile}
        slidesOffsetBefore={isMobile ? 20 : 0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mt-8 sm:mt-12 lg:mt-18.75 overflow-visible! px-5 sm:px-8 lg:px-0"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="w-64! h-116! sm:w-80! sm:h-140! lg:w-96! lg:h-176! rounded-[10px] overflow-hidden"
          >
            <div
              className="relative w-full h-full"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  activeVideo === index ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* VIDEO */}
              {item.videoLink && (
                <video
                  ref={(el) => {
                    videos.current[index] = el;
                  }}
                  src={item.videoLink}
                  loop
                  playsInline
                  preload="metadata"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeVideo === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {/* PLAY BUTTON */}
              {activeVideo !== index && item.videoLink && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnter(index);
                  }}
                  className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 80 80"
                      fill="none"
                      className="w-18 sm:w-20 lg:w-25"
                    >
                      <rect
                        width={80}
                        height={80}
                        rx={40}
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M54.667 37.6913C56.4448 38.7177 56.4448 41.2837 54.667 42.3101L34.667 53.8571C32.8892 54.8835 30.667 53.6005 30.667 51.5477L30.667 28.4536C30.667 26.4008 32.8892 25.1178 34.667 26.1442L54.667 37.6913Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              )}

              {/* CONTENT - HIDE ON HOVER */}
              <div
                className={`absolute bottom-4 left-5 right-3 sm:bottom-5 sm:left-6 sm:right-4 lg:bottom-6 lg:left-8 lg:right-4 z-30 transition-opacity duration-200 ${
                  activeVideo === index
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <img src={item.logo} alt="" className="h-5 sm:h-6 w-auto" />

                <p className="text-neutral-50 text-sm sm:text-base lg:text-lg font-medium leading-6 sm:leading-7 mt-4 sm:mt-5 lg:mt-5.5">
                  {item.quote}
                </p>

                <h4 className="text-neutral-50 text-base sm:text-lg lg:text-xl font-semibold leading-6 mt-4 lg:mt-5">
                  {item.name}
                </h4>

                <p className="text-neutral-300 text-sm sm:text-base font-semibold leading-6 mt-2 lg:mt-2.5">
                  {item.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
