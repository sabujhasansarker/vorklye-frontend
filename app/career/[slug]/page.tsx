"use client";

import Button, { ButtonNormal, ButtonSm } from "@/components/Button";
import Footer from "@/components/Footer";
import { getJobBySlug, jobs } from "@/data";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Gift,
  Globe,
  Lock,
  Mail,
  MapPin,
  Send,
  Sparkles,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { use, useState } from "react";

export default function SingleCareerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const isOpen = job.status === "open";
  const [applyMode, setApplyMode] = useState<"direct" | "google">("direct");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    experienceYears: "",
    expectedSalary: "",
    noticePeriod: "Immediate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const otherJobs = jobs.filter((j) => j.slug !== slug);

  return (
    <div className="bg-black text-white min-h-screen antialiased">
      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 border-b border-neutral-900 overflow-hidden">
        {/* Subtle grid background */}
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
          {/* Breadcrumb */}
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="size-3.5" />
            All Careers & Roles
          </Link>

          {/* Closed Alert Banner if closed */}
          {!isOpen && (
            <div className="mb-10 p-5 rounded-sm bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0">
                  <Lock className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    This Position Is Currently Closed
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    We are no longer actively accepting new applications for this specific opening, but you can join our talent pool below.
                  </p>
                </div>
              </div>
              <a
                href="#apply-form"
                className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-neutral-600 transition-all shrink-0"
              >
                Join Talent Pool ↓
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                  <Briefcase className="size-3.5 text-neutral-400" />
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                  <Clock className="size-3.5 text-neutral-400" />
                  {job.type}
                </span>
                {isOpen ? (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-semibold text-yellow-400">
                    <Sparkles className="size-3.5" />
                    Now Hiring
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-500">
                    <Lock className="size-3.5" />
                    Closed / Archived
                  </span>
                )}
              </div>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] text-white">
                {job.title}
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <p className="text-neutral-400 text-lg leading-relaxed">
                {job.overview}
              </p>
              <div className="flex items-center gap-4">
                {isOpen ? (
                  <a
                    href="#apply-form"
                    className="btn-primary"
                  >
                    <span className="btn-text">
                      <span>Apply Now</span>
                      <span>Apply Now</span>
                    </span>
                    <span className="btn-icon">
                      <ArrowUpRight className="size-5" />
                      <ArrowUpRight className="size-5" />
                    </span>
                  </a>
                ) : (
                  <a
                    href="#apply-form"
                    className="px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-white font-bold text-sm tracking-wider uppercase transition-all inline-flex items-center gap-2"
                  >
                    Submit CV For Future Roles ↓
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Key Job Info Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-900 mt-16 border border-neutral-900">
            <div className="bg-black p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="size-3.5" /> Location
              </div>
              <p className="text-white font-bold text-base sm:text-lg">
                {job.location}
              </p>
            </div>

            <div className="bg-black p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="size-3.5" /> Experience
              </div>
              <p className="text-white font-bold text-base sm:text-lg">
                {job.experience}
              </p>
            </div>

            <div className="bg-black p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">
                <DollarSign className="size-3.5" /> Compensation
              </div>
              <p className="text-white font-bold text-base sm:text-lg">
                {job.salary}
              </p>
            </div>

            <div className="bg-black p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="size-3.5" /> Status / Deadline
              </div>
              <p
                className={`font-bold text-base sm:text-lg ${
                  isOpen ? "text-white" : "text-neutral-500"
                }`}
              >
                {job.deadline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROLE DETAILS & RESPONSIBILITIES ──────────────────────── */}
      <section className="py-24 border-b border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Responsibilities */}
              <div>
                <p className="sub-title">/ Key Responsibilities</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
                  What You&apos;ll Be Doing
                </h2>
                <div className="flex flex-col gap-4">
                  {job.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-sm bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors flex items-start gap-4"
                    >
                      <span className="text-xs font-black text-neutral-600 tracking-wider pt-1 shrink-0">
                        0{idx + 1}
                      </span>
                      <p className="text-neutral-300 leading-relaxed font-medium">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <p className="sub-title">/ Qualifications</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
                  What We&apos;re Looking For
                </h2>
                <div className="flex flex-col gap-4">
                  {job.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-sm bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors flex items-start gap-4"
                    >
                      <CheckCircle2 className="size-5 text-neutral-500 shrink-0 mt-0.5" />
                      <p className="text-neutral-300 leading-relaxed font-medium">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nice to Have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div>
                  <p className="sub-title">/ Bonus Points</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                    Nice to Have
                  </h3>
                  <div className="flex flex-col gap-3">
                    {job.niceToHave.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-sm bg-neutral-950/60 border border-neutral-900 flex items-start gap-3.5"
                      >
                        <Sparkles className="size-4 text-yellow-400/80 shrink-0 mt-1" />
                        <p className="text-neutral-400 leading-relaxed text-sm font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits & Perks */}
              {job.benefits && job.benefits.length > 0 && (
                <div>
                  <p className="sub-title">/ Perks & Benefits</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
                    Why You&apos;ll Love Working Here
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-sm bg-neutral-950 border border-neutral-900 flex items-start gap-4 group hover:border-neutral-700 transition-colors"
                      >
                        <Gift className="size-5 text-white shrink-0 mt-1" />
                        <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar: Apply Card & Quick Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 rounded-sm bg-neutral-950 border border-neutral-800 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 block mb-2">
                    Position Summary
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {job.title}
                  </h3>
                </div>

                <div className="divide-y divide-neutral-900 text-sm">
                  <div className="py-3.5 flex justify-between">
                    <span className="text-neutral-500">Status</span>
                    <span
                      className={`font-semibold ${
                        isOpen ? "text-yellow-400" : "text-neutral-500"
                      }`}
                    >
                      {isOpen ? "Active Open Role" : "Archived / Filled"}
                    </span>
                  </div>
                  <div className="py-3.5 flex justify-between">
                    <span className="text-neutral-500">Department</span>
                    <span className="font-semibold text-white">{job.department}</span>
                  </div>
                  <div className="py-3.5 flex justify-between">
                    <span className="text-neutral-500">Location</span>
                    <span className="font-semibold text-white">{job.location}</span>
                  </div>
                  <div className="py-3.5 flex justify-between">
                    <span className="text-neutral-500">Employment</span>
                    <span className="font-semibold text-white">{job.type}</span>
                  </div>
                  <div className="py-3.5 flex justify-between">
                    <span className="text-neutral-500">Experience</span>
                    <span className="font-semibold text-white">{job.experience}</span>
                  </div>
                  <div className="py-3.5 flex justify-between">
                    <span className="text-neutral-500">Compensation</span>
                    <span className="font-semibold text-white">{job.salary}</span>
                  </div>
                </div>

                <a
                  href="#apply-form"
                  className={`w-full py-4 text-center rounded-sm font-bold text-sm transition-colors block uppercase tracking-wider ${
                    isOpen
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  {isOpen ? "Apply For This Job" : "Join Talent Pool"}
                </a>

                {/* Google Form Direct Link Button */}
                {isOpen && job.googleFormUrl && (
                  <a
                    href={job.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 text-center rounded-sm border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 font-semibold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply via Google Form</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                )}

                <p className="text-xs text-neutral-500 text-center leading-relaxed">
                  We review every application thoroughly and respond within 3–5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM SECTION ─────────────────────────────── */}
      <section id="apply-form" className="py-28 border-b border-neutral-900 bg-neutral-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-yellow-400 block mb-4">
              {isOpen ? "/ Submit Application" : "/ Join Our Talent Pool"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {isOpen ? `Apply for ${job.title}` : "Join Vorklye Talent Network"}
            </h2>
            <p className="text-neutral-400 text-base mt-4 max-w-lg mx-auto">
              {isOpen
                ? "Submit your application directly using the form below or via Google Form."
                : "Although this specific position is closed, we are always on the lookout for great talent. Drop your details and we'll reach out when a suitable role opens."}
            </p>

            {/* Application Mode Switcher (Direct vs Google Form) */}
            {isOpen && (
              <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-black border border-neutral-800 mt-8">
                <button
                  type="button"
                  onClick={() => setApplyMode("direct")}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    applyMode === "direct"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Direct Application
                </button>
                <button
                  type="button"
                  onClick={() => setApplyMode("google")}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    applyMode === "google"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>Google Form</span>
                  <ExternalLink className="size-3" />
                </button>
              </div>
            )}
          </div>

          {formSubmitted ? (
            <div className="p-12 rounded-sm bg-black border border-neutral-800 text-center flex flex-col items-center">
              <div className="size-16 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-6">
                <CheckCircle2 className="size-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Application Received!
              </h3>
              <p className="text-neutral-400 text-base max-w-md mx-auto mb-8">
                Thank you for your interest in Vorklye. Our talent acquisition team will review your profile and get back to you shortly.
              </p>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-300"
              >
                ← Back to All Roles
              </Link>
            </div>
          ) : applyMode === "google" && isOpen ? (
            /* Google Form Option Card */
            <div className="p-8 sm:p-12 rounded-sm bg-black border border-neutral-900 text-center flex flex-col items-center">
              <div className="size-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6">
                <FileText className="size-6 text-neutral-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Apply via Official Google Form
              </h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Prefer using Google Forms? You can submit your resume, portfolio links, and responses directly through our Google Application Portal.
              </p>
              <a
                href={job.googleFormUrl || "https://docs.google.com/forms"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-sm bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <span>Open Google Application Form</span>
                <ExternalLink className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => setApplyMode("direct")}
                className="mt-6 text-xs font-semibold text-neutral-500 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                Or switch back to direct application
              </button>
            </div>
          ) : (
            /* Direct Application Form */
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-sm bg-black border border-neutral-900 flex flex-col gap-6"
            >
              {!isOpen && (
                <div className="p-4 rounded-sm bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex items-start gap-2.5 mb-2">
                  <AlertCircle className="size-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>
                    You are applying to our <strong>General Talent Network</strong> for future openings related to <em>{job.title}</em>.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1700 000000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={(e) =>
                      setFormData({ ...formData, linkedin: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Total Experience
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) =>
                      setFormData({ ...formData, experienceYears: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-white transition-colors text-sm"
                  >
                    <option value="">Select experience</option>
                    <option value="1-2 years">1–2 Years</option>
                    <option value="3-5 years">3–5 Years</option>
                    <option value="5+ years">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BDT 80,000 / mo"
                    value={formData.expectedSalary}
                    onChange={(e) =>
                      setFormData({ ...formData, expectedSalary: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Notice Period
                  </label>
                  <select
                    value={formData.noticePeriod}
                    onChange={(e) =>
                      setFormData({ ...formData, noticePeriod: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-white transition-colors text-sm"
                  >
                    <option value="Immediate">Immediate</option>
                    <option value="15 Days">15 Days</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Months+">2 Months+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Portfolio / GitHub / Resume Link *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/... or https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={(e) =>
                    setFormData({ ...formData, portfolio: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm"
                />
                <span className="text-[11px] text-neutral-500 mt-1.5 block">
                  Please provide a publicly accessible link (Google Drive, Dropbox, Notion, or personal domain) containing your Resume & Portfolio.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Cover Note / Why Vorklye?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us why you are excited to join Vorklye and how your skills can add value..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-sm bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-sm bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <Send className="size-4" />
                {isOpen ? "Submit Application" : "Join Talent Pool"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── OTHER OPEN ROLES ─────────────────────────────────────── */}
      {otherJobs.length > 0 && (
        <section className="py-24 border-b border-neutral-900">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="sub-title">/ Other Opportunities</p>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  More Roles at Vorklye
                </h2>
              </div>
              <Link
                href="/career"
                className="hidden sm:flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white transition-colors"
              >
                View All Roles <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherJobs.map((other) => {
                const otherIsOpen = other.status === "open";
                return (
                  <Link
                    key={other.slug}
                    href={`/career/${other.slug}`}
                    className={`group p-8 rounded-sm bg-neutral-950 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all flex items-center justify-between ${
                      otherIsOpen ? "" : "opacity-60"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2">
                        <span>{other.department}</span>
                        <span>•</span>
                        <span>{other.location}</span>
                        {otherIsOpen ? (
                          <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] uppercase font-bold ml-2">
                            Open
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-neutral-500 text-[10px] uppercase font-bold ml-2">
                            Closed
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                        {other.title}
                      </h3>
                    </div>
                    <ArrowRight className="size-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
