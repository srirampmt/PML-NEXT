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
    // console.log("time of execution start:", new Date(startTime).toISOString());
    const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
        ...options,
        headers: {
        "X-NEXT-SERVER-KEY": process.env.NEXT_SERVER_API_SECRET!,
        ...(options.headers || {}),
        },
        cache: "no-store",
    });
    console.log("Proxying to backend:", path, "Status:", res.status);
    const text = await res.text();
    console.log("Response text:", text);
    const endTime = Date.now();
    const delta = endTime - startTime;
    console.log("time of execution end:", new Date(endTime).toISOString());
    console.log("execution time delta:", delta, "ms");
    return new NextResponse(text, { status: res.status });
}
