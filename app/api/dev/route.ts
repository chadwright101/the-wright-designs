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

export async function GET(request) {
  if (request.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  if (!verifyBearerToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(data, { status: 200 });
}
