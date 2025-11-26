import axios from "axios";

export const revalidate = 60;

export async function GET(filter: string = "latest") {
  try {
    const res = await axios.get(`http://localhost:8080/api/prompts?filter=${filter}`);
    return new Response(JSON.stringify(res.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Failed to fetch prompts" }), {
      status: 500,
    });
  }
}
