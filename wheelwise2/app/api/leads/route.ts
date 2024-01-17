import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createLeadSchema } from "@/app/components/Schemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createLeadSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newLead = await prisma.leads.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
    },
  });

  return NextResponse.json(newLead, { status: 201 });
}
