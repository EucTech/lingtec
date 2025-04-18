import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, skill } = body;

    if (!fullname || !email || !skill) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const existingUser = await prisma.waitlistUser.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      // If user exists, you can either return a message or update the record
      return NextResponse.json(
        { message: 'Email already exists on the waitlist' },
        { status: 400 }
      );
    }

    // Otherwise, create the new user
    await prisma.waitlistUser.create({
      data: {
        fullname,
        email,
        skill,
      },
    });


    // console.log("New join request:", { fullname, email, skill });

    return NextResponse.json({ message: "Success! You've been added to waitlist." }, { status: 201 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
