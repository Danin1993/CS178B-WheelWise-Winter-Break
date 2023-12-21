import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createLeadSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createLeadSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newLead = await prisma.lead.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newLead, { status: 201 });
}
