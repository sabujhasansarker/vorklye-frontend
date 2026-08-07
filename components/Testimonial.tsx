import React from "react";

type Props = {};

const Testimonial: React.FC<Props> = () => {
  return (
    <div className="py-35">
      <div className="container m-auto">
        <p className="text-gray-200 text-lg font-medium leading-8">
          / Client Stories
        </p>
        <h2 className="section-title mt-4">
          <span className="text-neutral-500">Success </span>
          Stories
          <br />
          That Inspire Us
        </h2>
      </div>
      <div className="slider-items mt-18.75">
        <div className="w-96 h-176 min-w-96 relative rounded-3xl overflow-hidden">
          <img
            className="w-96 h-full relative"
            src="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif"
          />
          <a
            href="#"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 80 80"
              fill="none"
              className="w-25"
            >
              <rect
                width={80}
                height={80}
                rx={40}
                fill="white"
                fillOpacity="0.1"
              />
              <path
                d="M54.667 37.6913C56.4448 38.7177 56.4448 41.2837 54.667 42.3101L34.667 53.8571C32.8892 54.8835 30.667 53.6005 30.667 51.5477L30.667 28.4536C30.667 26.4008 32.8892 25.1178 34.667 26.1442L54.667 37.6913Z"
                fill="white"
              />
            </svg>
          </a>
          <div className="testimonial-item-content absolute bottom-6 left-8">
            <img src="/images/brand/3.png" alt="" />
            <p className="justify-start text-neutral-50 text-lg font-medium leading-7 mt-5.5">
              Design Monks did an amazing job bringing my brand to life. From
              the
            </p>
            <h4 className="justify-start text-neutral-50 text-xl font-semibold leading-6 mt-5">
              Tommy Lu
            </h4>
            <p className="justify-start text-neutral-300 text-base font-semibold leading-6 mt-2.5">
              Founder @ GoodGenes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
