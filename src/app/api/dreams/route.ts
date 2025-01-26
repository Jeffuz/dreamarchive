import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

// Get all dreams
export async function GET() {
  try {
    const fetchAllDreamsQuery = supabase.from("dreams").select();
    const { data, error } = await fetchAllDreamsQuery;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
