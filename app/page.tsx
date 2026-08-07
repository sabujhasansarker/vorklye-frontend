"use client";
import About from "@/components/About";
import Activity from "@/components/Activity";
import Brand from "@/components/Brand";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import WorkingProcess from "@/components/WorkingProcess";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

      const sectionTitles = gsap.utils.toArray<HTMLElement>(".section-title");

      sectionTitles.forEach((title) => {
        const split = SplitText.create(title, {
          type: "words,chars",
          wordsClass: "split-word",
        });

        gsap.from(split.words, {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.02,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <About />
        <CaseStudies />
        <Brand />
        <Service />
        <WorkingProcess />
        <FAQ />
        <Activity />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
