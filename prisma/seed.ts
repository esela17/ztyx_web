import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.favoritePortfolio.deleteMany()
  await prisma.courseProgress.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.module.deleteMany()
  await prisma.course.deleteMany()
  await prisma.portfolioItem.deleteMany()
  await prisma.contactSubmission.deleteMany()

  // Seed Portfolio Items
  const portfolioItems = [
    {
      title: "موقع Cure ZTYX المتكامل",
      slug: "cure-ztyx-website",
      category: "Software Development",
      image: "/category/Screenshot 2026-04-21 134241.png",
      link: "https://cureztyx.com",
      featured: true,
      description: "نظام إدارة محتوى طبي متكامل مع لوحة تحكم ذكية للأطباء.",
      order: 1,
    },
    {
      title: "تصميم هوية بصرية لمركز رعايي",
      slug: "raeei-branding",
      category: "Graphic Design",
      image: "/category/Logo-Raeei.jpg",
      featured: false,
      description: "بناء علامة تجارية تعكس الثقة والاحترافية في القطاع الطبي.",
      order: 2,
    },
    {
      title: "تطبيق HIS لإدارة العيادات",
      slug: "his-app",
      category: "Software Development",
      image: "/category/iPhone 12 Pro 6.1_ Mockup Front View-1.png",
      featured: false,
      description: "تطبيق موبايل شامل لحجز المواعيد وإدارة السجلات الطبية.",
      order: 3,
    },
    {
      title: "حملة تسويقية لمركز النخبة",
      slug: "el-nokta-marketing",
      category: "Medical Marketing",
      image: "/category/Screenshot 2026-04-21 133648.png",
      featured: true,
      description: "استراتيجية تسويق رقمي ضاعفت معدل الحجوزات بنسبة 300%.",
      order: 4,
    },
    {
      title: "إنتاج فيديو سينمائي طبي",
      slug: "medical-cinematic-video",
      category: "Media Production",
      image: "/category/Screenshot 2026-04-21 133756.png",
      featured: false,
      description: "قصة نجاح مصورة بأسلوب سينمائي يبرز الجانب الإنساني للطب.",
      order: 5,
    },
  ]

  for (const item of portfolioItems) {
    await prisma.portfolioItem.create({ data: item })
  }

  // Seed Courses
  const aiCourse = await prisma.course.create({
    data: {
      title: "التحدث مع الغباء الاصطناعي بذكاء",
      slug: "ai-prompt-engineering",
      description: "كورس شامل يعلمك فن هندسة الأوامر (Prompt Engineering) وكيفية التعامل مع أدوات الذكاء الاصطناعي باحترافية.",
      category: "ai",
      level: "BEGINNER",
      duration: 180,
      isFeatured: true,
      published: true,
    },
  })

  // Add modules to AI course
  await prisma.module.create({
    data: {
      title: "مقدمة في الذكاء الاصطناعي",
      order: 1,
      courseId: aiCourse.id,
      lessons: {
        create: [
          { title: "ما هو الذكاء الاصطناعي؟", content: "مقدمة شاملة...", duration: 15, order: 1 },
          { title: "تاريخ تطور الـ AI", content: "رحلة التطور...", duration: 20, order: 2 },
        ],
      },
    },
  })

  await prisma.module.create({
    data: {
      title: "أساسيات هندسة الأوامر",
      order: 2,
      courseId: aiCourse.id,
      lessons: {
        create: [
          { title: "مفهوم Prompt Engineering", content: "تعلم الأس...", duration: 25, order: 1 },
          { title: "تقنيات الكتابة الفعالة", content: "أفضل الممارسات...", duration: 30, order: 2 },
        ],
      },
    },
  })

  // Seed more courses
  await prisma.course.create({
    data: {
      title: "التسويق الطبي الرقمي",
      slug: "medical-digital-marketing",
      description: "تعلم أحدث استراتيجيات التسويق الرقمي للقطاع الطبي.",
      category: "marketing",
      level: "INTERMEDIATE",
      duration: 240,
      isFeatured: false,
      published: true,
    },
  })

  // Seed Contact Submissions (sample)
  await prisma.contactSubmission.create({
    data: {
      name: "أحمد محمد",
      email: "ahmed@example.com",
      phone: "+201234567890",
      subject: "استشارة تسويق طبي",
      message: "أريد معرفة المزيد عن خدمات التسويق الطبي",
      status: "NEW",
    },
  })

  console.log('✅ Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })