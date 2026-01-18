"use client";

import { useMemo, useState } from "react";

type SupplierPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: string;
  message: string;
};

export default function SuppliersPage() {
  const [form, setForm] = useState<SupplierPayload>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    company: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  const headingPink = "text-[#cb2187]";
  const textGrey = "text-[#595859]";

  const inputClass =
    "w-full min-h-[50px] rounded-lg border border-[#c1c1c1] bg-white px-4 py-3 text-[16px] text-[#333] outline-none transition focus:border-[#cb2187] placeholder:text-[#666]";

  const canSubmit = useMemo(() => {
    return (
      form.first_name.trim() &&
      form.last_name.trim() &&
      form.email.trim() &&
      form.phone_number.trim() &&
      form.company.trim()
    );
  }, [form]);

  const onChange = (key: keyof SupplierPayload, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status.type !== "idle") setStatus({ type: "idle" });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/suppliers/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const msg =
          data?.message ||
          data?.detail ||
          "Something went wrong. Please try again.";
        setStatus({ type: "error", message: String(msg) });
        return;
      }

      setStatus({
        type: "success",
        message:
          data?.message || "Thanks — we’ve received your details and will be in touch.",
      });

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        company: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white font-['Montserrat'] my-2 md:my-8">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        <div className="w-full max-w-[1280px] mx-auto">
            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${textGrey}`}>
                Join Us at PlanMyLuxe: Your Partner in Luxury Travel Solutions
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                At PlanMyLuxe, we&apos;re a new brand in the luxury holiday market,
                and we&apos;re experiencing rapid growth through our media
                partnerships. We&apos;re committed to building strong relationships
                with our key suppliers. Our goal is to offer our members
                exceptional deals on hand-picked hotels, holidays, and
                experiences, creating a unique platform for our partners to
                reach new audiences. To achieve this, we&apos;re looking to expand
                our network with more destinations, hotels, and ancillary
                products.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                Who Are We
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                PlanMyLuxe is a recently developed brand, part of the PlanMyTour
                group of brands and is dedicated to enhancing the luxury travel
                experience. We focus on forming collaborative partnerships that
                benefit both our members and our suppliers. Our mission is to
                provide high-quality offerings that elevate travel experiences.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                Our Products
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                We offer a curated selection of luxury accommodations, tailored
                holiday packages, and unique experiences. Our focus is on
                quality and exclusivity, ensuring that every option we present
                meets our high standards and provides real value.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                Our Membership
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                Currently, we welcome both subscribers and non-subscribers, but
                starting in the first quarter of 2025, all members will need to
                sign up fully. Our free sign-up process allows members to
                access hotel sales exclusive to PlanMyLuxe, ensuring that your
                brand remains protected as our rates are not visible on external
                platforms.
              </p>
            </section>

            <section className="space-y-4">
              <div className="space-y-3">
                <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                  Marketing Your Products
                </h4>
                <p className={`${textGrey} leading-[1.5]`}>
                  We engage in a variety of digital marketing activities and
                  collaborate with key channels, such as Travelzoo, where
                  PlanMyLuxe is recognized. We can promote your products in
                  several ways, including creating dedicated pages on our
                  website and featuring them in our upcoming 2025 digital
                  brochure. We focus on bundling offers to provide added value
                  to our members, such as upgraded room types and complimentary
                  extras. For partners with a large inventory to sell quickly,
                  our marketing team can develop targeted campaigns, including
                  placements in Travelzoo’s Top 20 listings, reaching millions
                  of active travelers.
                </p>
              </div>

              <div className="flex flex-col items-center sm:flex-row sm:flex-wrap gap-4">
                <div className="bg-white p-2  w-full sm:w-[320px]">
                  <img
                    src="/assets/images/travelzoo.jpg"
                    loading="lazy"
                    alt="Travelzoo Partner Logo"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="bg-white border border-[#e0e0e0] rounded-xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-[2px] w-full sm:w-[320px]">
                  <img
                    src="/assets/images/travelzoo.png"
                    loading="lazy"
                    alt="Travelzoo Top 20 Feature"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                Working With Us
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                When you partner with PlanMyLuxe, you’ll have a dedicated account
                executive to guide you through the process. We establish
                connectivity via our technology platform or directly with your
                systems. Our flexible pricing model allows for adjustments based
                on occupancy and demand, and we maintain regular communication
                to analyze performance and bookings.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                Your Security
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                As a proud member of the Travel Trust Association, we prioritise
                the security of your payments. All customer funds are held in a
                trust account, ensuring timely payments to our suppliers and
                protecting your financial interests.
              </p>
            </section>

            <section className="space-y-3">
              <h4 className={`font-semibold text-[18px] md:text-[20px] ${headingPink}`}>
                Get In Touch
              </h4>
              <p className={`${textGrey} leading-[1.5]`}>
                If you’re interested in exploring how a partnership with
                PlanMyLuxe can align with your business goals and support mutual
                sales objectives, <strong className="font-semibold">contact us</strong> to discuss how we
                can work together.
              </p>
            </section>

            {/* Form */}
            <section className="flex justify-center">
              <div className="w-full max-w-[800px] rounded-2xl border border-[#c1c1c1] bg-white p-6 md:p-8">
                {status.type === "success" && (
                  <div className="mb-5 rounded-lg border border-[#c3e6cb] bg-[#d4edda] px-4 py-3 text-[#155724]">
                    {status.message}
                  </div>
                )}

                {status.type === "error" && (
                  <div className="mb-5 rounded-lg border border-[#f5c6cb] bg-[#f8d7da] px-4 py-3 text-[#721c24]">
                    {status.message}
                  </div>
                )}

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="pb-2">
                    <p className={`text-[20px] md:text-[24px] font-semibold ${headingPink}`}>
                      Apply to become a supplier
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className={`text-[16px] ${headingPink}`}>First Name</p>
                    <input
                      className={inputClass}
                      maxLength={256}
                      name="first_name"
                      placeholder="First Name"
                      type="text"
                      value={form.first_name}
                      onChange={(e) => onChange("first_name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className={`text-[16px] ${headingPink}`}>Last Name</p>
                    <input
                      className={inputClass}
                      maxLength={256}
                      name="last_name"
                      placeholder="Last Name"
                      type="text"
                      value={form.last_name}
                      onChange={(e) => onChange("last_name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className={`text-[16px] ${headingPink}`}>Email Address</p>
                    <input
                      className={inputClass}
                      maxLength={256}
                      name="email"
                      placeholder="Email address"
                      type="email"
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className={`text-[16px] ${headingPink}`}>Phone Number</p>
                    <input
                      className={inputClass}
                      maxLength={256}
                      name="phone_number"
                      placeholder="Phone number"
                      type="tel"
                      value={form.phone_number}
                      onChange={(e) => onChange("phone_number", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className={`text-[16px] ${headingPink}`}>Your Company</p>
                    <input
                      className={inputClass}
                      maxLength={256}
                      name="company"
                      placeholder="Your Company"
                      type="text"
                      value={form.company}
                      onChange={(e) => onChange("company", e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <p className={`text-[20px] md:text-[24px] font-semibold ${headingPink}`}>
                      Why do you want to work with PlanMyLuxe?
                    </p>
                  </div>

                  <textarea
                    name="message"
                    maxLength={5000}
                    placeholder="Why do you want to work with PlanMyLuxe?"
                    className={`${inputClass} min-h-[110px]`}
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                  />

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting || !canSubmit}
                      className="inline-flex items-center justify-center rounded-lg bg-[#cb2187] px-8 py-4 font-semibold text-white transition hover:bg-[#a91970] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Send Details"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    // </div>
  );
}
