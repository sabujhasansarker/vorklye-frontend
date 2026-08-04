import { ArrowDownRight, ArrowUpRight, ChevronDown } from "lucide-react";
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

  return (
    <Fragment>
      <div className="relative pt-77.5 min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 container m-auto">
          <img src="/images/shopifyplus.svg" alt="" />
          <div className="flex justify-between items-end">
            <h1 className="max-w-225 justify-center text-white text-8xl font-extrabold leading-35 mt-18.25">
              We design, develop and build
            </h1>
            <div className="inline-flex justify-start items-start gap-5 max-w-100 mb-5">
              <img
                className="size-4 mt-2.5"
                src="/images/hero-icon.svg"
                alt=""
              />
              <p className="justify-center text-gray-200 text-xl font-normal leading-9">
                We're a design and development agency since 2017 who craft
                digital masterpiece products.
              </p>
            </div>
          </div>
          <div className="pt-37.5">
            <div className="flex gap-10 items-center">
              <p className="justify-center text-neutral-500 text-lg font-medium leading-7">
                Shopify partner trusted by great clients
              </p>
              <div className="max-w-135.5 h-9 relative">
                <div className="left-0 top-0 absolute inline-flex justify-start items-center gap-10">
                  {brands.map(
                    (brand) =>
                      brand.id < 5 && (
                        <img src={brand.image} key={brand.id} alt="" />
                      ),
                  )}
                </div>
                <div className="w-20 h-7 left-0 top-1 absolute bg-linear-to-r from-black to-black/0" />
                <div className="w-20 h-9 left-115.5 top-0 absolute bg-linear-to-r from-black/0 to-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="border-b border-neutral-900 py-42.5 text-center">
        <div className="container m-auto">
          <p className="max-w-276 m-auto text-center justify-start text-gray-200 text-3xl font-medium leading-12.5">
            Welcome to Vorklye — We&apos;re a Shopify design and development
            studio, dedicated to bringing your brand&apos;s essence to life
            online. From custom themes to seamless user experiences, every
            project is a bespoke journey — we collaborate closely with you to
            build something that truly stands out.
          </p>

          <a href="#" className="btn-underline mt-17.5 ">
            <span>More about us</span>
            <ArrowDownRight />
          </a>
        </div>
      </div>
      {/* Case Studies */}
      <div className="container m-auto pt-42.5">
        <div className="flex gap-17.5">
          <p className="justify-start text-gray-200 text-lg font-medium mt-3.75">
            /Case Studies
          </p>
          <h2 className="section-title max-w-190.25">
            Real stories, real results – see what we’ve made possible.
          </h2>
        </div>
        <div className="case-studies pt-20">
          <div className="case-studie-item border border-neutral-900 flex gap-37 items-center">
            <div className="case-studie-item-content p-15">
              <img src="images/brand/3.png" alt="" />
              <h4 className="justify-start text-gray-200 text-3xl font-semibold leading-9 my-5">
                Capital Growth Solutions
              </h4>
              <p className="max-w-123.75 justify-start text-gray-200 text-lg font-medium leading-8">
                Tailored consult service businesses, focusing on growth
                strategies. Sed velit dignissim sodales ut eu sminte
              </p>
              <div className="size- inline-flex justify-start items-start gap-28 mt-15">
                <div className="size- inline-flex flex-col justify-start items-start gap-3.5">
                  <div className="justify-start text-neutral-500 text-sm font-semibold uppercase leading-6">
                    Services
                  </div>
                  <div className="size- flex flex-col justify-start items-start gap-3">
                    <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                      Migration
                    </div>
                    <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                      Integrations
                    </div>
                  </div>
                </div>
                <div className="size- inline-flex flex-col justify-start items-start gap-3.5">
                  <div className="justify-start text-neutral-500 text-sm font-semibold uppercase leading-6">
                    Industry
                  </div>
                  <div className="size- flex flex-col justify-start items-start gap-3">
                    <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                      Beauty
                    </div>
                  </div>
                </div>
                <div className="size- inline-flex flex-col justify-start items-start gap-3.5">
                  <div className="justify-start text-neutral-500 text-sm font-semibold uppercase leading-6">
                    Published
                  </div>
                  <div className="size- flex flex-col justify-start items-start gap-3">
                    <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                      2021
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="btn-underline mt-20">
                <span>More about us</span>
                <ArrowDownRight />
              </a>
            </div>
            <img src="/images/case-studies/1.png" className="h-full" alt="" />
          </div>
        </div>
        <div className="m-auto text-center mt-25">
          <a href="#" className="btn-primary">
            <span>More works</span>
            <ArrowDownRight />
          </a>
        </div>
      </div>
      {/* Brand */}
      <div className="py-42.5 border-b border-neutral-900">
        <div className="container m-auto">
          <h2 className="max-w-361.5 section-title">
            We’re a team of commerce specialists who have helped countless{" "}
            <span className="text-neutral-500">
              brands build, grow and increase.
            </span>
          </h2>

          <div className="grid grid-cols-7 gap-17.5 mt-25">
            {brands.map(
              (brand) =>
                brand.id <= 21 && (
                  <img src={brand.image} key={brand.id} alt="" />
                ),
            )}
          </div>
          <div className="text-center mt-25">
            <a
              href="#"
              className="inline-flex justify-start items-center gap-3.5 text-neutral-500"
            >
              <span className="text-base font-semibold leading-7">
                More brands
              </span>
              <ChevronDown />
            </a>
          </div>
        </div>
      </div>
      {/* Service */}
      <div className="py-35 border-b border-neutral-900">
        <div className="container m-auto">
          <div className="flex gap-8.75">
            <div className="max-w-156.25">
              <p className="justify-start text-gray-200 text-lg font-medium leading-8">
                /What we build
              </p>
              <h2 className="section-title mt-7.5">
                End-to-end Shopify systems, designed to scale the brand behind
                the store.
              </h2>
            </div>
            <div className="service-items w-full">
              <div className="service-item p-10 border border-neutral-900">
                <div className="flex gap-5">
                  <p className="justify-start text-gray-200 text-base font-extrabold leading-7">
                    02
                  </p>
                  <h4 className="justify-start text-gray-200 text-3xl font-semibold leading-9">
                    WordPress Development
                  </h4>
                </div>
                <p className="max-w-136.25 justify-start text-gray-200 text-base font-medium leading-7 mt-12">
                  Custom Shopify and Shopify Plus builds designed for
                  performance, flexibility, checkout, markets, and
                  location-aware logic.
                </p>
                <div className="flex mt-7 gap-x-2 gap-y-3">
                  <a
                    href="#"
                    className="size- px-5 py-3 bg-neutral-900 inline-flex justify-center items-center gap-14 text-gray-200 text-sm font-medium leading-6"
                  >
                    Shopify Store Setup
                  </a>
                  <a
                    href="#"
                    className="size- px-5 py-3 bg-neutral-900 inline-flex justify-center items-center gap-14 text-gray-200 text-sm font-medium leading-6"
                  >
                    Custom Shopify Development
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Working process */}
      <div className="pt-35">
        <div className="container m-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="justify-start text-gray-200 text-lg font-medium font-['Guminert'] leading-8">
                / Working process
              </p>
              <h2 className="section-title mt-7.5">How it works</h2>
            </div>
            <a href="#" className="btn-primary">
              <span>Get in touch</span>
              <ArrowDownRight />
            </a>
          </div>
        </div>
        <div className="working-process-items mt-25">
          <div className="working-process-item flex">
            <div className="working-process-item-content">
              <p className="justify-start text-gray-200 text-3xl font-semibold leading-7">
                02
              </p>
              <h4 className="text-gray-200 text-3xl font-semibold leading-20 mt-7.5">
                Scale smart
              </h4>
              <p className="text-neutral-500 text-lg font-medium leading-7 mt-10">
                We start by understanding your business, goals, target audience,
                and competitors to build a clear project foundation.
              </p>
              <div className="flex mt-13.5">
                <a
                  href="#"
                  className="size- px-5 py-3 outline -outline-offset-1 outline-neutral-500 inline-flex justify-center items-center gap-14 text-neutral-500 text-base font-medium font-['Guminert'] leading-6"
                >
                  Video meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="py-42.5 border-b border-neutral-900">
        <div className="container m-auto">
          <h2 className="section-title">
            Frequently{" "}
            <span className="text-neutral-500">
              asked
              <br />
              questions
            </span>
          </h2>
          <div className="flex gap-10 mt-20 justify-between">
            <div className="accordion-items w-full">
              <div className="accordion-item border-b border-neutral-900 py-8">
                <div className="accordion-item-title flex justify-between w-full">
                  <h4 className="text-gray-200 text-xl font-semibold leading-7">
                    What are your focus areas as a UI/UX design agency?
                  </h4>
                  <ArrowUpRight className="text-[#1B1B1B]" />
                </div>
              </div>
              <div className="accordion-item border-b border-neutral-900 py-8">
                <div className="accordion-item-title flex justify-between w-full pb-8">
                  <h4 className="text-gray-200 text-xl font-semibold leading-7">
                    What are your focus areas as a UI/UX design agency?
                  </h4>
                  <ArrowUpRight className="text-[#1B1B1B]" />
                </div>
                <div className="accordion-item-content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    eius iure dignissimos? Maxime necessitatibus magnam quam
                    consectetur inventore placeat, delectus enim officiis
                    reprehenderit itaque voluptate consequatur nobis libero
                    totam ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-80 p-8 bg-neutral-900 inline-flex flex-col justify-start items-start">
              <img
                className="size-16 relative"
                src="https://placehold.co/62x62"
              />
              <h4 className="text-white text-lg font-medium leading-7 mt-4">
                Hi, I&apos;m Ariyan, the CEO and Founder of Vorklye. Don’t
                hesitate to reach out to me anytime – I’m here to answer all
                your questions!
              </h4>
              <a
                href="#"
                className="mt-7 py-4 w-full relative bg-green-400 rounded-sm inline-flex justify-center items-center gap-2.5"
              >
                <span className="text-black text-lg font-medium leading-7">
                  Ask Questions
                </span>
                <img
                  className="self-stretch h-6 relative"
                  src="/images/whatapp-icon.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
