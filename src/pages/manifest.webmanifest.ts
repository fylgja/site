import type { APIRoute } from "astro";
import webmanifest from "@/webmanifest";

export const GET: APIRoute = () => new Response(JSON.stringify(webmanifest, null, 2));
