import { proxyToBackend } from "@/lib/backendProxy";

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  let body: any = undefined;
  if (contentType.includes("application/json")) {
    body = await req.text(); // pass raw JSON string
  } else {
    body = await req.formData();
  }
  return proxyToBackend("/client/api/submit-enquiry/", {
    method: "POST",
    headers: contentType.includes("application/json") ? { "Content-Type": "application/json" } : undefined,
    body,
  });
}
