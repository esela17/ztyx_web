import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

const SEAT_ID = "python-course";
const INITIAL_SEATS = 20;

/** GET /api/seats — returns current remaining seats */
export async function GET() {
  try {
    const record = await prisma.seatCounter.upsert({
      where: { id: SEAT_ID },
      create: { id: SEAT_ID, remaining: INITIAL_SEATS },
      update: {},
    });
    return NextResponse.json({ remaining: record.remaining });
  } catch (error) {
    console.error("Seat GET error:", error);
    return NextResponse.json({ remaining: INITIAL_SEATS });
  }
}

/** POST /api/seats — decrements by 1 and returns new count */
export async function POST() {
  try {
    // Upsert ensures the row always exists, then decrement atomically
    const record = await prisma.seatCounter.upsert({
      where: { id: SEAT_ID },
      create: { id: SEAT_ID, remaining: INITIAL_SEATS - 1 },
      update: {
        remaining: {
          decrement: 1,
        },
      },
    });

    // Clamp at 0
    const remaining = Math.max(0, record.remaining);

    return NextResponse.json({ remaining });
  } catch (error) {
    console.error("Seat POST error:", error);
    return NextResponse.json(
      { error: "Failed to update seat count" },
      { status: 500 }
    );
  }
}
