"use client";

import { HotelDeal } from "@/types/hotel";
import { useEffect, useMemo, useState, type FormEvent } from "react";

function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const prefix = `${encodeURIComponent(name)}=`;
  const found = document.cookie
    .split("; ")
    .find((row) => row.startsWith(prefix));
  if (!found) return "";
  return decodeURIComponent(found.slice(prefix.length));
}

function getUtmFromCookies() {
  return {
    utm_details: getCookie("utm_details"),
    utm_source: getCookie("utm_source"),
    utm_medium: getCookie("utm_medium"),
    utm_campaign: getCookie("utm_campaign"),
    utmid: getCookie("utmid"),
    utm_is_organic: getCookie("utm_is_organic"),
  };
}

type EnquiryModalInitialValues = {
  fullName?: string;
  contactNumber?: string;
  email?: string;
  destination?: string;
  resort?: string;
  quoteRef?: string;
  source?: string;
  message?: string;
  dealdata?: HotelDeal | null;
};

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
  initialValues?: EnquiryModalInitialValues;
};

type FieldName = "fullName" | "contactNumber" | "email" | "destination" | "resort" | "source" | "message";

type FieldState = {
  value: string;
  touched: boolean;
  focused: boolean;
};

function isValidEmail(value: string) {
  // Keep it simple and user-friendly (no overly strict RFC regex)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPhone(value: string) {
  const digits = (value.match(/\d/g) || []).length;
  // Allow +, spaces, hyphens, parentheses; require a reasonable digit count
  return digits >= 7 && digits <= 16;
}

export default function EnquiryModal({ open, onClose, initialValues }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const [fields, setFields] = useState<Record<FieldName, FieldState>>({
    fullName: { value: initialValues?.fullName ?? "", touched: false, focused: false },
    contactNumber: { value: initialValues?.contactNumber ?? "", touched: false, focused: false },
    email: { value: initialValues?.email ?? "", touched: false, focused: false },
    destination: { value: initialValues?.destination ?? "", touched: false, focused: false },
    resort: { value: initialValues?.resort ?? "", touched: false, focused: false },
    source: { value: initialValues?.source ?? "", touched: false, focused: false },
    message: { value: initialValues?.message ?? "", touched: false, focused: false },
  });

  // Reset when opened (so multiple opens feel clean)
  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    setSubmitError("");
    setSubmitting(false);
    setFields({
      fullName: { value: initialValues?.fullName ?? "", touched: false, focused: false },
      contactNumber: { value: initialValues?.contactNumber ?? "", touched: false, focused: false },
      email: { value: initialValues?.email ?? "", touched: false, focused: false },
      destination: { value: initialValues?.destination ?? "", touched: false, focused: false },
      resort: { value: initialValues?.resort ?? "", touched: false, focused: false },
      source: { value: initialValues?.source ?? "", touched: false, focused: false },
      message: { value: initialValues?.message ?? "", touched: false, focused: false },
    });
  }, [
    open,
    initialValues?.fullName,
    initialValues?.contactNumber,
    initialValues?.email,
    initialValues?.destination,
    initialValues?.resort,
    initialValues?.source,
    initialValues?.message,
  ]);

  // ESC + body scroll lock
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const errors = useMemo(() => {
    const fullName = fields.fullName.value.trim();
    const contactNumber = fields.contactNumber.value.trim();
    const email = fields.email.value.trim();

    return {
      fullName: fullName ? "" : "Full name is required.",
      contactNumber: contactNumber
        ? isValidPhone(contactNumber)
          ? ""
          : "Contact number contains an invalid number."
        : "Contact number is required.",
      email: email
        ? isValidEmail(email)
          ? ""
          : "Please enter a valid email address."
        : "Email address is required.",
      destination: "", // optional
      resort: "",
      source: "",
      message: "", // optional
    };
  }, [fields]);

  const canSubmit = useMemo(() => {
    return !errors.fullName && !errors.contactNumber && !errors.email;
  }, [errors]);

  const setValue = (name: FieldName, value: string) => {
    setFields((prev) => ({
      ...prev,
      [name]: { ...prev[name], value },
    }));
  };

  const setFocused = (name: FieldName, focused: boolean) => {
    setFields((prev) => ({
      ...prev,
      [name]: { ...prev[name], focused },
    }));
  };

  const setTouched = (name: FieldName) => {
    setFields((prev) => ({
      ...prev,
      [name]: { ...prev[name], touched: true },
    }));
  };

  const getBorderClass = (name: FieldName) => {
    const state = fields[name];
    const err = errors[name];

    if (state.focused) return "border-blue-600";
    if (state.touched && err) return "border-red-600";
    if (state.touched && !err && state.value.trim()) return "border-green-600";
    return "border-[#9F9F9F]";
  };

  const showError = (name: FieldName) => {
    return fields[name].touched && !!errors[name];
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    // Mark all touched so errors appear in the design style
    (Object.keys(fields) as FieldName[]).forEach((k) => setTouched(k));

    if (!canSubmit) return;

    setSubmitting(true);
    setSubmitError("");

    const utm = getUtmFromCookies();

    const destination = fields.destination.value.trim();
    const resort = fields.resort.value.trim();
    const message = fields.message.value.trim();

    const enquiryText =
      message ||
      [
        destination ? `Destination: ${destination}` : "",
        resort ? `Resort: ${resort}` : "",
        initialValues?.quoteRef ? `Quote Ref: ${initialValues.quoteRef}` : "",
      ]
        .filter(Boolean)
        .join("\n");

    const enquiryTextFinal = enquiryText.trim() || "General enquiry";

    const form = new FormData();
    form.set("firstName", fields.fullName.value.trim());
    form.set("email", fields.email.value.trim());
    form.set("phone", fields.contactNumber.value.trim());
    form.set("enquiry", enquiryTextFinal);

    // Tracking/context
    const rawSource = fields.source.value || "unknown";
    const sourceValue = rawSource.split("?")[0];
    form.set("enquiry_source", sourceValue);
    form.set("badge_text", sourceValue);
    form.set("quote_reference", initialValues?.quoteRef ?? "");

    if (initialValues?.dealdata) {
      try {
        form.set("deal_data_json", JSON.stringify(initialValues.dealdata));
      } catch {
        // ignore serialization issues
      }
    }

    // UTM fields expected by Django
    if (utm.utm_source) form.set("utm_source", utm.utm_source);
    if (utm.utm_medium) form.set("utm_medium", utm.utm_medium);
    if (utm.utm_campaign) form.set("utm_campaign", utm.utm_campaign);
    if (utm.utmid) form.set("utmid", utm.utmid);
    if (utm.utm_is_organic) form.set("utm_is_organic", utm.utm_is_organic);
    if (utm.utm_details) form.set("utm_details", utm.utm_details);

    try {
      const res = await fetch("/api/submit-enquiry", {
        method: "POST",
        body: form,
      });

      const data = (await res.json().catch(() => null)) as any;
      if (!res.ok || !data?.success) {
        setSubmitError(data?.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Failed to send enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close enquiry"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-[560px] max-h-[calc(100vh-2rem)] bg-white rounded-[4px] overflow-hidden shadow-2xl font-['Montserrat']"
      >
          <div className="flex items-center justify-between bg-[#595858] text-white px-4 py-3">
            <div className="text-[16px] md:text-[18px] font-semibold">Send an enquiry</div>
            <button
              type="button"
              onClick={onClose}
              className="text-white/90 hover:text-white text-[22px] leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="p-4 md:p-5 bg-[#F3F3F3] overflow-y-auto">
            <div className="bg-white rounded-[4px] p-4">
              <div className="flex items-center justify-between text-[#4C4C4C] text-[14px] font-semibold mb-3">
                Contact details
                <span className="bg-[#FFE6A9] text-[#9A6B00] text-[12px] font-medium px-2 py-0.5 rounded max-w-[160px] truncate inline-block">
                  {fields.source.value}
                </span>
              </div>

              {submitted ? (
                <div className="rounded-[4px] border border-green-600 bg-green-50 p-4 text-[#4C4C4C]">
                  <div className="font-semibold">Message sent!</div>
                  <div className="text-sm mt-1">Thank you for your enquiry. We’ll be in touch shortly.</div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-4 w-full bg-pml-primary hover:bg-pink-800 text-white font-semibold py-3 rounded-[8px] transition-all duration-200 text-[16px]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError ? (
                    <div className="rounded-[4px] border border-red-600 bg-red-50 p-3 text-[13px] text-red-700">
                      {submitError}
                    </div>
                  ) : null}
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      className={`w-full bg-white px-3 py-3 text-[14px] outline-none border ${getBorderClass("fullName")}`}
                      value={fields.fullName.value}
                      onChange={(e) => setValue("fullName", e.target.value)}
                      onFocus={() => setFocused("fullName", true)}
                      onBlur={() => {
                        setFocused("fullName", false);
                        setTouched("fullName");
                      }}
                    />
                    {showError("fullName") && (
                      <div className="mt-2 inline-block bg-red-600 text-white text-[12px] px-3 py-2 rounded-[2px]">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Contact number"
                      className={`w-full bg-white px-3 py-3 text-[14px] outline-none border ${getBorderClass("contactNumber")}`}
                      value={fields.contactNumber.value}
                      onChange={(e) => setValue("contactNumber", e.target.value)}
                      onFocus={() => setFocused("contactNumber", true)}
                      onBlur={() => {
                        setFocused("contactNumber", false);
                        setTouched("contactNumber");
                      }}
                    />
                    {showError("contactNumber") && (
                      <div className="mt-2 inline-block bg-red-600 text-white text-[12px] px-3 py-2 rounded-[2px]">
                        {errors.contactNumber}
                      </div>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className={`w-full bg-white px-3 py-3 text-[14px] outline-none border ${getBorderClass("email")}`}
                      value={fields.email.value}
                      onChange={(e) => setValue("email", e.target.value)}
                      onFocus={() => setFocused("email", true)}
                      onBlur={() => {
                        setFocused("email", false);
                        setTouched("email");
                      }}
                    />
                    {showError("email") && (
                      <div className="mt-2 inline-block bg-red-600 text-white text-[12px] px-3 py-2 rounded-[2px]">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Message (optional)"
                      rows={4}
                      className={`w-full bg-white px-3 py-3 text-[14px] outline-none border resize-none ${getBorderClass("message")}`}
                      value={fields.message.value}
                      onChange={(e) => setValue("message", e.target.value)}
                      onFocus={() => setFocused("message", true)}
                      onBlur={() => {
                        setFocused("message", false);
                        setTouched("message");
                      }}
                    />
                  </div>

                  {initialValues?.destination && (
                    <div>
                      <input
                        type="text"
                        placeholder="Destination"
                        className={`w-full bg-white px-3 py-3 text-[14px] outline-none border ${getBorderClass("destination")}`}
                        value={fields.destination.value}
                        onChange={(e) => setValue("destination", e.target.value)}
                        onFocus={() => setFocused("destination", true)}
                        onBlur={() => {
                          setFocused("destination", false);
                          setTouched("destination");
                        }}
                      />

                      {showError("destination") && (
                        <div className="mt-2 inline-block bg-red-600 text-white text-[12px] px-3 py-2 rounded-[2px]">
                          {errors.destination}
                        </div>
                      )}
                    </div>
                  )}

                  {initialValues?.resort && (
                    <div>
                      <input
                        type="text"
                        placeholder="Resort"
                        className={`w-full bg-white px-3 py-3 text-[14px] outline-none border ${getBorderClass("resort")}`}
                        value={fields.resort.value}
                        onChange={(e) => setValue("resort", e.target.value)}
                        onFocus={() => setFocused("resort", true)}
                        onBlur={() => {
                          setFocused("resort", false);
                          setTouched("resort");
                        }}
                      />
                    </div>
                  )}

                  {initialValues?.quoteRef ? (
                    <div className="text-[12px] text-[#595858]">
                      Quote Ref: <span className="font-semibold">{initialValues.quoteRef}</span>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    className="w-full bg-pml-primary hover:bg-pink-800 text-white font-semibold py-3 rounded-[8px] transition-all duration-200 text-[16px] disabled:opacity-60"
                    disabled={!canSubmit || submitting}
                  >
                    {submitting ? "Submitting…" : "Submit enquiry"}
                  </button>

                  <div className="text-[12px] text-[#595858] text-center">
                    Need help sooner? Call <a className="underline" href="tel:02037400744">020 3740 0744</a>
                  </div>
                </form>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
