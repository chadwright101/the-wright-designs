// app/api/dev/route.ts

import { NextRequest, NextResponse } from "next/server";
import data from "@/app/_data/technical-data.json";

const verifyBearerToken = (request: NextRequest) => {
  const authorizationHeader = request.headers.get("authorization");
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authorizationHeader.split(" ")[1];
  return token === process.env.BEARER_TOKEN;
};

export async function GET(request: NextRequest) {
  const corsHeaders = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
  };

  if (request.method === "OPTIONS") {
    return NextResponse.json({}, { status: 200, headers: corsHeaders });
  }

  if (request.method !== "GET") {
    return NextResponse.json(
      { error: "Method Not Allowed" },
      { status: 405, headers: corsHeaders }
    );
  }

  if (!verifyBearerToken(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: corsHeaders }
    );
  }

  return NextResponse.json(data, { status: 200, headers: corsHeaders });
}
