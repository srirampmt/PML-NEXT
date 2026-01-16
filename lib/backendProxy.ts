import { NextResponse } from "next/server";

function joinUrl(base: string, path: string) {
    const normalizedBase = base.replace(/\/+$/, "");
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${normalizedBase}${normalizedPath}`;
}

export async function proxyToBackend( path: string, options: RequestInit = {} ) {
    if (!process.env.BACKEND_URL) {
      throw new Error("BACKEND_URL is not set in the environment!");
    }
    if (!process.env.NEXT_SERVER_API_SECRET) {
      throw new Error("NEXT_SERVER_API_SECRET is not set in the environment!");
    }
    const startTime = Date.now();
        const backendUrl = process.env.BACKEND_URL;
        const fullUrl = joinUrl(backendUrl, path);
        const keyLen = process.env.NEXT_SERVER_API_SECRET.length;
        if (/\/api\/?$/.test(backendUrl) && path.startsWith("/api/")) {
            console.warn(
                "BACKEND_URL ends with /api and path starts with /api; you may be calling /api/api/...",
                { backendUrl, path }
            );
        }
    try {
        const incomingHeaders = new Headers(options.headers);
        // Always send the server key; do not allow caller headers to override it.
        incomingHeaders.set(
          "X-NEXT-SERVER-KEY",
          process.env.NEXT_SERVER_API_SECRET
        );
        const res = await fetch(fullUrl, {
            ...options,
            headers: incomingHeaders,
            cache: "no-store",
            signal: AbortSignal.timeout(30000), // 30 second timeout
        });
        
        const text = await res.text();
        const endTime = Date.now();
        const delta = endTime - startTime;
        return new NextResponse(text, { 
            status: res.status,
            headers: {
                "X-Backend-URL": fullUrl,
                "X-Execution-Time": `${delta}ms`,
                "X-Proxy-Key-Present": "true",
                "X-Proxy-Key-Len": String(keyLen),
                ...(res.headers.get("content-type")
                  ? { "Content-Type": res.headers.get("content-type")! }
                  : {}),
            }
        });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ 
                error: "Failed to connect to backend server",
                details: error instanceof Error ? error.message : "Unknown error",
                url: fullUrl
            }), 
            { status: 502, headers: { "Content-Type": "application/json" } }
        );
    }
}
