import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const { name, nickname } = await request.json();
  console.log(name, nickname);
  return NextResponse.json({ message: "Create Data" });
}

export function PUT() {
  return NextResponse.json({ message: "Alter Data" });
}

export function DELETE() {
  return NextResponse.json({ message: "Delete Data" });
}
