"use client";
import {
  testimonials,
  testimonialSectionData,
  type TestimonialItem as Testimonial,
} from "@/data";
import { sliderProps } from "@/utility/sliderProps";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const Testimonial: React.FC<Props> = () => {
  return (
    <div className="py-35">
      <div className="container m-auto">
        <p className="sub-title">{testimonialSectionData.subtitle}</p>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: testimonialSectionData.title }}
        />
      </div>
      <Swiper {...sliderProps.testimonial} className="slider-items mt-18.75">
        {testimonials.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-96 h-176 min-w-96 relative rounded-[10px] overflow-hidden"
          >
            <img
              className="w-96 h-full relative"
              src={item.video}
              alt={item.name}
            />
            <a
              href={item.videoLink || "#"}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 80 80"
                fill="none"
                className="w-25"
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
            </a>
            <div className="testimonial-item-content absolute bottom-6 left-8 right-4">
              <img src={item.logo} alt="" />
              <p className="justify-start text-neutral-50 text-lg font-medium leading-7 mt-5.5">
                {item.quote}
              </p>
              <h4 className="justify-start text-neutral-50 text-xl font-semibold leading-6 mt-5">
                {item.name}
              </h4>
              <p className="justify-start text-neutral-300 text-base font-semibold leading-6 mt-2.5">
                {item.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
