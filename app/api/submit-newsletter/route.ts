import { proxyToBackend } from "@/lib/backendProxy";

export async function POST(req: Request) {
  const data = await req.json();

  return proxyToBackend("/client/api/submit-newsletter/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
