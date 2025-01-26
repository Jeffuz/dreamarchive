import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const fetchAllDreamsQuery = supabase.from("dreams").select();
  const { data, error } = await fetchAllDreamsQuery;
  if (error) throw error;
  console.log(data);
  return NextResponse.json(data, { status: 200 });
}
