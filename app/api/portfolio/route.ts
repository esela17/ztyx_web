import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCached } from "@/lib/cache/redis";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  const cacheKey = `portfolio:${category || "all"}:${featured || "all"}`;

  return NextResponse.json(
    await getCached(cacheKey, async () => {
      const where: any = { published: true };

      if (category && category !== "الكل") {
        where.category = category;
      }

      if (featured === "true") {
        where.featured = true;
      }

      return prisma.portfolioItem.findMany({
        where,
        orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
      });
    }, 1800)
  );
}