"use client";

import { contactPage } from "@/data";
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
  const {
    emailPlaceholder,
    namePlaceholder,
    budgetPlaceholder,
    hearAboutUsPlaceholder,
    messagePlaceholder,
    servicesLabel,
    submitButtonText,
    submittingText,
    preferEmailLabel,
    email,
    budgetOptions,
    hearAboutUsOptions,
    serviceTags,
  } = contactPage;

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-sm border border-neutral-800 bg-transparent px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-600 font-semibold";

  return (
    <div className="w-full rounded-sm border border-neutral-800 bg-black p-5 sm:p-6 md:p-8 lg:p-10">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 sm:gap-5"
      >
        {/* EMAIL + NAME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <input
            id="email"
            name="email"
            type="email"
            placeholder={emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder={namePlaceholder}
            value={formData.fullName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* BUDGET + HEAR ABOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* BUDGET */}
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
                {budgetPlaceholder}
              </option>

              {budgetOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-neutral-950 text-white"
                >
                  {option}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-neutral-500"
            />
          </div>

          {/* HEAR ABOUT */}
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
                {hearAboutUsPlaceholder}
              </option>

              {hearAboutUsOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-neutral-950 text-white"
                >
                  {option}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-neutral-500"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} min-h-[140px] sm:min-h-[160px] resize-none`}
        />

        {/* SERVICES */}
        <div className="pt-1 sm:pt-2">
          <p className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            {servicesLabel}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {serviceTags.map((tag) => {
              const active = formData.services.includes(tag);

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleService(tag)}
                  aria-pressed={active}
                  className={`
                    rounded-sm
                    border
                    px-3.5
                    sm:px-5
                    py-2
                    sm:py-2.5
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition-colors
                    cursor-pointer
                    ${
                      active
                        ? "border-white bg-white text-black"
                        : "border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white"
                    }
                  `}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* MESSAGES */}
        {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}

        {status === "success" && (
          <p className="text-green-500 text-xs sm:text-sm">
            Thanks! Your message has been sent — we'll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-xs sm:text-sm">
            Something went wrong. Please try again in a moment.
          </p>
        )}

        {/* SUBMIT + EMAIL */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-5 mt-5 sm:mt-8">
          {/* SUBMIT */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary py-2 pl-4 pr-2 sm:py-2 sm:pl-5 sm:pr-2 group text-base sm:text-[18px] leading-5 sm:leading-6 font-semibold"
          >
            <span className="btn-text">
              <span>
                {status === "submitting" ? submittingText : submitButtonText}
              </span>

              <span>
                {status === "submitting" ? submittingText : submitButtonText}
              </span>
            </span>

            <span className="btn-icon">
              <ArrowUpRight />
              <ArrowUpRight />
            </span>
          </button>

          {/* EMAIL */}
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm text-neutral-400 font-semibold">
              {preferEmailLabel}
            </p>

            <a
              href={`mailto:${email}`}
              className="
                block
                mt-1.5
                sm:mt-2
                text-base
                sm:text-[18px]
                font-semibold
                text-white
                underline
                underline-offset-2
                break-all
                sm:break-normal
                hover:text-[#EBFE5B]
                transition-colors
              "
            >
              {email}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
