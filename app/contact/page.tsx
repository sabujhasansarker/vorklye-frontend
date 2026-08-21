import { BrandShort } from "@/components/Brand";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import VorklyeLayout from "@/components/VorklyeLayout";
import { contactPage } from "@/data";
import React from "react";

type Props = {};

const page: React.FC<Props> = () => {
  const { title, description, supportImage } = contactPage;
  return (
    <VorklyeLayout>
      <section className="border-b border-neutral-900 pt-5 sm:pt-20 md:pt-28 lg:pt-40 xl:pt-50 pb-10">
        <div className="container mx-auto px-5 sm:px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 xl:gap-60">
            {/* LEFT CONTENT */}
            <div className="w-full lg:max-w-140 shrink-0">
              <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-normal md:leading-18 lg:leading-22">
                {title}
              </h2>

              {supportImage && (
                <img
                  src={supportImage}
                  alt=""
                  className="my-7 sm:my-8 md:my-10 h-14 sm:h-16 md:h-20 w-auto max-w-full object-contain object-left"
                />
              )}

              <p className="text-base sm:text-[17px] md:text-[18px] font-semibold leading-7 sm:leading-8 text-neutral-400 max-w-xl">
                {description}
              </p>
            </div>

            {/* CONTACT FORM */}
            <div className="w-full min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <BrandShort />
      <FAQ />
    </VorklyeLayout>
  );
};

export default page;
