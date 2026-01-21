"use client";
import EnquiryForm, { type EnquiryInitialValues } from "@/components/hotels/EnquiryForm";
import { useEffect } from "react";

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
  initialValues?: EnquiryInitialValues;
};
export default function EnquiryModal({ open, onClose, initialValues }: EnquiryModalProps) {
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
            <EnquiryForm initialValues={initialValues} onClose={onClose} />
          </div>
      </div>
    </div>
  );
}
