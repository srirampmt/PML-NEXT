"use client";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import EnquiryForm, { type EnquiryInitialValues } from "@/components/hotels/EnquiryForm";
import MobileEnquiryForm from "@/components/hotels/MobileEnquiryForm";
import { HotelDeal } from "@/types/hotel";
import {
  formatAirline,
  formatAirport,
  formatDateTime,
  formatNights,
  getBoardBasisText,
  getEffectivePrice,
  getPricePerPerson,
} from "@/lib/hotel-utils";
import { X } from "lucide-react";
// MobileEnquiryFormWrapper wires up form state and sticky submit button for mobile
import { useState, useMemo, useEffect } from "react";
function MobileEnquiryFormWrapper({ initialValues, onClose }: { initialValues?: EnquiryInitialValues; onClose?: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fields, setFields] = useState({
    fullName: { value: initialValues?.fullName ?? "", touched: false, focused: false },
    contactNumber: { value: initialValues?.contactNumber ?? "", touched: false, focused: false },
    email: { value: initialValues?.email ?? "", touched: false, focused: false },
    message: { value: initialValues?.message ?? "", touched: false, focused: false },
  });
  useEffect(() => {
    setSubmitted(false);
    setSubmitError("");
    setSubmitting(false);
    // Do not reset fields here to avoid resetting on every initialValues change
  }, [initialValues]);
  console.log()
  const errors = useMemo(() => {
    const fullName = fields.fullName.value.trim();
    const contactNumber = fields.contactNumber.value.trim();
    const email = fields.email.value.trim();
    return {
      fullName: fullName ? "" : "Full name is required.",
      contactNumber: contactNumber ? (/\d/g.test(contactNumber) && contactNumber.replace(/\D/g, "").length >= 7 && contactNumber.replace(/\D/g, "").length <= 16 ? "" : "Contact number contains an invalid number.") : "Contact number is required.",
      email: email ? (/^[^\s@]+@[^-\s@]+\.[^\s@]+$/.test(email) ? "" : "Please enter a valid email address.") : "Email address is required.",
      message: "",
    };
  }, [fields]);
  const canSubmit = useMemo(() => !errors.fullName && !errors.contactNumber && !errors.email, [errors]);
  const setValue = (name: keyof typeof fields, value: string) => setFields((prev) => ({ ...prev, [name]: { ...prev[name], value } }));
  const setFocused = (name: keyof typeof fields, focused: boolean) => setFields((prev) => ({ ...prev, [name]: { ...prev[name], focused } }));
  const setTouched = (name: keyof typeof fields) => setFields((prev) => ({ ...prev, [name]: { ...prev[name], touched: true } }));
  const showError = (name: keyof typeof fields) => fields[name].touched && !!errors[name];

  // UTM extraction helpers (from cookies and URL)
  function getCookie(name: string): string {
    if (typeof document === "undefined") return "";
    const prefix = `${encodeURIComponent(name)}=`;
    const found = document.cookie.split("; ").find((row) => row.startsWith(prefix));
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
  function getUtmFromUrl() {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utmid: params.get("utmid") || undefined,
      utm_is_organic: params.get("utm_is_organic") || undefined,
      utm_details: params.get("utm_details") || undefined,
    };
  }

  const handleSubmit = async () => {
    if (submitting) return;
    (Object.keys(fields) as Array<keyof typeof fields>).forEach((k) => setTouched(k));
    if (!canSubmit) return;
    setSubmitting(true);
    setSubmitError("");
    // Compose enquiryText
    const message = fields.message.value.trim();
    const enquiryTextFinal = message.trim() || "General enquiry";
    // UTM: prefer URL, fallback to cookies
    const utmUrl = getUtmFromUrl();
    const utmCookies = getUtmFromCookies();
    const utm = { ...utmCookies, ...utmUrl };
    // Compose payload for JSON submission
    const payload: Record<string, any> = {
      firstName: fields.fullName.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.contactNumber.value.trim(),
      enquiry: enquiryTextFinal,
      enquiry_source: initialValues?.source || "unknown",
      badge_text: initialValues?.source || "unknown",
      quote_reference: initialValues?.quoteRef || "",
      deal_data_json: initialValues?.dealdata || null,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utmid: utm.utmid,
      utm_is_organic: utm.utm_is_organic,
      utm_details: utm.utm_details,
    };
    try {
      const res = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null));
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
  // Sticky footer submit button
  return (
    <>
      <MobileEnquiryForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitting={submitting}
        submitError={submitError}
        submitted={submitted}
        onClose={onClose}
        fields={fields}
        setValue={setValue}
        setFocused={setFocused}
        setTouched={setTouched}
        errors={errors}
        showError={showError}
        canSubmit={canSubmit}
      />
      {!submitted && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#CB2187]/30 px-4 py-3 z-[1002]">
          <button
            type="button"
            className="w-full bg-[#CB2187] hover:bg-pink-800 text-white font-semibold py-3 rounded-[8px] transition-all duration-200 text-[16px] disabled:opacity-60"
            disabled={!canSubmit || submitting}
            onClick={handleSubmit}
          >
            {submitting ? "Submitting…" : "Submit enquiry"}
          </button>
        </div>
      )}
    </>
  );
}


export default function MobileDealSheet({
  open,
  onOpenChange,
  deal,
  enquiryInitialValues,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deal: HotelDeal | null;
  enquiryInitialValues: EnquiryInitialValues;
}) {
  // Mobile-only render: keep desktop unchanged.
  if (!deal) return null;

  const outbound = formatDateTime(deal.flight.outboundDepartureDate);
  const outboundArrival = formatDateTime(deal.flight.outboundArrivalDate);
  const inbound = formatDateTime(deal.flight.inboundDepartureDate);
  const inboundArrival = formatDateTime(deal.flight.inboundArrivalDate);

  const outboundFlightNumber = `${formatAirline(deal.flight.outboundFlightSupplier)} - ${deal.flight.outboundFlightNumber}`;
  const inboundFlightNumber = `${formatAirline(deal.flight.inboundFlightSupplier)} - ${deal.flight.inboundFlightNumber}`;

  const departureCode = `${formatAirport(deal.flight.departureAirportCode)}`;
  const arrivalCode = `${formatAirport(deal.flight.arrivalAirportCode)}`;

  const pricePerPerson = getPricePerPerson(getEffectivePrice(deal));

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="w-screen max-w-none h-screen overflow-y-auto bg-white z-[1001] p-0"
        >
          <SheetHeader className="sticky top-0 bg-white z-10 py-4 px-4 border-b">
            <SheetTitle className="flex items-center justify-between text-[16px] font-semibold text-pml-primary font-['Montserrat']">
              <span className="text-[16px] font-semibold">{enquiryInitialValues.resort}</span>
              <SheetClose aria-label="Close">
                <X size={20} className="cursor-pointer" />
              </SheetClose>
            </SheetTitle>
          </SheetHeader>

          <div className="px-2 py-2 space-y-4 font-['Montserrat']">
            {/* Luxury Themed Deal Summary */}
            <div className=" rounded-[4px] bg-white border border-black/10 p-4 font-['Montserrat']">
              {!!deal.hotel.boardBasis && (
                <div className="flex items-center justify-between text-black text-[15px] leading-[24px] font-normal border-b border-black/10 pb-2 font-['Montserrat']">
                  <div className="flex items-center gap-1">
                    <span className="p-1 inline-flex items-center justify-center w-7 h-7">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4063 2.1875L17.4053 17.2012C17.6741 17.6436 17.9522 17.8136 18.1854 17.8125C18.4168 17.8114 18.6919 17.6393 18.9555 17.2102L18.2357 9.5418L18.2273 9.4484L18.2849 9.37394C19.112 8.31266 19.4011 6.4791 19.1651 4.92824C19.0471 4.15277 18.8002 3.4509 18.4544 2.95473C18.1644 2.53863 17.8184 2.2732 17.4064 2.1875H17.4063ZM2.86043 2.18766L2.8598 4.8098L2.36918 4.80918V2.18781H1.81039L1.81047 4.8093H1.31914V2.18781H0.75V6.22016C0.749961 6.66613 0.993359 6.91344 1.37656 7.06633L1.53516 7.12969L1.53164 7.30039C1.45352 10.6039 1.37629 13.9074 1.29875 17.2109C1.56594 17.648 1.84039 17.8136 2.06891 17.8125C2.29742 17.8114 2.57164 17.6415 2.83543 17.2097C2.745 13.9071 2.65457 10.6044 2.5643 7.30172L2.55961 7.12984L2.71871 7.06711C3.12199 6.90672 3.3843 6.63453 3.3843 6.22039V2.18766H2.86043ZM10.0005 3.71094C8.33258 3.71094 6.73294 4.37353 5.55351 5.55296C4.37408 6.73239 3.71148 8.33204 3.71148 10C3.71148 11.668 4.37408 13.2676 5.55351 14.447C6.73294 15.6265 8.33258 16.2891 10.0005 16.2891C11.6685 16.2891 13.2682 15.6265 14.4476 14.447C15.627 13.2676 16.2896 11.668 16.2896 10C16.2896 8.33204 15.627 6.73239 14.4476 5.55296C13.2682 4.37353 11.6685 3.71094 10.0005 3.71094Z" fill="#CB2187"/>
                      </svg>
                    </span>
                    <span className="font-medium text-[#CB2187] font-['Montserrat']">{getBoardBasisText(deal.hotel.boardBasis)}</span>
                  </div>
                  <span className="font-bold text-[#595858] text-[16px] font-['Montserrat'] tracking-wide">{formatNights(deal.hotel.duration)}</span>
                </div>
              )}
              <div className="flex flex-col gap-2 my-2">
                {/* Outbound Flight */}
                <div className="flex items-start gap-3">
                  <div className="mt-[3px]">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6281 15.83L14.4163 5.7616C14.4163 5.47948 14.5924 5.10933 14.8222 4.93284L15.5977 4.36859C15.6157 4.36859 15.6157 4.35099 15.6157 4.35099L17.5906 2.90517C17.6082 2.88711 17.6434 2.86996 17.661 2.85236C18.2604 2.34092 18.6134 1.14157 18.0492 0.471695C17.4849 -0.198176 16.2504 -0.0925492 15.6333 0.401277L12.9881 2.62305C12.7764 2.79909 12.3711 2.88756 12.089 2.81715L2.40878 0.190024C2.12666 0.119155 1.73891 0.207177 1.5272 0.418882L0.751256 1.15917C0.539551 1.35327 0.575212 1.61779 0.839278 1.75908L8.50939 5.79681C8.7563 5.93809 8.79151 6.18501 8.58026 6.37911L4.64815 9.64089H4.52447L0.645629 9.19988C0.504342 9.18227 0.345451 9.28835 0.310243 9.41203L0.0105159 10.3636C-0.024693 10.5049 0.0285717 10.6638 0.169407 10.7337L2.86695 12.1448C2.99063 12.2152 3.13146 12.3741 3.14907 12.5149L3.8546 15.4774C3.88981 15.6183 4.03064 15.7239 4.17193 15.7063L5.15958 15.6535C5.2322 15.6501 5.30149 15.6221 5.356 15.574C5.4105 15.5259 5.44695 15.4606 5.45931 15.389L5.97029 11.5097C5.97029 11.4745 5.98835 11.4216 6.00595 11.3864L8.31574 9.71176C8.33335 9.71176 8.33334 9.69371 8.35095 9.69371L10.1493 8.38917C10.3786 8.21268 10.6255 8.3183 10.6959 8.58327L12.7588 16.9937C12.8297 17.2758 13.0766 17.3638 13.3231 17.223L14.2227 16.6407C14.4516 16.4827 14.6457 16.1121 14.6281 15.83Z" fill="#CB2187"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="font-semibold text-[#CB2187] text-[15px] leading-[24px] font-['Montserrat']">Outbound flight:</span>
                      <span className="text-[15px] text-black leading-[24px] font-medium font-['Montserrat']">{outboundFlightNumber}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-[#CB2187] text-[14px] leading-[24px] font-['Montserrat']">{departureCode}</div>
                        <div className="text-[14px] text-black leading-[24px] font-normal font-['Montserrat']">
                          {outbound.date}, {outbound.time}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-[#CB2187] text-[14px] leading-[24px] font-['Montserrat']">{arrivalCode}</div>
                        <div className="text-[14px] text-black leading-[24px] font-normal font-['Montserrat']">
                          {outboundArrival.date}, {outboundArrival.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Inbound Flight */}
                <div className="flex items-start gap-3">
                  <div className="mt-[3px]">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.70495 15.83L3.91666 5.7616C3.91666 5.47948 3.74061 5.10933 3.51085 4.93284L2.73536 4.36859C2.7173 4.36859 2.7173 4.35099 2.7173 4.35099L0.742445 2.90517C0.72484 2.88711 0.689631 2.86996 0.672026 2.85236C0.0725727 2.34092 -0.280416 1.14157 0.283829 0.471695C0.848072 -0.198176 2.08264 -0.0925492 2.69969 0.401277L5.34487 2.62305C5.55658 2.79909 5.96193 2.88756 6.24405 2.81715L15.9242 0.190024C16.2064 0.119155 16.5941 0.207177 16.8058 0.418882L17.5818 1.15917C17.7935 1.35327 17.7578 1.61779 17.4937 1.75908L9.82362 5.79681C9.57671 5.93809 9.5415 6.18501 9.75275 6.37911L13.6849 9.64089H13.8085L17.6874 9.19988C17.8287 9.18227 17.9876 9.28835 18.0228 9.41203L18.3225 10.3636C18.3577 10.5049 18.3044 10.6638 18.1636 10.7337L15.4661 12.1448C15.3424 12.2152 15.2015 12.3741 15.1839 12.5149L14.4784 15.4774C14.4432 15.6183 14.3024 15.7239 14.1611 15.7063L13.1734 15.6535C13.1008 15.6501 13.0315 15.6221 12.977 15.574C12.9225 15.5259 12.8861 15.4606 12.8737 15.389L12.3627 11.5097C12.3627 11.4745 12.3447 11.4216 12.3271 11.3864L10.0173 9.71176C9.99966 9.71176 9.99966 9.69371 9.98206 9.69371L8.1837 8.38917C7.95439 8.21268 7.70748 8.3183 7.63706 8.58327L5.57418 16.9937C5.50331 17.2758 5.2564 17.3638 5.00994 17.223L4.11031 16.6407C3.88145 16.4827 3.68735 16.1121 3.70495 15.83Z" fill="#CB2187"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="font-semibold text-[#CB2187] text-[15px] leading-[24px] font-['Montserrat']">Inbound flight:</span>
                      <span className="text-[15px] text-black leading-[24px] font-medium font-['Montserrat']">{inboundFlightNumber}</span>
                    </div>
                    <div className="flex justify-between items-start text-sm sm:text-base">
                      <div>
                        <div className="font-semibold text-[#CB2187] text-[14px] leading-[24px] font-['Montserrat']">{arrivalCode}</div>
                        <div className="text-[14px] text-black leading-[24px] font-normal font-['Montserrat']">
                          {inbound.date}, {inbound.time}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-[#CB2187] text-[14px] leading-[24px] font-['Montserrat']">{departureCode}</div>
                        <div className="text-[14px] text-black leading-[24px] font-normal font-['Montserrat']">
                          {inboundArrival.date}, {inboundArrival.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Board Basis & Duration */}
                
              </div>
              <div className="flex justify-between items-center border-t border-black/10 pt-2">
                <span className="text-[13px] font-semibold text-[#595858] font-['Montserrat']">Price Per Person <span className="font-normal text-[#595858]">(incl. Flights)</span></span>
                <div className="text-[22px] font-extrabold text-[#CB2187] font-['Montserrat'] tracking-wide">{pricePerPerson}<span className="text-[15px] font-bold text-[#595858]"> PP</span></div>
              </div>
            </div>

            {/* Mobile Enquiry Form with sticky submit button */}
            <MobileEnquiryFormWrapper
              initialValues={enquiryInitialValues}
              onClose={() => onOpenChange(false)}
            />

          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
