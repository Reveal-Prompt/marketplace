import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(request: NextRequest) {
  try {
    const page = request.nextUrl.searchParams.get("page") || "1";
    const limit = request.nextUrl.searchParams.get("limit") || "9";
    
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    const res = await axios.get(`${baseUrl}/api/prompts?page=${page}&limit=${limit}`);
    
    return NextResponse.json(res.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch prompts" },
      { status: 500 }
    );
  }
}