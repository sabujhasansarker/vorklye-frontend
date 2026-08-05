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
import { Fragment } from "react/jsx-runtime";

const Home = () => {
  const brands = [
    { id: 1, image: "/images/brand/1.png" },
    { id: 2, image: "/images/brand/2.png" },
    { id: 3, image: "/images/brand/3.png" },
    { id: 4, image: "/images/brand/4.png" },
    { id: 5, image: "/images/brand/5.png" },
    { id: 6, image: "/images/brand/6.png" },
    { id: 7, image: "/images/brand/7.png" },
    { id: 8, image: "/images/brand/8.png" },
    { id: 9, image: "/images/brand/9.png" },
    { id: 10, image: "/images/brand/10.png" },
    { id: 11, image: "/images/brand/11.png" },
    { id: 12, image: "/images/brand/12.png" },
    { id: 13, image: "/images/brand/13.png" },
    { id: 14, image: "/images/brand/14.png" },
    { id: 15, image: "/images/brand/15.png" },
    { id: 16, image: "/images/brand/16.png" },
    { id: 17, image: "/images/brand/17.png" },
    { id: 18, image: "/images/brand/18.png" },
    { id: 19, image: "/images/brand/19.png" },
    { id: 20, image: "/images/brand/20.png" },
    { id: 21, image: "/images/brand/21.png" },
    { id: 22, image: "/images/brand/22.png" },
  ];

  const col1 = [
    {
      value: "1.8M",
      text: "We helped to get companies with $200M+ funding.",
      active: true,
    },
    {
      value: "12+",
      text: "We have had quite a run in our 12+ years of working.",
    },
    { value: "99%", text: "Average 99% clients satisfaction with expertise." },
  ];

  const col2 = [
    { value: "260+", text: "Crafted responsive, user-centered website & app." },
    { value: "80+", text: "Professional skilled designers and developers." },
  ];

  return (
    <Fragment>
      <Hero />
      {/* About */}
      <About />
      {/* Case Studies */}
      <CaseStudies />
      {/* Brand */}
      <Brand />
      {/* Service */}
      <Service />
      {/* Working process */}
      <WorkingProcess />
      {/* FAQ */}
      <FAQ />
      <Activity />
      {/* Testimonial */}
      <Testimonial />
      {/* footer */}
      <Footer />
    </Fragment>
  );
};

export default Home;
