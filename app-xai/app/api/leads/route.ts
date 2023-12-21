import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createLeadSchema = z.object({
  title: z.string().min(2).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createLeadSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  console.log(body.title);
  console.log(body.description);

  const newLead = await prisma.lead.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newLead, { status: 201 });
}
