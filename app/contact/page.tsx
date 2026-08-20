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
      <section className="pt-50 pb-10">
        <div className="container m-auto">
          <div className="flex gap-60">
            <div className="max-w-140">
              <div className="">
                <h2 className="section-title text-6xl leading-22">{title}</h2>
                <img src={supportImage} alt="" className="my-10 h-20" />
                <p className="text-[18px] font-semibold text-neutral-400">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full">
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
