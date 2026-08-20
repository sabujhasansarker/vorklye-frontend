import { BrandShort } from "@/components/Brand";
import Button, { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import VorklyeLayout from "@/components/VorklyeLayout";
import { aboutPage } from "@/data";

const AboutPage = () => {
  return (
    <VorklyeLayout>
      <Hero hero={aboutPage.hero} />
      <BrandShort />
      <section className="border-b border-neutral-900 py-20">
        <div className="container m-auto">
          <div className="grid grid-cols-4 gap-30 flex-wrap">
            {aboutPage.counter.map((count, index) => (
              <div className="counter-item text-center" key={index}>
                <h4 className="text-6xl font-extrabold tracking-tight mb-6">
                  {count.value}
                </h4>
                <p className="text-xl font-medium leading-8 max-w-50 m-auto">
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

const Hero = ({ hero }: any) => {
  const { title, subtitle, button, videoUrl } = hero;
  return (
    <section>
      <div className="container m-auto pt-50">
        <div className="flex gap-50 items-end justify-between">
          {title && (
            <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
              {title}
            </h1>
          )}
          <div className="w-1/3">
            {subtitle && (
              <p className="text-xl font-bold leading-9 mb-14">{subtitle}</p>
            )}
            {button && <ButtonSm text={button.label} href={button.link} />}
          </div>
        </div>
        <div className="about-banner mt-20">
          <img
            className="w-full"
            src="https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const VissionMission = ({ vissionMission }: any) => {
  const { top, bottom, meddle } = vissionMission;
  return (
    <section className="py-40 border-b border-neutral-900">
      <div className="container m-auto">
        {top && (
          <div className="flex justify-between items-center gap-6">
            <div className="w-2/3 pr-32">
              <p className="sub-title">{top.subtitle} </p>
              <h2 className="text-4xl leading-15 font-semibold">{top.title}</h2>
            </div>
            <div className="w-1/3 pl-2">
              <img src={top.image} alt="" className="w-full" />
            </div>
          </div>
        )}
        {meddle && (
          <div className="flex gap-6 mt-6">
            {meddle.map((img, index) => (
              <img key={index} src={img} alt="" className="w-1/3" />
            ))}
          </div>
        )}
        {bottom && (
          <div className="flex items-center gap-6 mt-6">
            <img src={bottom.image} alt="" className="w-1/3" />
            <div className="w-2/3 pl-34">
              <p className="sub-title">{bottom.subtitle}</p>
              <h2 className="text-4xl leading-15 font-semibold">
                {bottom.title}
              </h2>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Team = ({ team }: any) => {
  const { title, subtitle, button, teams } = team;
  return (
    <section className="py-40 border-b border-neutral-900">
      <div className="container m-auto">
        <div className="flex justify-between items-baseline-last gap-40">
          <div className="w-2/3">
            <p className="sub-title shrink-0 mt-4">{subtitle}</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <Button text={button.label} href={button.link} />
        </div>
        <div className="grid grid-cols-4 gap-6 mt-15">
          {teams.map((team, index) => (
            <div className="team-item" key={index}>
              <img src={team.image} className="w-full rounded-sm" alt="" />
              <h5 className="text-[22px] font-semibold mt-6 mb-3 text-white">
                {team.name}
              </h5>
              <p className="text-[18px] font-medium text-neutral-500">
                {team.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
