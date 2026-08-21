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
      <div className="container m-auto pt-50">
        <div className="flex gap-50 items-end justify-between">
          <h1
            className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          ></h1>
          <div className="w-1/3">
            <p className="text-xl font-bold leading-9 mb-14">{hero.subtitle}</p>

            <ButtonSm text={hero.button.label} href={hero.button.link} />
          </div>
        </div>
        <div className="about-banner mt-20">
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
    <section className="py-30 border-b border-neutral-900">
      <div className="container m-auto">
        <div className="flex justify-between items-end">
          <div>
            <p className="sub-title">{subtitle}</p>
            <h2
              className="section-title max-w-120"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
          <ButtonSm text={button.label} href={button.link} />
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
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
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
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
