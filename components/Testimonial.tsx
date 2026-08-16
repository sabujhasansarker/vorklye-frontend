import { sliderProps } from "@/utility/sliderProps";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};
type Testimonial = {
  id: number;
  video: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
};
const testimonials: Testimonial[] = [
  {
    id: 1,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/3.png",
    quote:
      "Design Monks did an amazing job bringing my brand to life. From the",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
  },
  {
    id: 2,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/4.png",
    quote:
      "The team really understood our vision and delivered beyond what we expected.",
    name: "Sarah Kim",
    role: "CEO @ Nova Studio",
  },
  {
    id: 3,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/5.png",
    quote:
      "Communication was smooth throughout the project and the results speak for themselves.",
    name: "James Carter",
    role: "Founder @ Blume",
  },
  {
    id: 4,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/6.png",
    quote:
      "Professional, fast, and genuinely invested in our success. Highly recommend.",
    name: "Elena Marsh",
    role: "CMO @ Fenix",
  },
  {
    id: 5,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/3.png",
    quote:
      "Design Monks did an amazing job bringing my brand to life. From the",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
  },
  {
    id: 6,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/4.png",
    quote:
      "The team really understood our vision and delivered beyond what we expected.",
    name: "Sarah Kim",
    role: "CEO @ Nova Studio",
  },
  {
    id: 7,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/5.png",
    quote:
      "Communication was smooth throughout the project and the results speak for themselves.",
    name: "James Carter",
    role: "Founder @ Blume",
  },
  {
    id: 8,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    logo: "/images/brand/6.png",
    quote:
      "Professional, fast, and genuinely invested in our success. Highly recommend.",
    name: "Elena Marsh",
    role: "CMO @ Fenix",
  },
];

const Testimonial: React.FC<Props> = () => {
  return (
    <div className="py-35">
      <div className="container m-auto">
        <p className="sub-title">/ Client Stories</p>
        <h2 className="section-title">
          <span className="text-neutral-500">Success </span>
          Stories
          <br />
          That Inspire Us
        </h2>
      </div>
      <Swiper {...sliderProps.testimonial} className="slider-items mt-18.75">
        {testimonials.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-96 h-176 min-w-96 relative rounded-[10px] overflow-hidden"
          >
            <img
              className="w-96 h-full relative"
              src={item.video}
              alt={item.name}
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
            <div className="testimonial-item-content absolute bottom-6 left-8 right-4">
              <img src={item.logo} alt="" />
              <p className="justify-start text-neutral-50 text-lg font-medium leading-7 mt-5.5">
                {item.quote}
              </p>
              <h4 className="justify-start text-neutral-50 text-xl font-semibold leading-6 mt-5">
                {item.name}
              </h4>
              <p className="justify-start text-neutral-300 text-base font-semibold leading-6 mt-2.5">
                {item.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
