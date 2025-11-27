import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(request: NextRequest) {
  try {
    const filter = request.nextUrl.searchParams.get("filter") || "latest";
    
    const baseUrl = process.env.BACKEND_URL || "http://localhost:8080";
    const res = await axios.get(`${baseUrl}/api/prompts?filter=${filter}`);
    
    return NextResponse.json(res.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch prompts" },
      { status: 500 }
    );
  }
}
