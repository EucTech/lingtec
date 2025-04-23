import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../../../../prisma/generated/prisma";


const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, skill, projects } = body;

    if (!fullname ) {
      return NextResponse.json({ message: "Full name missing." }, { status: 400 });
    } else if (!email) {
      return NextResponse.json({ message: "Email missing." }, { status: 400 });
    } else if (!skill) {
      return NextResponse.json({ message: "Input your Skill." }, { status: 400 });
    }
    else if (!projects || projects.length === 0) {
      return NextResponse.json({ message: "Please select projects." }, { status: 400 });
    }

    const existingUser = await prisma.waitlistUser.findUnique({
      where: { email: email },
    });

    if (existingUser) {
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
        projects
      },
    });


    // console.log("New join request:", { fullname, email, skill, projects });

    return NextResponse.json({ message: "Success! You've been added to waitlist." }, { status: 201 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
