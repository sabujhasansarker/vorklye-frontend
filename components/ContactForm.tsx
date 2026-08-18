"use client";

import {
  budgetOptions,
  contactPageData,
  hearAboutUsOptions,
  serviceTags,
} from "@/data";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";

type FormData = {
  email: string;
  fullName: string;
  budget: string;
  hearAboutUs: string;
  message: string;
  services: string[];
};

const initialFormData: FormData = {
  email: "",
  fullName: "",
  budget: "",
  hearAboutUs: "",
  message: "",
  services: [],
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(tag)
        ? prev.services.filter((s) => s !== tag)
        : [...prev.services, tag],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email.trim() || !formData.fullName.trim()) {
      setError("Please fill in your email and full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-sm border border-neutral-800 px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-600 font-semibold";

  return (
    <div className="w-full rounded-sm bg-black border border-neutral-800 p-8 sm:p-10">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            id="email"
            name="email"
            type="email"
            placeholder={contactPageData.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder={contactPageData.namePlaceholder}
            value={formData.fullName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClass} appearance-none cursor-pointer ${
                formData.budget ? "text-white" : "text-neutral-500"
              }`}
            >
              <option value="" disabled>
                {contactPageData.budgetPlaceholder}
              </option>
              {budgetOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="text-white bg-neutral-950"
                >
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500">
              <ChevronDown height={18} />
            </span>
          </div>

          <div className="relative">
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              className={`${inputClass} appearance-none cursor-pointer ${
                formData.hearAboutUs ? "text-white" : "text-neutral-500"
              }`}
            >
              <option value="" disabled>
                {contactPageData.hearAboutUsPlaceholder}
              </option>
              {hearAboutUsOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="text-white bg-neutral-950"
                >
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500">
              <ChevronDown height={18} />
            </span>
          </div>
        </div>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={contactPageData.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />

        <div>
          <p className="text-white font-semibold text-lg mb-4">
            {contactPageData.servicesLabel}
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceTags.map((tag) => {
              const active = formData.services.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleService(tag)}
                  className={`rounded-sm border px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-neutral-800 text-neutral-300"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {status === "success" && (
          <p className="text-green-500 text-sm">
            Thanks! Your message has been sent — we'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm">
            Something went wrong. Please try again in a moment.
          </p>
        )}

        <div className="flex items-center justify-between mt-10 flex-wrap gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary py-2 pl-5 pr-2 group text-[18px] leading-6 font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="btn-text">
              <span>
                {status === "submitting"
                  ? contactPageData.submittingText
                  : contactPageData.submitButtonText}
              </span>
              <span>
                {status === "submitting"
                  ? contactPageData.submittingText
                  : contactPageData.submitButtonText}
              </span>
            </span>
            <span className="btn-icon">
              <ArrowUpRight />
              <ArrowUpRight />
            </span>
          </button>

          <p className="text-sm text-neutral-400 text-right font-semibold">
            {contactPageData.preferEmailLabel}
            <br />
            <a
              href={contactPageData.emailHref}
              className="text-white text-[18px] font-semibold underline underline-offset-2 block mt-2"
            >
              {contactPageData.email}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
