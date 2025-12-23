import { NextResponse } from "next/server";
import { start } from "node:repl";

export async function proxyToBackend(
  path: string,
  options: RequestInit = {}
) {
    if (!process.env.BACKEND_URL) {
      throw new Error("BACKEND_URL is not set in the environment!");
    }
    if (!process.env.NEXT_SERVER_API_SECRET) {
      throw new Error("NEXT_SERVER_API_SECRET is not set in the environment!");
    }
    const startTime = Date.now();
    const backendUrl = process.env.BACKEND_URL;
    const fullUrl = `${backendUrl}${path}`;
    
    console.log("Attempting to proxy to:", fullUrl);
    console.log("Backend URL:", backendUrl);
    console.log("Path:", path);
    
    try {
        const res = await fetch(fullUrl, {
            ...options,
            headers: {
                "X-NEXT-SERVER-KEY": process.env.NEXT_SERVER_API_SECRET!,
                ...(options.headers || {}),
            },
            cache: "no-store",
            signal: AbortSignal.timeout(30000), // 30 second timeout
        });
        
        console.log("Proxying to backend:", path, "Status:", res.status);
        const text = await res.text();
        console.log("Response text:", text);
        const endTime = Date.now();
        const delta = endTime - startTime;
        console.log("time of execution end:", new Date(endTime).toISOString());
        console.log("execution time delta:", delta, "ms");
        return new NextResponse(text, { 
            status: res.status,
            headers: {
                "X-Backend-URL": fullUrl,
                "X-Execution-Time": `${delta}ms`
            }
        });
    } catch (error) {
        console.error("Backend proxy error:", error);
        console.error("Failed URL:", fullUrl);
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
