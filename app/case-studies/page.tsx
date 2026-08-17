"use client";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

type CaseStudy = {
  id: number;
  title: string;
  description: string;
  services: string[];
  industry: string;
  published: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Capital Growth Solutions",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Beauty",
    published: "2021",
    image: "/images/case-studies/1.png",
  },
  {
    id: 2,
    title: "Rovero Commerce Platform",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Fashion",
    published: "2023",
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
  },
  {
    id: 4,
    title: "Rovero Commerce Platform",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Fashion",
    published: "2023",
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
  },
  {
    id: 3,
    title: "Rovero Commerce Platform",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Fashion",
    published: "2023",
    image: "/images/case-studies/1.png",
  },
];

const Home = () => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="pt-50">
          <div className="container m-auto">
            <div className="flex gap-50 items-end justify-between">
              <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
                Case Studies
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  We’re more than a software company. We’re your strategic
                  partner in building purposeful, high-impact digital products
                  that grow with your business.
                </p>
                <ButtonSm text="Let’s Discuss Your Project" />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-30 pt-50 border-b border-neutral-900">
          <div className="container m-auto">
            <ul className="flex justify-start gap-30 text-xl font-semibold tracking-tight">
              <li>
                <a href="#" className="flex gap-4 items-center">
                  <div className="size-2 bg-white rounded-full"></div> All
                  projects
                </a>
              </li>
              <li>
                <a href="#">Home & Decor</a>
              </li>
              <li>
                <a href="#">Fashion & Apparel</a>
              </li>
              <li>
                <a href="#">Beauty & Cosmetics</a>
              </li>
            </ul>
            <div className="grid grid-cols-3 gap-6 gap-y-25 mt-10">
              {caseStudies.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.image}
                    className="w-full h-150 object-cover rounded-sm"
                    alt=""
                  />
                  <p className="text-sm font-bold mt-6 uppercase">
                    {item.industry}
                  </p>
                  <h4 className="text-2xl font-semibold mt-4 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[18px] leading-8 font-medium text-neutral-400 mt-3">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-10">
                    {item.services.map((service, index) => (
                      <p
                        key={index}
                        className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white text-[13px] font-semibold"
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
