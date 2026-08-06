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
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
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
