"use client";

import { ButtonNormal } from "@/components/Button";
import VorklyeLayout from "@/components/VorklyeLayout";
import { caseStudies, getCaseStudyBySlug } from "@/data";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ExternalLink,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  const s = study!;
  const currentIdx = caseStudies.findIndex((c) => c.slug === slug);
  const nextStudy = caseStudies[(currentIdx + 1) % caseStudies.length];
  const prevStudy =
    caseStudies[(currentIdx - 1 + caseStudies.length) % caseStudies.length];

  return (
    <VorklyeLayout>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-40 overflow-hidden">
        {/* subtle grid */}
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
          {/* breadcrumb */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-14"
          >
            <div className="rounded-full size-10 bg-neutral-900 text-neutral-500 flex items-center justify-center">
              <ChevronLeft size={20} />
            </div>
            All Case Studies
          </Link>

          {/* title + summary row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-end pb-14 border-b border-neutral-900">
            <div className="lg:col-span-8">
              <span className="text-[14px] font-black uppercase tracking-[0.2em] text-neutral-500 block mb-10">
                {s.industry} · {s.published}
              </span>
              <h1 className="text-6xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[0.93] text-white">
                {s.title}
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <p className="text-lg text-neutral-400 font-medium leading-relaxed">
                {s.description}
              </p>
              {s.websiteUrl && (
                <a
                  href={s.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-neutral-300 transition-colors"
                >
                  Visit Live Store <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* metadata strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-neutral-900 border-b border-neutral-900">
            {[
              { label: "Client", value: s.client },
              { label: "Industry", value: s.industry },
              { label: "Year", value: s.published },
              {
                label: "Services",
                value: (
                  <span className="flex flex-wrap gap-2">
                    {s.services.map((srv, i) => (
                      <span
                        key={i}
                        className="text-sm px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 font-semibold"
                      >
                        {srv}
                      </span>
                    ))}
                  </span>
                ),
              },
            ].map((m, i) => (
              <div key={i} className="px-6 sm:px-8 py-8">
                <p className="text-sm font-black uppercase tracking-widest text-neutral-700 mb-5">
                  {m.label}
                </p>
                <div className="text-[18px] font-semibold text-neutral-200">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* full-bleed cover image */}
        <div className="container mx-auto px-4 mt-12">
          <div className="relative h-[55vw] max-h-150 min-h-100 overflow-hidden rounded-sm">
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {s.logo && (
              <div className="absolute top-5 left-5 backdrop-blur-md bg-black/60 border border-white/10 rounded-sm px-4 py-2.5">
                <img
                  src={s.logo}
                  alt={s.client}
                  className="h-6 object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── RESULTS METRICS ───────────────────────────────────────── */}
      {s.results && s.results.length > 0 && (
        <section className="border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-neutral-900">
              {s.results.map((r, i) => (
                <div key={i} className="py-14 px-8 xl:px-12 text-center">
                  <span className="text-3xl xl:text-4xl font-black text-white tracking-tight">
                    {r.value}
                  </span>
                  <p className="text-sm font-black uppercase tracking-widest text-neutral-600 mt-6">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CHALLENGE & SOLUTION ──────────────────────────────────── */}
      <section className="py-32 border-b border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-900">
            {/* Challenge */}
            <div className="bg-black p-12 xl:p-16">
              <p className="sub-title">01 / The Challenge</p>
              <h3 className="text-4xl font-semibold leading-15 mb-10">
                What was holding
                <br />
                the brand back?
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {s.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-neutral-950 p-12 xl:p-16">
              <p className="sub-title">02 / The Solution</p>
              <h3 className="text-4xl font-semibold leading-15 mb-10">
                How we engineered
                <br />
                the breakthrough.
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {s.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ───────────────────────────────────────────────── */}
      {s.galleryImages && s.galleryImages.length > 0 && (
        <section className="py-32 border-b border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <p className="sub-title">/ Visual Showcase</p>
              <h2 className="section-title">Design in Action</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* first image large */}
              {s.galleryImages[0] && (
                <div className="md:col-span-8 rounded-sm overflow-hidden h-[480px] lg:h-[600px]">
                  <img
                    src={s.galleryImages[0]}
                    alt="Screen 1"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              {/* right column stacked */}
              <div className="md:col-span-4 flex flex-col gap-5">
                {s.galleryImages.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-sm overflow-hidden flex-1 min-h-[220px]"
                  >
                    <img
                      src={img}
                      alt={`Screen ${idx + 2}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── TESTIMONIAL ───────────────────────────────────────────── */}
      {s.testimonial && (
        <section className="py-32 border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="shrink-0">
                  <div className="size-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <Quote className="size-7 text-neutral-600" />
                  </div>
                </div>
                <div>
                  <blockquote className="text-3xl xl:text-4xl font-bold text-white leading-snug tracking-tight mb-10">
                    &ldquo;{s.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-5">
                    <div className="h-px w-10 bg-neutral-700" />
                    <div>
                      <cite className="not-italic text-base font-bold text-white block">
                        {s.testimonial.author}
                      </cite>
                      <span className="text-sm text-neutral-600">
                        {s.testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── PREV / NEXT NAV ───────────────────────────────────────── */}
      <section className="border-b border-neutral-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900">
          <Link
            href={`/case-studies/${prevStudy.slug}`}
            className="group flex items-center gap-8 px-10 xl:px-16 py-12 bg-neutral-950 hover:bg-neutral-900/60 transition-colors"
          >
            <ArrowLeft className="size-5 text-neutral-600 group-hover:text-white shrink-0 transition-colors group-hover:-translate-x-1 duration-300" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 mb-1">
                Previous Project
              </p>
              <h4 className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors">
                {prevStudy.title}
              </h4>
            </div>
          </Link>

          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="group flex items-center justify-end gap-8 px-10 xl:px-16 py-12 bg-neutral-950 hover:bg-neutral-900/60 transition-colors text-right"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 mb-1">
                Next Project
              </p>
              <h4 className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors">
                {nextStudy.title}
              </h4>
            </div>
            <ArrowRight className="size-5 text-neutral-600 group-hover:text-white shrink-0 transition-colors group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </section>

      {/* ─── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-neutral-600 block mb-6">
            / Start Your Story
          </span>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-8">
            Ready to build your{" "}
            <span className="text-neutral-500">next success</span> story?
          </h2>
          <p className="text-neutral-500 text-lg mb-12 max-w-xl mx-auto">
            Let&apos;s discuss how we can engineer similar double-digit growth
            and speed improvements for your store.
          </p>
          <ButtonNormal text="Book a Strategy Call" href="/contact" />
        </div>
      </section>
    </VorklyeLayout>
  );
}
