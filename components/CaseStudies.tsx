import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {};

const CaseStudies: React.FC<Props> = () => {
  return (
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
            <div className="inline-flex justify-start items-start gap-28 mt-15">
              <div className="inline-flex flex-col justify-start items-start gap-3.5">
                <div className="justify-start text-neutral-500 text-sm font-semibold uppercase leading-6">
                  Services
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                    Migration
                  </div>
                  <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                    Integrations
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-3.5">
                <div className="justify-start text-neutral-500 text-sm font-semibold uppercase leading-6">
                  Industry
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="justify-start text-gray-200 text-lg font-medium leading-7">
                    Beauty
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-3.5">
                <div className="justify-start text-neutral-500 text-sm font-semibold uppercase leading-6">
                  Published
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
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
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
