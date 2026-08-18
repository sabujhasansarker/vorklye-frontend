"use client";

import { ButtonNormal, ButtonSm } from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  caseStudies,
  detailedServiceItems,
  getServiceBySlug,
} from "@/data";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const s = service!;

  const currentIdx = detailedServiceItems.findIndex((x) => x.slug === slug);
  const otherServices = detailedServiceItems.filter((x) => x.slug !== slug);
  const relatedCaseStudies = caseStudies.slice(0, 2);

  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-0 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          {/* back link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 hover:text-white transition-colors mb-14"
          >
            <ArrowLeft className="size-3.5" />
            All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-16 border-b border-neutral-900">
            <div>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-yellow-400 mb-6">
                Specialized Capability
              </span>
              <h1 className="text-6xl sm:text-7xl xl:text-[6rem] font-black tracking-tight leading-[0.93] text-white">
                {s.title}
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-xl text-neutral-400 font-medium leading-relaxed">
                {s.heroTagline || s.des}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <ButtonSm text="Discuss Project" href="/contact" />
                <a href="#deliverables" className="group btn-normal text-[15px]">
                  <span className="btn-text">
                    <span>View Deliverables</span>
                    <span>View Deliverables</span>
                  </span>
                  <span className="btn-icon">
                    <ArrowUpRight className="size-4" />
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* hero image */}
          <div className="mt-14 relative h-[55vw] max-h-[680px] min-h-[340px] overflow-hidden rounded-sm">
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            {s.bottomImage && (
              <div className="absolute bottom-8 right-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-sm p-4">
                <img src={s.bottomImage} alt="" className="w-52" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── METRICS BAR ──────────────────────────────────────────── */}
      {s.metrics && s.metrics.length > 0 && (
        <section className="border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900">
              {s.metrics.map((m, i) => (
                <div key={i} className="py-14 px-8 sm:px-12">
                  <span className="text-6xl xl:text-7xl font-black text-white tracking-tight tabular-nums block">
                    {m.value}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 mt-4">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── OVERVIEW + SUB-SERVICES ──────────────────────────────── */}
      <section className="py-32 border-b border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
            <div className="lg:col-span-4">
              <p className="sub-title">/ Overview</p>
              <h2 className="text-4xl font-black tracking-tight leading-tight text-white mt-2 mb-8">
                Built for measurable commercial impact.
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {s.overview || s.des}
              </p>
              <div className="mt-10">
                <ButtonNormal text="Start a Conversation" href="/contact" />
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-700 mb-6">
                Sub-Services & Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.services.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/services/${slug}/${sub.slug}`}
                    className="group flex items-center justify-between gap-4 px-6 py-5 rounded-sm bg-neutral-950 border border-neutral-900 hover:border-neutral-600 hover:bg-neutral-900/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="size-4 text-neutral-700 group-hover:text-white transition-colors shrink-0" />
                      <span className="text-[15px] font-semibold text-neutral-300 group-hover:text-white transition-colors">
                        {sub.title}
                      </span>
                    </div>
                    <ArrowUpRight className="size-4 text-neutral-700 group-hover:text-white transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DELIVERABLES ─────────────────────────────────────────── */}
      {s.deliverables && s.deliverables.length > 0 && (
        <section id="deliverables" className="py-32 border-b border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-4">
                <p className="sub-title">/ Deliverables</p>
                <h2 className="text-4xl font-black tracking-tight leading-tight text-white mt-2">
                  What you walk<br />away with.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Every project includes tangible, documented deliverables — no vague promises, no scope creep.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900">
              {s.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black p-10 xl:p-14 flex flex-col justify-between hover:bg-neutral-950 transition-colors group"
                >
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-800 group-hover:text-neutral-600 transition-colors block mb-5">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl xl:text-3xl font-bold text-white leading-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-10 h-px w-12 bg-neutral-900 group-hover:w-full group-hover:bg-neutral-800 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── HOW WE WORK ──────────────────────────────────────────── */}
      {s.process && s.process.length > 0 && (
        <section className="py-32 border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-4">
                <p className="sub-title">/ How We Work</p>
                <h2 className="text-4xl font-black tracking-tight leading-tight text-white mt-2">
                  The execution<br />process.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg text-neutral-500 leading-relaxed">
                  A proven 4-phase methodology refined across 150+ projects — delivering consistent, on-time results.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900">
              {s.process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-black p-10 xl:p-12 flex flex-col hover:bg-neutral-950 transition-colors group"
                >
                  <span className="text-7xl font-black leading-none text-neutral-900 group-hover:text-neutral-800 transition-colors block mb-8">
                    {step.step}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 mt-8 text-[10px] font-black uppercase tracking-[0.18em] text-neutral-800 group-hover:text-neutral-600 transition-colors">
                    <Zap className="size-3" />
                    Phase {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── RELATED CASE STUDIES ─────────────────────────────────── */}
      <section className="py-32 border-b border-neutral-900 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="sub-title">/ Featured Results</p>
              <h2 className="section-title">Related Case Studies</h2>
            </div>
            <ButtonSm text="View All Case Studies" href="/case-studies" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCaseStudies.map((cs) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="group relative flex flex-col rounded-sm overflow-hidden bg-black border border-neutral-900 hover:border-neutral-700 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {cs.logo && (
                    <img
                      src={cs.logo}
                      alt={cs.client}
                      className="absolute top-5 left-5 h-7 object-contain"
                    />
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600">
                    {cs.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-3 group-hover:text-neutral-200 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 flex-1">
                    {cs.description}
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-white text-sm font-bold group-hover:gap-3 transition-all">
                    Read Full Story <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      {s.faqs && s.faqs.length > 0 && (
        <section className="py-32 border-b border-neutral-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <p className="sub-title">/ FAQ</p>
              <h2 className="section-title">Common Questions</h2>
            </div>
            <div className="divide-y divide-neutral-900">
              {s.faqs.map((faq, idx) => (
                <div key={idx} className="py-10 group">
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-black text-neutral-800 tracking-[0.15em] pt-1 shrink-0 w-8">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 leading-snug">
                        {faq.question}
                      </h4>
                      <p className="text-neutral-500 leading-relaxed text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── OTHER CAPABILITIES ───────────────────────────────────── */}
      {otherServices.length > 0 && (
        <section className="py-24 border-b border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="sub-title">/ Other Capabilities</p>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  More ways we can help.
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden sm:flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-white transition-colors"
              >
                All Services <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-900">
              {otherServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col p-8 bg-black hover:bg-neutral-950 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors leading-tight">
                      {svc.title}
                    </h4>
                    <ArrowUpRight className="size-5 text-neutral-700 group-hover:text-white transition-colors shrink-0 mt-1 ml-3" />
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 group-hover:text-neutral-500 transition-colors flex-1">
                    {svc.des}
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-neutral-700 group-hover:text-neutral-500 transition-colors">
                    <span>{svc.services.length} sub-services</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── READY TO SCALE CTA ───────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden">
        {/* large blurred glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-600 block mb-6">
            / Ready to Scale?
          </span>
          <h2 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
            Let&apos;s build something{" "}
            <em className="not-italic text-neutral-500">extraordinary</em>{" "}
            together.
          </h2>
          <p className="text-neutral-500 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
            Book a free strategy session and get a customized growth roadmap
            for your store — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <ButtonNormal text="Book a Strategy Call" href="/contact" />
            <Link
              href="/case-studies"
              className="text-sm font-bold text-neutral-500 hover:text-white transition-colors"
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
