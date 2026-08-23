"use client";
import { BrandShort } from "@/components/Brand";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import IndustryCard from "@/components/IndustryCard";
import { ServiceItems } from "@/components/Service";
import VorklyeLayout from "@/components/VorklyeLayout";
import { servicePage } from "@/data";
import { ServicePageHero, ServicePageIndustrie } from "@/data/type";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <VorklyeLayout>
      <Hero hero={servicePage.hero} />
      <BrandShort />
      <ServiceItems />
      <Industry industrie={servicePage.industrie} />
      <FAQ />
    </VorklyeLayout>
  );
};

export default page;

type HeroProps = {
  hero: ServicePageHero;
};

const Hero = ({ hero }: HeroProps) => {
  return (
    <section>
      <div className="container m-auto px-5 sm:px-8 lg:px-0 pt-5 sm:pt-32 lg:pt-50">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-50 items-start lg:items-end justify-between">
          <h1
            className="w-full lg:w-2/4 text-white hero-title"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          ></h1>
          <div className="w-full lg:w-1/3">
            <p className="hero-subtitle mb-6 sm:mb-10 lg:mb-14">
              {hero.subtitle}
            </p>

            <ButtonSm text={hero.button.label} href={hero.button.link} />
          </div>
        </div>
        <div className="about-banner mt-10 sm:mt-14 lg:mt-20">
          <img className="w-full" src={hero.image} alt="" />
        </div>
      </div>
    </section>
  );
};

type IndustryProps = {
  industrie: ServicePageIndustrie;
};
const Industry = ({ industrie }: IndustryProps) => {
  const { title, subtitle, button, industries } = industrie;
  return (
    <section className="py-12 sm:py-20 lg:py-30 border-b border-neutral-900">
      <div className="container m-auto px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:justify-between sm:items-end">
          <div>
            <p className="sub-title">{subtitle}</p>
            <h2
              className="section-title max-w-full sm:max-w-150"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
          <ButtonSm text={button.label} href={button.link} />
        </div>
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-10 sm:py-0 py-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 18,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
        >
          {industries.map((item) => (
            <SwiperSlide key={item.id}>
              <IndustryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
