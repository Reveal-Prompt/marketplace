import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const baseUrl = process.env.BACKEND_URL || "http://localhost:8080";
    
    const res = await axios.get(`${baseUrl}/api/prompts/${id}`);
    
    return NextResponse.json(res.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch prompt" },
      { status: 500 }
    );
  }
}