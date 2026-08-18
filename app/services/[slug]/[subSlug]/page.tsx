"use client";

import { ButtonNormal, ButtonSm } from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  detailedServiceItems,
  getServiceBySlug,
  getSubServiceBySlug,
} from "@/data";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}) {
  const { slug, subSlug } = use(params);
  const parentService = getServiceBySlug(slug);
  const sub = getSubServiceBySlug(slug, subSlug);

  if (!parentService || !sub) notFound();

  // Prev / next within same parent
  const siblings = parentService.services;
  const currentIdx = siblings.findIndex((s) => s.slug === subSlug);
  const prevSub = siblings[(currentIdx - 1 + siblings.length) % siblings.length];
  const nextSub = siblings[(currentIdx + 1) % siblings.length];

  // Other parent services
  const otherServices = detailedServiceItems.filter((s) => s.slug !== slug);

  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-0 overflow-hidden border-b border-neutral-900">
        {/* grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 pb-20">
          {/* Breadcrumb trail */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 mb-14 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link href={`/services/${slug}`} className="hover:text-white transition-colors">
              {parentService.title}
            </Link>
            <span>/</span>
            <span className="text-neutral-300">{sub.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.22em] text-yellow-400 mb-6">
                {parentService.title}
              </span>
              <h1 className="text-6xl sm:text-7xl xl:text-[6rem] font-black tracking-tight leading-[0.93] text-white">
                {sub.title}
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-7">
              <p className="text-xl text-neutral-400 font-medium leading-relaxed">
                {sub.tagline || sub.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonSm text="Start a Project" href="/contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-28 border-b border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="sub-title">/ What We Do</p>
              <h2 className="text-3xl xl:text-4xl font-black text-white tracking-tight leading-tight mt-2">
                Built for precision.<br />Measured by results.
              </h2>
              <div className="mt-8">
                <ButtonNormal text="Discuss Your Project" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-neutral-400 leading-relaxed font-medium max-w-3xl">
                {sub.description}
              </p>

              {/* parent service tag */}
              <div className="mt-10 flex items-center gap-4">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-neutral-700">
                  Part of
                </span>
                <Link
                  href={`/services/${slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 text-sm font-bold text-neutral-300 hover:border-neutral-500 hover:text-white transition-all"
                >
                  {parentService.title}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DELIVERABLES ─────────────────────────────────────────── */}
      {sub.deliverables && sub.deliverables.length > 0 && (
        <section className="py-28 border-b border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <p className="sub-title">/ Deliverables</p>
                <h2 className="text-3xl xl:text-4xl font-black text-white tracking-tight leading-tight mt-2">
                  What you walk<br />away with.
                </h2>
                <p className="text-neutral-500 mt-4 leading-relaxed">
                  Every deliverable is documented, reviewed, and built to client-ready standard.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-col divide-y divide-neutral-900">
                  {sub.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-5 py-7 group"
                    >
                      <span className="text-xs font-black text-neutral-800 group-hover:text-neutral-600 transition-colors tracking-[0.15em] pt-0.5 shrink-0 w-8">
                        0{idx + 1}
                      </span>
                      <CheckCircle2 className="size-5 text-neutral-700 group-hover:text-white transition-colors shrink-0 mt-0.5" />
                      <span className="text-lg font-semibold text-neutral-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      {sub.process && sub.process.length > 0 && (
        <section className="py-28 border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <div className="mb-14">
              <p className="sub-title">/ How We Work</p>
              <h2 className="section-title">The 4-Step Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900">
              {sub.process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-black p-10 xl:p-12 flex flex-col hover:bg-neutral-950 transition-colors group"
                >
                  <span className="text-7xl font-black leading-none text-neutral-900 group-hover:text-neutral-800 transition-colors mb-8">
                    {step.step}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── OTHER SUB-SERVICES IN THIS CATEGORY ─────────────────── */}
      {siblings.length > 1 && (
        <section className="py-24 border-b border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="sub-title">/ Also in {parentService.title}</p>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  More Capabilities
                </h2>
              </div>
              <Link
                href={`/services/${slug}`}
                className="text-sm font-bold text-neutral-400 hover:text-white transition-colors hidden sm:flex items-center gap-2"
              >
                View All <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siblings
                .filter((s) => s.slug !== subSlug)
                .map((sib) => (
                  <Link
                    key={sib.slug}
                    href={`/services/${slug}/${sib.slug}`}
                    className="group flex items-center justify-between px-7 py-6 rounded-sm bg-black border border-neutral-900 hover:border-neutral-600 hover:bg-neutral-900/40 transition-all duration-300"
                  >
                    <div>
                      <h4 className="text-base font-bold text-neutral-300 group-hover:text-white transition-colors">
                        {sib.title}
                      </h4>
                      {sib.tagline && (
                        <p className="text-xs text-neutral-600 mt-1 line-clamp-1 group-hover:text-neutral-500 transition-colors">
                          {sib.tagline}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight className="size-4 text-neutral-700 group-hover:text-white transition-colors shrink-0 ml-4" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── OTHER PARENT SERVICES ────────────────────────────────── */}
      {otherServices.length > 0 && (
        <section className="py-24 border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-700 mb-8">
              / Other Service Areas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex items-center justify-between px-7 py-6 rounded-sm bg-neutral-950 border border-neutral-900 hover:border-neutral-600 hover:bg-neutral-900/40 transition-all duration-300"
                >
                  <div>
                    <h4 className="text-base font-bold text-neutral-300 group-hover:text-white transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1 group-hover:text-neutral-500">
                      Explore →
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-neutral-700 group-hover:text-white transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── PREV / NEXT NAV ──────────────────────────────────────── */}
      <section className="border-b border-neutral-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900">
          <Link
            href={`/services/${slug}/${prevSub.slug}`}
            className="group flex items-center gap-8 px-10 xl:px-16 py-12 bg-neutral-950 hover:bg-neutral-900/60 transition-colors"
          >
            <ArrowLeft className="size-5 text-neutral-600 group-hover:text-white shrink-0 transition-all group-hover:-translate-x-1 duration-300" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 mb-1">
                Previous
              </p>
              <h4 className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors">
                {prevSub.title}
              </h4>
            </div>
          </Link>

          <Link
            href={`/services/${slug}/${nextSub.slug}`}
            className="group flex items-center justify-end gap-8 px-10 xl:px-16 py-12 bg-neutral-950 hover:bg-neutral-900/60 transition-colors text-right"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 mb-1">
                Next
              </p>
              <h4 className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors">
                {nextSub.title}
              </h4>
            </div>
            <ArrowRight className="size-5 text-neutral-600 group-hover:text-white shrink-0 transition-all group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-600 block mb-6">
            / Ready to Start?
          </span>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-8">
            Let&apos;s build{" "}
            <span className="text-neutral-500">something great</span> together.
          </h2>
          <p className="text-neutral-500 text-lg mb-12 max-w-xl mx-auto">
            Book a free strategy session and get a custom growth roadmap — no
            commitment required.
          </p>
          <ButtonNormal text="Book a Strategy Call" href="/contact" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
