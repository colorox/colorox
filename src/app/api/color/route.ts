import { getColorName, getTextColor } from "@/app/utils/color";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const color = getColorName("#242424")
  return NextResponse.json(color.name)
}


