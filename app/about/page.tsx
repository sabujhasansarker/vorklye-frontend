import { BrandShort } from "@/components/Brand";
import Button, { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import VorklyeLayout from "@/components/VorklyeLayout";
import { aboutPage } from "@/data";
import { AboutHero, AboutTeam, VisionMission } from "@/data/type";

const AboutPage = () => {
  return (
    <VorklyeLayout>
      <Hero hero={aboutPage.hero} />
      <BrandShort />
      <section className="border-b border-neutral-900 py-14 sm:py-16 md:py-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-30 gap-y-12 sm:gap-y-14 md:gap-y-16">
            {aboutPage.counter.map((count, index) => (
              <div className="counter-item text-center" key={index}>
                <h4 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 md:mb-6">
                  {count.value}
                </h4>

                <p className="text-sm sm:text-base md:text-xl font-medium leading-6 sm:leading-7 md:leading-8 max-w-[180px] sm:max-w-[200px] mx-auto text-neutral-300">
                  {count.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* vission mission */}
      <VissionMission vissionMission={aboutPage.visionMission} />
      <Team team={aboutPage.team} />
      <FAQ />
    </VorklyeLayout>
  );
};

export default AboutPage;

type HeroProps = {
  hero: AboutHero;
};

const Hero = ({ hero }: HeroProps) => {
  const { title, subtitle, button, videoUrl } = hero;
  return (
    <section>
      <div className="container m-auto px-5 sm:px-8 lg:px-0 pt-5 sm:pt-32 lg:pt-50">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-50 items-start lg:items-end justify-between">
          <h1
            className="w-full lg:w-2/4 text-white hero-title"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          ></h1>
          <div className="w-full lg:w-1/3">
            <p className="hero-subtitle mb-6 sm:mb-10 lg:mb-14">
              {hero.subtitle}
            </p>

            <ButtonSm text={hero.button.label} href={hero.button.link} />
          </div>
        </div>
        <div className="about-banner mt-10 sm:mt-14 lg:mt-20">
          <img
            className="w-full max-h-150 object-cover object-top"
            src="/images/about.avif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

type VissionMissionProps = {
  vissionMission: VisionMission;
};

const VissionMission = ({ vissionMission }: VissionMissionProps) => {
  const { top, bottom, meddle } = vissionMission;

  return (
    <section className="border-b border-neutral-900 py-16 sm:py-20 md:py-28 lg:py-40">
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        {/* ================= TOP / MISSION ================= */}
        {top && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 lg:gap-20">
            {/* CONTENT */}
            <div className="w-full md:w-2/3 md:pr-10 lg:pr-20 xl:pr-32">
              <p className="sub-title mb-4 sm:mb-5">{top.subtitle}</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-9 sm:leading-11 md:leading-13 lg:leading-15 font-semibold tracking-tight">
                {top.title}
              </h2>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/3">
              <img
                src={top.image}
                alt={top.subtitle || "Mission"}
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* ================= MIDDLE IMAGES ================= */}
        {meddle?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10">
            {meddle.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={img}
                  alt={`Vision mission ${index + 1}`}
                  className="block w-full h-auto aspect-[4/3] object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* ================= BOTTOM / VISION ================= */}
        {bottom && (
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-20 mt-6 sm:mt-8 md:mt-10">
            {/* IMAGE */}
            <div className="w-full md:w-1/3">
              <img
                src={bottom.image}
                alt={bottom.subtitle || "Vision"}
                className="block w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-2/3 md:pl-10 lg:pl-20 xl:pl-34">
              <p className="sub-title mb-4 sm:mb-5">{bottom.subtitle}</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-9 sm:leading-11 md:leading-13 lg:leading-15 font-semibold tracking-tight">
                {bottom.title}
              </h2>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

type TeamProps = {
  team: AboutTeam;
};

const Team = ({ team }: TeamProps) => {
  const { title, subtitle, button, teams } = team;

  return (
    <section className="border-b border-neutral-900 py-16 sm:py-20 md:py-28 lg:py-40">
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 lg:gap-20">
          <div className="w-full md:max-w-4xl">
            <p className="sub-title mb-4 sm:mb-5">{subtitle}</p>

            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>

          {button && (
            <div className="shrink-0">
              <Button text={button.label} href={button.link} />
            </div>
          )}
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-10 sm:gap-y-12 lg:gap-y-15 mt-10 sm:mt-12 md:mt-15">
          {teams.map((member, index) => (
            <div className="team-item min-w-0" key={index}>
              {/* IMAGE */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={member.image}
                  className="block w-full aspect-4/5 object-cover"
                  alt={member.name}
                />
              </div>

              {/* INFO */}
              <h5 className="text-lg sm:text-xl md:text-[22px] font-semibold mt-4 sm:mt-5 md:mt-6 mb-2 sm:mb-3 text-white tracking-tight">
                {member.name}
              </h5>

              <p className="text-base sm:text-base md:text-[18px] font-medium leading-6 text-neutral-500">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
