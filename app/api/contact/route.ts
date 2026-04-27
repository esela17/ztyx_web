import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ratelimit, redis, invalidateCache } from "@/lib/cache/redis";

export async function POST(request: NextRequest) {
  // Only apply rate limiting if Redis is configured
  const rateLimitResult = await ratelimit?.limit("contact-form");
  if (rateLimitResult && !rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        status: "NEW",
      },
    });

    await invalidateCache("contact:*");

    return NextResponse.json(
      { success: true, data: submission },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Only use Redis cache if configured
  if (redis) {
    const cached = await redis.get("contact:submissions");
    if (cached) {
      return NextResponse.json(JSON.parse(cached as string));
    }
  }

  const submissions = await prisma.contactSubmission.findMany({
    where: { status: "NEW" },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  if (redis) {
    await redis.set("contact:submissions", JSON.stringify(submissions), { ex: 300 });
  }

  return NextResponse.json(submissions);
}