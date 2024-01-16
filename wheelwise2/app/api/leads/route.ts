import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const createLeadSchema = z.object({
  firstName: z.string().min(1).max(30),
  lastName: z.string().min(1).max(30),
  phone: z.string().min(1).regex(phoneRegex, "Phone Number is not valid!"),
  email: z.string().min(5).email(),
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
