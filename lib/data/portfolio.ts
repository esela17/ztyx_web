import { prisma } from "@/lib/db";
import { cache } from "@/lib/cache";
import type { CachedData } from "@/lib/cache";

export async function getPortfolioItems(options?: {
  category?: string;
  featured?: boolean;
}): Promise<CachedData> {
  const cacheKey = `portfolio:${options?.category || "all"}:${options?.featured || "false"}`;

  return cache.fetch(cacheKey, async () => {
    const where: any = { published: true };

    if (options?.category && options.category !== "الكل") {
      where.category = options.category;
    }

    if (options?.featured) {
      where.featured = true;
    }

    const items = await prisma.portfolioItem.findMany({
      where,
      orderBy: [
        { featured: "desc" },
        { order: "asc" },
        { createdAt: "desc" },
      ],
    });

    return items;
  }, 1800); // 30 min cache
}

export async function getPortfolioBySlug(slug: string) {
  return cache.fetch(`portfolio:slug:${slug}`, async () => {
    return prisma.portfolioItem.findUnique({
      where: { slug },
    });
  }, 3600);
}

export async function getCourses(options?: {
  category?: string;
  featured?: boolean;
  published?: boolean;
}): Promise<CachedData> {
  const cacheKey = `courses:${options?.category || "all"}:${options?.featured || "false"}`;

  return cache.fetch(cacheKey, async () => {
    const where: any = {};

    if (options?.published !== undefined) {
      where.published = options.published;
    }

    if (options?.category) {
      where.category = options.category;
    }

    if (options?.featured) {
      where.isFeatured = true;
    }

    const courses = await prisma.course.findMany({
      where,
      include: {
        modules: {
          include: {
            lessons: true,
          },
          orderBy: { order: "asc" },
        },
      },
      orderBy: [
        { isFeatured: "desc" },
        { createdAt: "desc" },
      ],
    });

    return courses;
  }, 1800);
}

export async function getCourseBySlug(slug: string) {
  return cache.fetch(`course:slug:${slug}`, async () => {
    return prisma.course.findUnique({
      where: { slug },
      include: {
        modules: {
          include: {
            lessons: {
              orderBy: { order: "asc" },
            },
          },
          orderBy: { order: "asc" },
        },
      },
    });
  }, 3600);
}

export async function getCourseCategories() {
  return cache.fetch("course:categories", async () => {
    const categories = await prisma.course.groupBy({
      by: ["category"],
      where: { published: true },
    });
    return categories.map((c) => c.category);
  }, 86400);
}

export function invalidatePortfolioCache() {
  return cache.invalidate("portfolio:*");
}

export function invalidateCoursesCache() {
  return cache.invalidate("courses:*");
}