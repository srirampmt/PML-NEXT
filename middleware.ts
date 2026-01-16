import { NextResponse, type NextRequest } from "next/server";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function normalizeOrganic(value: string): string {
  const v = value.trim().toLowerCase();
  if (!v) return "";
  if (["1", "true", "yes", "y", "organic"].includes(v)) return "1";
  if (["0", "false", "no", "n"].includes(v)) return "0";
  // If they send something else, store as-is.
  return value;
}

export function middleware(req: NextRequest) {
  const sp = req.nextUrl.searchParams;

  // Read both exact and common variant casings.
  const utmDetails = sp.get("Utm_details") ?? sp.get("utm_details") ?? "";
  const utmSource = sp.get("utm_source") ?? "";
  const utmMedium = sp.get("utm_medium") ?? "";
  const utmCampaign = sp.get("utm_campaign") ?? "";
  const utmId = sp.get("utmid") ?? sp.get("utm_id") ?? "";
  const utmIsOrganicRaw = sp.get("utm_is_organic") ?? "";
  const utmIsOrganic = utmIsOrganicRaw ? normalizeOrganic(utmIsOrganicRaw) : "";

  const shouldSet = Boolean(
    utmDetails || utmSource || utmMedium || utmCampaign || utmId || utmIsOrganicRaw
  );

  if (!shouldSet) return NextResponse.next();

  const res = NextResponse.next();

  const cookieOptions = {
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    httpOnly: false, // must be readable client-side for EnquiryModal
  };

  if (utmDetails) res.cookies.set("utm_details", utmDetails, cookieOptions);
  if (utmSource) res.cookies.set("utm_source", utmSource, cookieOptions);
  if (utmMedium) res.cookies.set("utm_medium", utmMedium, cookieOptions);
  if (utmCampaign) res.cookies.set("utm_campaign", utmCampaign, cookieOptions);
  if (utmId) res.cookies.set("utmid", utmId, cookieOptions);
  if (utmIsOrganicRaw) res.cookies.set("utm_is_organic", utmIsOrganic, cookieOptions);

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
