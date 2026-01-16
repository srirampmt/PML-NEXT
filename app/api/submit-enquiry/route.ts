import { proxyToBackend } from "@/lib/backendProxy";

export async function POST(req: Request) {
  const formData = await req.formData();

  return proxyToBackend("/client/api/submit-enquiry/", {
    method: "POST",
    body: formData,
  });
}
