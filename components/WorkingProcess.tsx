import { ArrowDownRight } from "lucide-react";
import React from "react";

type Props = {};

const WorkingProcess: React.FC<Props> = () => {
  return (
    <div className="pt-35">
      <div className="container m-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="justify-start text-gray-200 text-lg font-medium leading-8">
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
                className="px-5 py-3 outline -outline-offset-1 outline-neutral-500 inline-flex justify-center items-center gap-14 text-neutral-500 text-base font-medium leading-6"
              >
                Video meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
