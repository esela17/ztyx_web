import { prisma } from '@/lib/db';

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = 'https://ztyx.com';

  const staticRoutes = [
    '',
    '/work',
    '/learn',
    '/contact',
    '/pricing',
    '/faq',
    '/seo',
    '/development',
    '/medical-marketing',
    '/media-production',
    '/terms',
    '/privacy',
  ];

  const staticPages: SitemapEntry[] = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    const portfolioItems = await prisma.portfolioItem.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const portfolioPages: SitemapEntry[] = portfolioItems.map((item: any) => ({
      url: `${baseUrl}/work/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    const courses = await prisma.course.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const coursePages: SitemapEntry[] = courses.map((course: any) => ({
      url: `${baseUrl}/learn/${course.slug}`,
      lastModified: course.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    return [...staticPages, ...portfolioPages, ...coursePages];
  } catch {
    return staticPages;
  }
}