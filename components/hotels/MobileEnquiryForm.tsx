"use client";

import { useRef } from "react";
import { type EnquiryInitialValues } from "@/components/hotels/EnquiryForm";

export default function MobileEnquiryForm({
  initialValues,
  onSubmit,
  submitting,
  submitError,
  submitted,
  onClose,
  fields,
  setValue,
  setFocused,
  setTouched,
  errors,
  showError,
  canSubmit,
}: {
  initialValues?: EnquiryInitialValues;
  onSubmit: () => void;
  submitting: boolean;
  submitError: string;
  submitted: boolean;
  onClose?: () => void;
  fields: any;
  setValue: any;
  setFocused: any;
  setTouched: any;
  errors: any;
  showError: any;
  canSubmit: boolean;
}) {
  // No quoteRef field, reduced input heights, sticky submit button
  return (
    <div className="bg-[#F3F3F3] rounded-[4px] p-3 pb-24">
      {submitted ? (
        <div className="rounded-[4px] border border-green-600 bg-green-50 p-4 text-[#4C4C4C]">
          <div className="font-semibold">Message sent!</div>
          <div className="text-sm mt-1">Thank you for your enquiry. We’ll be in touch shortly.</div>
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full bg-pml-primary hover:bg-pink-800 text-white font-semibold py-3 rounded-[8px] transition-all duration-200 text-[16px]"
            >
              Close
            </button>
          ) : null}
        </div>
      ) : (
        <form className="space-y-3" onSubmit={e => { e.preventDefault(); onSubmit(); }}>
          {submitError ? (
            <div className="rounded-[4px] border border-red-600 bg-red-50 p-3 text-[13px] text-red-700">
              {submitError}
            </div>
          ) : null}
          <div>
            <input
              type="text"
              placeholder="Full name"
              className={`w-full bg-white px-3 py-2 text-[14px] outline-none border rounded-[4px] ${fields.fullName.focused ? "border-blue-600" : fields.fullName.touched && errors.fullName ? "border-red-600" : fields.fullName.touched && !errors.fullName && fields.fullName.value.trim() ? "border-green-600" : "border-[#9F9F9F]"}`}
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
              className={`w-full bg-white px-3 py-2 text-[14px] outline-none border rounded-[4px] ${fields.contactNumber.focused ? "border-blue-600" : fields.contactNumber.touched && errors.contactNumber ? "border-red-600" : fields.contactNumber.touched && !errors.contactNumber && fields.contactNumber.value.trim() ? "border-green-600" : "border-[#9F9F9F]"}`}
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
              className={`w-full bg-white px-3 py-2 text-[14px] outline-none border rounded-[4px] ${fields.email.focused ? "border-blue-600" : fields.email.touched && errors.email ? "border-red-600" : fields.email.touched && !errors.email && fields.email.value.trim() ? "border-green-600" : "border-[#9F9F9F]"}`}
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
              rows={3}
              className={`w-full bg-white px-3 py-2 text-[14px] outline-none border rounded-[4px] resize-none ${fields.message.focused ? "border-blue-600" : fields.message.touched && errors.message ? "border-red-600" : fields.message.touched && !errors.message && fields.message.value.trim() ? "border-green-600" : "border-[#9F9F9F]"}`}
              value={fields.message.value}
              onChange={(e) => setValue("message", e.target.value)}
              onFocus={() => setFocused("message", true)}
              onBlur={() => {
                setFocused("message", false);
                setTouched("message");
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
}
