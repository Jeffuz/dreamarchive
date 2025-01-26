import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

// Get specific dream
export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Dream ID is required" },
      { status: 400 }
    );
  }
  try {
    const fetchSpecificDream = supabase
      .from("dreams")
      .select()
      .eq("id", id)
      .single();
    const { data, error } = await fetchSpecificDream;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
