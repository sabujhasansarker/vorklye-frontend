"use client";
import About from "@/components/About";
import Activity from "@/components/Activity";
import Brand from "@/components/Brand";
import CaseStudiesSection from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import WorkingProcess from "@/components/WorkingProcess";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

      const sectionTitles = gsap.utils.toArray<HTMLElement>(".section-title");

      // Split title animation
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

      // Horizontal scroll animation ONLY for Working Process section
      const processSection =
        document.querySelector<HTMLElement>("#working-process-section");
      const processTrack =
        document.querySelector<HTMLElement>("#working-process-track");
      const processCards = document.querySelectorAll<HTMLElement>(
        ".working-process-item",
      );

      if (processSection && processTrack && processCards.length > 0) {
        const getDistance = () => {
          const firstCard = processCards[0];
          const lastCard = processCards[processCards.length - 1];
          return lastCard.offsetLeft - firstCard.offsetLeft;
        };

        gsap.to(processTrack, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: processSection,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      return () => {
        smoother.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <About />
        <CaseStudiesSection />
        <Brand />
        <ServiceSection />
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
