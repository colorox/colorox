import { NextResponse } from "next/server";
import { connectDB } from "@/app/_config/connectdb";
import { Palette } from "@/app/_models/Palette";

export async function GET(req: Request) {
    connectDB(process.env.LOCAL_DB_URL as string)
    return NextResponse.json("hello")
}

export async function POST(req: Request) {
    try {
        const doc = new Palette({
            colors: ["red", "orange"],
            categories: ["cold", "blue"],
            likes: 24,
            date: new Date(Date.now())
        })
        const result = doc.save();
        return NextResponse.json({ status: 'SUCCESS', message: "New palette created successfully.", result })
    }
    catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }
}



