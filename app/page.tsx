import About from "@/components/About";
import Activity from "@/components/Activity";
import Brand from "@/components/Brand";
import CaseStudiesSection from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import VorklyeLayout from "@/components/VorklyeLayout";
import WorkingProcess from "@/components/WorkingProcess";

const Home = () => {
  return (
    <VorklyeLayout>
      <Hero />
      <About />
      <CaseStudiesSection />
      <Brand />
      <ServiceSection />
      <WorkingProcess />
      <FAQ />
      <Activity />
      <Testimonial />
      <Footer />
    </VorklyeLayout>
  );
};

export default Home;
