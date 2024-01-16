import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createLeadSchema = z.object({
  firstName: z.string().min(1).max(30),
  lastName: z.string().min(1).max(30),
  phone: z.string().min(1), // Additional validation can be added based on your requirements
  email: z.string().email(), // Validates that the string is in email format
});

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
