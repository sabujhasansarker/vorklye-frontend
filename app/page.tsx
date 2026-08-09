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
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Home = () => {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  // useLayoutEffect + empty dep, কিন্তু আসল কথা হলো এই component
  // parent, তাই এর effect শেষে চলবে — সেটা মেনে নিয়েই নিচের ধাপে
  // fix করা হচ্ছে: শুধু smoother বানানো, refresh centralize করা
  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    const sectionTitles = gsap.utils.toArray<HTMLElement>(".section-title");
    sectionTitles.forEach((title) => {
      const split = SplitText.create(title, {
        type: "words,chars,lines",
        linesClass: "lines",
        wordsClass: "words",
        charsClass: "chars",
      });
      gsap.from(split.words, {
        y: "80",
        duration: 0.5,
        stagger: 0.02,
        opacity: 0,
        delay: 0.15,
        ease: "circ.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // সব section মাউন্ট + fonts ready হওয়ার পর ফাইনাল, একবারই refresh
    const refreshAll = () => ScrollTrigger.refresh();
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(refreshAll);
      (window as any).__rafCleanup = () => cancelAnimationFrame(raf2);
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(refreshAll);
    }
    window.addEventListener("load", refreshAll);

    return () => {
      cancelAnimationFrame(raf1);
      (window as any).__rafCleanup?.();
      window.removeEventListener("load", refreshAll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      smootherRef.current?.kill();
    };
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
