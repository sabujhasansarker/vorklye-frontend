"use client";
import { BrandShort } from "@/components/Brand";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import IndustryCard from "@/components/IndustryCard";
import { ServiceItems } from "@/components/Service";
import { industries, servicesPageData } from "@/data";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Home = () => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section>
          <div className="container m-auto pt-50">
            <div className="flex gap-50 items-end justify-between">
              <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
                {servicesPageData.heroTitle}
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  {servicesPageData.heroSubtitle}
                </p>

                <ButtonSm text={servicesPageData.heroCtaText} />
              </div>
            </div>
            <div className="about-banner mt-20">
              <img
                className="w-full"
                src={servicesPageData.bannerImage}
                alt=""
              />
            </div>
          </div>
        </section>
        <BrandShort />
        <ServiceItems />
        <section className="py-30 border-b border-neutral-900">
          <div className="container m-auto">
            <div className="flex justify-between items-end">
              <div>
                <p className="sub-title">
                  {servicesPageData.industriesSubtitle}
                </p>
                <h2
                  className="section-title max-w-120"
                  dangerouslySetInnerHTML={{
                    __html: servicesPageData.industriesTitle,
                  }}
                />
              </div>
              <ButtonSm text={servicesPageData.consultButtonText} />
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
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
