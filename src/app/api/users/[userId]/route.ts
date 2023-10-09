import { NextRequest, NextResponse } from "next/server";

console.log(process.env.TOKEN)
console.log(process.env.SECREAT_KEY)
export async function GET(request: NextRequest, { params }: any) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("name"));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}
