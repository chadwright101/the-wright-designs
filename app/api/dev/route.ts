import { NextRequest, NextResponse } from "next/server";
import data from "@/app/_data/projects-list.json";

const verifyBearerToken = (request) => {
  const authorizationHeader = request.headers.get("authorization");
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authorizationHeader.split(" ")[1];
  return token === process.env.BEARER_TOKEN;
};

const allowedOrigins = [
  process.env.NEXT_PUBLIC_ALLOWED_ORIGIN,
  process.env.NEXT_PUBLIC_DEV_ORIGIN,
];

export async function GET(request) {
  if (!verifyBearerToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function OPTIONS(request) {
  const origin = request.headers.get("origin");
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : "";

  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
      },
    }
  );
}

export async function handler(request) {
  const origin = request.headers.get("origin");
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : "";

  const corsHeaders = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
  };

  if (request.method === "OPTIONS") {
    return OPTIONS(request);
  }

  let response;

  if (request.method === "GET") {
    response = await GET(request);
  } else {
    response = NextResponse.json(
      { error: "Method Not Allowed" },
      { status: 405 }
    );
  }

  Object.keys(corsHeaders).forEach((key) => {
    response.headers.set(key, corsHeaders[key]);
  });

  return response;
}
