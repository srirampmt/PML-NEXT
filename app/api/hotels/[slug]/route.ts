import { proxyToBackend } from "@/lib/backendProxy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return proxyToBackend(`/client/api/hotels/${slug}/`);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const BACKEND_URL = process.env.BACKEND_URL;
    const API_SECRET = process.env.NEXT_SERVER_API_SECRET;

    if (!BACKEND_URL || !API_SECRET) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send search update request to Django backend
    const url = `${BACKEND_URL}/client/update-hotel-search/`;
    console.log(body);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-NEXT-SERVER-KEY": API_SECRET,
      },
      body: JSON.stringify({
        ...body,
        slug,
      }),
    });

    const backendText = await response.text();
    let backendJson: any = null;
    if (backendText) {
      try {
        backendJson = JSON.parse(backendText);
      } catch {
        backendJson = null;
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Search update failed",
          backendStatus: response.status,
          backendBody: backendJson ?? backendText,
        },
        { status: response.status }
      );
    }

    if (!backendJson) {
      return NextResponse.json(
        {
          success: false,
          error: "Backend returned non-JSON response",
          backendStatus: response.status,
          backendBody: backendText,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      data: backendJson,
    });
  } catch (error) {
    console.error("Error updating hotel search:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update search" },
      { status: 500 }
    );
  }
}
