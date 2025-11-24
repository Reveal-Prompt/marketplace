import axios from "axios";

export const revalidate = 60; 

export async function GET() {
  try {
    const res = await axios.get("http://localhost:8080/api/prompts", {
      // Not needed for axios, but ensures Next.js caches output
    });

    return Response.json(res.data);
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Failed to fetch prompts" },
      { status: 500 }
    );
  }
}
