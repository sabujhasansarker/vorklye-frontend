import { ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {};

const FAQ: React.FC<Props> = () => {
  return (
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
                  reprehenderit itaque voluptate consequatur nobis libero totam
                  ipsum.
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
              hesitate to reach out to me anytime – I’m here to answer all your
              questions!
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
  );
};

export default FAQ;
