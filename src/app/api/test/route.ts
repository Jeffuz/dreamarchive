import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    console.log(await req.json())
    return NextResponse.json(req, { status: 200 })
}