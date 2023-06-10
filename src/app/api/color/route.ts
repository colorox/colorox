import { NextResponse } from "next/server";
import { getColorName } from "@/app/_utils/color";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const hex = "#" + searchParams.get("hex")?.toString();
  const color = getColorName(hex);
  return NextResponse.json(color);
}
