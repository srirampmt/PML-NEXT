import { NextResponse } from "next/server";
import { proxyToBackend } from "@/lib/backendProxy";

type SupplierPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: string;
  message?: string;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value : value == null ? "" : String(value);
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Expected Content-Type: application/json" },
      { status: 415 }
    );
  }

  const raw = await req.json().catch(() => null);
  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const payload: SupplierPayload = {
    first_name: asString((raw as any).first_name).trim(),
    last_name: asString((raw as any).last_name).trim(),
    email: asString((raw as any).email).trim(),
    phone_number: asString((raw as any).phone_number).trim(),
    company: asString((raw as any).company).trim(),
    message: asString((raw as any).message).trim(),
  };

  if (
    !payload.first_name ||
    !payload.last_name ||
    !payload.email ||
    !payload.phone_number ||
    !payload.company
  ) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: [
          "first_name",
          "last_name",
          "email",
          "phone_number",
          "company",
        ],
      },
      { status: 400 }
    );
  }

  return proxyToBackend("/client/api/suppliers/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}
