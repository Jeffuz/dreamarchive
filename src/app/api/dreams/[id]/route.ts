import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

// Get specific dream
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

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

// Update specific Dream
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  if (!id) {
    return NextResponse.json(
      { error: "Dream ID is required" },
      { status: 400 }
    );
  }

  try {
    const { title, description } = await req.json();
    if (!title && !description) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const updateSpecificDream = supabase
      .from("dreams")
      .update({ title, description })
      .eq("id", id)
      .select()
      .single();

    const { data, error } = await updateSpecificDream;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Dream updated successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// Delete specific dream
