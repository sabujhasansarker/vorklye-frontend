import React from "react";

type Props = {};

const Activity: React.FC<Props> = () => {
  const col1 = [
    {
      value: "1.8M",
      text: "We helped to get companies with $200M+ funding.",
      active: true,
    },
    {
      value: "12+",
      text: "We have had quite a run in our 12+ years of working.",
    },
    { value: "99%", text: "Average 99% clients satisfaction with expertise." },
  ];

  const col2 = [
    { value: "260+", text: "Crafted responsive, user-centered website & app." },
    { value: "80+", text: "Professional skilled designers and developers." },
  ];
  return (
    <div className="bg-neutral-950 py-35">
      <div className="container m-auto">
        <div className="flex gap-[200px]">
          <h2 className="section-title">
            Perfect <br /> — activity
          </h2>
          <div className="relative mx-auto max-w-[920px] py-20">
            {/* Background Grid Lines (Total 8 Lines: 4 for Col 1, 4 for Col 2) */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
              {/* Column 1 Background (4 vertical lines) */}
              <div className="flex h-full justify-between border-x border-white/10 px-8">
                <div className="w-px bg-white/10" />
              </div>

              {/* Column 2 Background (4 vertical lines) */}
              <div className="flex h-full justify-between border-x border-white/10 px-8">
                <div className="w-px bg-white/10" />
                <div className="w-px bg-white/10" />
              </div>
            </div>

            {/* Content (2 Columns Layout) */}
            <div className="relative z-10 grid grid-cols-2 gap-12 px-8">
              {/* Left Column (1.8M, 12+, 99%) */}
              <div className="flex flex-col gap-32">
                {col1.map((stat, i) => (
                  <div
                    key={i}
                    className={stat.active ? "opacity-90" : "opacity-20"}
                  >
                    <h2 className="text-8xl font-medium leading-none text-white md:text-9xl">
                      {stat.value}
                    </h2>
                    <p className="mt-8 text-xl leading-8 text-neutral-400">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column - Staggered offset downwards (260+, 80+) */}
              <div className="flex flex-col gap-32 pt-32">
                {col2.map((stat, i) => (
                  <div key={i} className="opacity-20">
                    <h2 className="text-8xl font-medium leading-none text-white md:text-9xl">
                      {stat.value}
                    </h2>
                    <p className="mt-8 text-xl leading-8 text-neutral-400">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
