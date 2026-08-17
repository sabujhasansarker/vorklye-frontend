"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ButtonNormal } from "./Button";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Brand Strategy",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "02",
    title: "Marketing",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "03",
    title: "Web Design",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "04",
    title: "UI/UX Design",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "05",
    title: "Social Media",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
];

const ServiceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLHeadingElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // permanently clip content so a collapsing item can never visually
      // leak past height:0, even mid-animation
      gsap.set(contentsRef.current, { overflow: "hidden" });
      gsap.set(contentsRef.current.slice(1), { height: 0, opacity: 0 });
      gsap.set(headersRef.current.slice(1), { color: "#404040" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      services.forEach((_, index) => {
        if (index === services.length - 1) return;

        tl.to(
          contentsRef.current[index],
          { height: 0, opacity: 0, duration: 1 },
          `step-${index}`,
        )
          .to(
            headersRef.current[index],
            { color: "#404040", duration: 1 },
            `step-${index}`,
          )
          .to(
            contentsRef.current[index + 1],
            { height: "auto", opacity: 1, duration: 1 },
            `step-${index}`,
          )
          .to(
            headersRef.current[index + 1],
            { color: "#ffffff", duration: 1 },
            `step-${index}`,
          );
        tl.set(
          contentsRef.current[index],
          { height: 0, opacity: 0 },
          `step-${index}+=1`,
        ).set(
          headersRef.current[index],
          { color: "#404040" },
          `step-${index}+=1`,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black text-white relative flex items-center overflow-hidden border-b border-neutral-900"
    >
      <div className="container m-auto flex gap-30 items-start px-6 relative">
        <div className="w-1/2 sticky top-0" ref={leftRef}>
          <p className="sub-title">/What we build</p>
          <h2 className="section-title">
            End-to-end Shopify systems, designed to scale the brand behind the
            store.
          </h2>
        </div>

        <div className="w-1/2 flex flex-col justify-start">
          {services.map(({ id, title, subtitle, description, tags }, index) => (
            <div
              key={id}
              className={`border-b border-neutral-800 ${index === 0 ? "pb-6" : "py-6"} w-full flex flex-col justify-start`}
            >
              <h4
                ref={(el) => {
                  if (el) headersRef.current[index] = el;
                }}
                className="text-4xl font-bold tracking-tight transition-colors duration-300 text-white"
              >
                {title}
              </h4>

              <div
                ref={(el) => {
                  if (el) contentsRef.current[index] = el;
                }}
                className="overflow-hidden"
              >
                <p className="text-neutral-500 text-md font-medium mt-4">
                  {subtitle}
                </p>
                <p className="text-neutral-300 text-xl font-normal leading-8 mt-6">
                  {description}
                </p>
                <div className="flex flex-wrap mt-8 gap-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white text-[13px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* {tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className="inline-flex justify-center items-center gap-5 text-sm text-neutral-400 font-semibold leading-6"
                    >
                      <span className="h-1.5 w-1.5 bg-neutral-400 rounded-full"></span>{" "}
                      {tag}
                    </p>
                  ))} */}
                </div>
                <div className="mt-15" data-cursor="Service Details">
                  <ButtonNormal text="Learn More" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

const serviceItems = [
  {
    title: "UI/UX Design",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp",
    des: "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
    services: [
      { id: 1, title: "UX Research Service", href: "#ux-research-service" },
      { id: 2, title: "UX Audit & Strategy", href: "#ux-audit-strategy" },
      { id: 3, title: "UX Usability Testing", href: "#ux-usability-testing" },
      { id: 4, title: "UI UX Consulting", href: "#ui-ux-consulting" },
      { id: 5, title: "UI UX Design", href: "#ui-ux-design" },
      { id: 6, title: "AI UI UX Design", href: "#ai-ui-ux-design" },
      { id: 7, title: "Design System", href: "#design-system" },
      {
        id: 8,
        title: "Wireframing and Prototyping",
        href: "#wireframing-prototyping",
      },
      { id: 9, title: "UI UX Redesign", href: "#ui-ux-redesign" },
    ],
  },
  {
    title: "Shopify Development",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp",
    des: "Build high-converting e-commerce storefronts. Our Shopify development services focus on speed, responsiveness, and scalable architectures tailored to your brand.",
    services: [
      {
        id: 1,
        title: "Custom Theme Development",
        href: "#shopify-custom-theme",
      },
      {
        id: 2,
        title: "App Integration & Setup",
        href: "#shopify-app-integration",
      },
      {
        id: 3,
        title: "Store Setup & Configuration",
        href: "#shopify-store-setup",
      },
      { id: 4, title: "Headless Shopify Commerce", href: "#shopify-headless" },
    ],
  },
  {
    title: "Platform Migration",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c4229130cd923555f69b_Mobile%20App%20Design-p-1080.webp",
    des: "Seamlessly transition your business infrastructure. We migrate data, logic, and designs securely without downtime, preserving your SEO rankings.",
    services: [
      { id: 1, title: "WooCommerce to Shopify", href: "#woo-to-shopify" },
      { id: 2, title: "Custom CMS Migration", href: "#custom-cms-migration" },
      {
        id: 3,
        title: "Database & SEO Preservation",
        href: "#seo-preservation",
      },
    ],
  },
  {
    title: "Growth & Optimization",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422529dc0db1881445e_Branding%20%26%20Identity-p-1080.webp",
    des: "Scale your revenue and digital footprints. We analyze user journeys and execute optimization strategies to turn current traffic into customer loops.",
    services: [
      {
        id: 1,
        title: "Conversion Rate Optimization (CRO)",
        href: "#cro-optimization",
      },
      {
        id: 2,
        title: "SEO Strategy & Marketing",
        href: "#seo-marketing-strategy",
      },
      {
        id: 3,
        title: "A/B Testing & Analytics",
        href: "#ab-testing-analytics",
      },
    ],
  },
];

export const ServiceItems: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const itemsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const contentRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = itemsRef.current;
      const images = imagesRef.current;
      const contents = contentRef.current;

      if (!items.length) return;

      const buildAnimation = () => {
        gsap.killTweensOf(items);
        gsap.killTweensOf(images);
        gsap.killTweensOf(contents);

        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === sectionRef.current) {
            trigger.kill();
          }
        });

        gsap.set(items, {
          y: 0,
        });

        gsap.set(items.slice(1), {
          y: () => window.innerHeight,
        });

        gsap.set(images, {
          y: 60,
          scale: 1.08,
          opacity: 0.7,
        });

        gsap.set(images[0], {
          y: 0,
          scale: 1,
          opacity: 1,
        });

        gsap.set(contents, {
          y: 0,
          opacity: 0.4,
        });

        gsap.set(contents[0], {
          y: 0,
          opacity: 1,
        });

        const overflowValues = contents.map((content) => {
          const viewportHeight = content.parentElement?.clientHeight || 0;
          const contentHeight = content.scrollHeight;

          return Math.max(0, contentHeight - viewportHeight);
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            end: () => {
              let total = 0;

              overflowValues.forEach((overflow) => {
                total += overflow > 0 ? 1.5 + overflow / 500 : 1;
              });

              return `+=${total * 100}%`;
            },
          },
        });

        items.forEach((item, index) => {
          const overflow = overflowValues[index];

          if (overflow > 0) {
            const scrollDuration = Math.max(0.35, overflow / 1000);

            tl.to(
              contents[index],
              {
                y: -overflow,
                duration: scrollDuration,
                ease: "none",
              },
              "+=0.05",
            );
          }

          if (index === items.length - 1) return;

          const previousIndex = index;

          tl.to(
            images[previousIndex],
            {
              y: -50,
              scale: 1.04,
              opacity: 0.45,
              duration: 1,
              ease: "none",
            },
            ">",
          );

          tl.to(
            contents[previousIndex],
            {
              opacity: 0.35,
              duration: 1,
              ease: "none",
            },
            "<",
          );

          tl.to(
            items[index + 1],
            {
              y: 0,
              duration: 1,
              ease: "none",
            },
            "<",
          );

          tl.to(
            images[index + 1],
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "none",
            },
            "<",
          );

          tl.to(
            contents[index + 1],
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "none",
            },
            "<",
          );
        });
      };

      const start = () => {
        buildAnimation();
        ScrollTrigger.refresh();
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(start);
      } else {
        requestAnimationFrame(start);
      }

      let resizeTimer: ReturnType<typeof setTimeout>;

      const handleResize = () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          buildAnimation();
          ScrollTrigger.refresh();
        }, 200);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", handleResize);
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden border-b border-neutral-900 bg-black"
    >
      <div className="container mx-auto h-full">
        <div className="grid h-full grid-cols-1 overflow-hidden">
          {serviceItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              className="col-start-1 row-start-1 h-screen w-full bg-black"
            >
              <div className="flex h-full w-full gap-25">
                <div className="h-screen w-1/2 overflow-hidden">
                  <img
                    ref={(el) => {
                      if (el) {
                        imagesRef.current[index] = el;
                      }
                    }}
                    src={item.image}
                    alt={item.title}
                    className="block h-full w-full object-cover"
                  />
                </div>

                <div className="h-screen w-1/2 overflow-hidden">
                  <div
                    ref={(el) => {
                      if (el) {
                        contentRef.current[index] = el;
                      }
                    }}
                    className="flex flex-col gap-30 py-20 justify-around h-full"
                  >
                    <div>
                      <h4 className="text-3xl font-bold leading-9 text-gray-200">
                        {item.title}
                      </h4>

                      <p className="my-5 text-[18px] font-medium leading-8 text-neutral-400">
                        {item.des}
                      </p>

                      <div className="mt-10">
                        {item.services.map((service) => (
                          <div
                            key={service.id}
                            className="flex justify-between border-b border-neutral-900 py-5"
                          >
                            <div className="flex gap-5">
                              <p className="text-lg font-bold leading-5 text-zinc-500">
                                {service.id <= 9
                                  ? `0${service.id}`
                                  : service.id}
                              </p>

                              <h4 className="text-[19px] font-semibold leading-6 text-neutral-300">
                                {service.title}
                              </h4>
                            </div>

                            <ArrowUpRight className="shrink-0 text-zinc-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif"
                      alt=""
                      className="w-60 shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
