"use client";
import { BrandShort } from "@/components/Brand";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import IndustryCard from "@/components/IndustryCard";
import { ServiceItems } from "@/components/Service";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const industries = [
  {
    id: 1,
    title: "Finance & Fintech",
    des: "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8700162359f97782eb_Frame%202147203191.webp",
  },
  {
    id: 2,
    title: "E-Commerce & DTC",
    des: "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8663ee6ba76a5af586_Frame%202147203193.webp",
  },
  {
    id: 3,
    title: "SaaS & B2B Platforms",
    des: "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc88ff1994c95ae66383_Frame%202147203194.webp",
  },
  {
    id: 6,
    title: "Finance & Fintech",
    des: "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8700162359f97782eb_Frame%202147203191.webp",
  },
  {
    id: 4,
    title: "E-Commerce & DTC",
    des: "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8663ee6ba76a5af586_Frame%202147203193.webp",
  },
  {
    id: 5,
    title: "SaaS & B2B Platforms",
    des: "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc88ff1994c95ae66383_Frame%202147203194.webp",
  },
];

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
                Everything Your Brand Needs to Build, Grow and Scale
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  From the first brand strategy session to the final line of
                  code, we handle every dimension of your growth under one roof.
                </p>

                <ButtonSm text="Let’s Discuss Your Project" />
              </div>
            </div>
            <div className="about-banner mt-20">
              <img
                className="w-full"
                src="https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp"
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
                <p className="sub-title">/ Industries</p>
                <h2 className="section-title max-w-120">
                  Industry expertise <span>‍across globally</span>
                </h2>
              </div>
              <ButtonSm text="Consult an expert" />
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
