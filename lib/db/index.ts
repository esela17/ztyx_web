import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Type-safe database access
export const db = {
  // Portfolio
  portfolio: {
    findMany: async (options?: {
      category?: string;
      featured?: boolean;
      published?: boolean;
    }) => {
      const where: any = {};
      if (options?.published !== undefined) where.published = options.published;
      if (options?.category && options.category !== "الكل") where.category = options.category;
      if (options?.featured) where.featured = true;

      return prisma.portfolioItem.findMany({
        where,
        orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
      });
    },

    findUnique: async (slug: string) => {
      return prisma.portfolioItem.findUnique({ where: { slug } });
    },

    findFirst: async (id: string) => {
      return prisma.portfolioItem.findFirst({ where: { id } });
    },
  },

  // Courses
  course: {
    findMany: async (options?: {
      category?: string;
      featured?: boolean;
      published?: boolean;
    }) => {
      const where: any = {};
      if (options?.published !== undefined) where.published = options.published;
      if (options?.category) where.category = options.category;
      if (options?.featured) where.isFeatured = true;

      return prisma.course.findMany({
        where,
        include: {
          modules: {
            include: { lessons: true },
            orderBy: { order: "asc" },
          },
        },
        orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
      });
    },

    findUnique: async (slug: string) => {
      return prisma.course.findUnique({
        where: { slug },
        include: {
          modules: {
            include: { lessons: { orderBy: { order: "asc" } } },
            orderBy: { order: "asc" },
          },
        },
      });
    },

    findModules: async (courseId: string) => {
      return prisma.module.findMany({
        where: { courseId },
        include: { lessons: { orderBy: { order: "asc" } } },
        orderBy: { order: "asc" },
      });
    },
  },

  // Contact
  contact: {
    create: async (data: {
      name: string;
      email: string;
      phone?: string;
      subject?: string;
      message: string;
    }) => {
      return prisma.contactSubmission.create({ data });
    },

    findMany: async (status?: string) => {
      const where: any = {};
      if (status) where.status = status;
      return prisma.contactSubmission.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: 50,
      });
    },
  },

  // User Progress
  progress: {
    upsert: async (data: {
      userId: string;
      courseId: string;
      completedLessons: string[];
      progressPercent: number;
    }) => {
      return prisma.courseProgress.upsert({
        where: { userId_courseId: { userId: data.userId, courseId: data.courseId } },
        update: {
          completedLessons: data.completedLessons.join(","),
          progressPercent: data.progressPercent,
          lastAccessed: new Date(),
        },
        create: {
          userId: data.userId,
          courseId: data.courseId,
          completedLessons: data.completedLessons.join(","),
          progressPercent: data.progressPercent,
        },
      });
    },

    find: async (userId: string, courseId: string) => {
      return prisma.courseProgress.findUnique({
        where: { userId_courseId: { userId, courseId } },
      });
    },
  },
};

export default db;