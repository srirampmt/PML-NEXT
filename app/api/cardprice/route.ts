import { NextResponse } from "next/server";

type FetchExternalOptions = {
	timeoutMs?: number;
	headers?: HeadersInit;
};

function addDaysUtc(base: Date, days: number): Date {
	const d = new Date(base.getTime());
	d.setUTCDate(d.getUTCDate() + days);
	return d;
}

function formatYyyyMmDdUtc(d: Date): string {
	return d.toISOString().slice(0, 10);
}

function normalizeDpSearchQuery(input: string): string {
	const now = new Date();
	const dateMin = formatYyyyMmDdUtc(addDaysUtc(now, 3));
	const dateMax = formatYyyyMmDdUtc(addDaysUtc(now, 90));

	if (/^https?:\/\//i.test(input)) {
		const u = new URL(input);
		u.searchParams.set("dateMin", dateMin);
		u.searchParams.set("dateMax", dateMax);
		if (u.searchParams.has("cheapestPerDay")) u.searchParams.delete("cheapestPerDay");
		u.searchParams.set("cheapestPerDuration", "0");
		return u.toString();
	}

	let prefix = "";
	let queryString = input;
	const qIndex = input.indexOf("?");
	if (qIndex >= 0) {
		prefix = input.slice(0, qIndex + 1);
		queryString = input.slice(qIndex + 1);
	} else if (queryString.startsWith("?")) {
		queryString = queryString.slice(1);
	}

	const params = new URLSearchParams(queryString);
	params.set("dateMin", dateMin);
	params.set("dateMax", dateMax);
	if (params.has("cheapestPerDay")) params.delete("cheapestPerDay");
	params.set("cheapestPerDuration", "0");
	return `${prefix}${params.toString()}`;
}

/**
 * Fetch JSON from an external URL and return the parsed JSON.
 *
 * - Validates the URL is http/https.
 * - Adds a timeout.
 * - Throws a descriptive error on non-2xx responses.
 */
async function fetchExternalJson(url: string, options: FetchExternalOptions = {}) {
	if (!url || typeof url !== "string") {
		throw new Error("Missing url");
	}
	const query = normalizeDpSearchQuery(url);
	const apiKey = process.env.THIRDPARTY_API_KEY;
    const api_url = `${apiKey}${query}`;
	
    // console.log("API URL:", api_url);
	const timeoutMs = options.timeoutMs ?? 15_000;
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

	try {
		const res = await fetch(api_url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				...(apiKey ? { "X-API-KEY": apiKey } : {}),
				...(options.headers ?? {}),
			},
			signal: controller.signal,
			cache: "no-store",
		});

		if (!res.ok) {
			const body = await res.text().catch(() => "");
			throw new Error(`Upstream error ${res.status}: ${body.slice(0, 500)}`);
		}
		const data = await res.json();
        // console.log("Fetched data:", data);
		return data;
	} finally {
		clearTimeout(timeoutId);
	}
}


function extractCheapestTotalPrice(data: unknown): number | null {
	// Based on the dpSearch response shape you shared:
	// { Status, Count, Results: [{ totalPrice: number, ... }], Search: {...} }
	if (!data || typeof data !== "object") return null;
	const record = data as Record<string, unknown>;

	const results = record["Results"];
	if (Array.isArray(results) && results.length > 0) {
		const first = results[0] as Record<string, unknown>;
		const v = first?.["totalPrice"];
		const n = typeof v === "number" ? v : typeof v === "string" ? Number(v) : NaN;
		return Number.isFinite(n) ? n : null;
	}

	const top = record["totalPrice"];
	const n = typeof top === "number" ? top : typeof top === "string" ? Number(top) : NaN;
	return Number.isFinite(n) ? n : null;
}

function extractDurationMax(data: unknown): number | null {
	if (!data || typeof data !== "object") return null;
	const record = data as Record<string, unknown>;
	const search = record["Search"];
	if (!search || typeof search !== "object") return null;
	const durationMax = (search as Record<string, unknown>)["durationMax"];
	const n = typeof durationMax === "number" ? durationMax : typeof durationMax === "string" ? Number(durationMax) : NaN;
	return Number.isFinite(n) ? n : null;
}

export async function GET(req: Request) {
	const parsed = new URL(req.url);
	// Support both styles:
	// 1) /api/cardprice?url=<querystring>
	// 2) /api/cardprice?<querystring>   (no encoding/decoding)
	const url = parsed.searchParams.get("url") ?? (parsed.search.startsWith("?") ? parsed.search.slice(1) : "");
	

	try {
		const data = await fetchExternalJson(url);
		const price = extractCheapestTotalPrice(data);
		const durationMax = extractDurationMax(data);
		return NextResponse.json({ price, durationMax });
	} catch (e) {
		const message = e instanceof Error ? e.message : "Unknown error";
		return NextResponse.json({ success: false, error: message }, { status: 400 });
	}
}
