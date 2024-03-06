import { NextRequest, NextResponse } from "next/server";

const data = [
  { id: 1, name: "Alex", born: 1990 },
  { id: 2, name: "Bony", born: 1993 },
  { id: 3, name: "Clide", born: 1995 },
  { id: 4, name: "Taras", born: 1999 },
];

export function GET(request, response) {
  return NextResponse.json(data);
}

//need fix
export async function POST(request) {
  console.log(request);
  const body = JSON.parse(request.body);

  console.log(body);
  return Response.json({ he: "he" });
}
