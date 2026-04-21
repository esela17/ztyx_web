import { Globe, Layout, Palette, Camera } from 'lucide-react';
import React from 'react';

export type PortfolioCategory = "Software Development" | "Medical Marketing" | "Graphic Design" | "Media Production" | "UI/UX Design";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  link?: string;
  featured?: boolean;
  description?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "موقع Cure ZTYX المتكامل",
    category: "Software Development",
    image: "/category/Screenshot 2026-04-21 134241.png",
    link: "https://cureztyx.com",
    featured: true,
    description: "نظام إدارة محتوى طبي متكامل مع لوحة تحكم ذكية للأطباء."
  },
  {
    id: "2",
    title: "تصميم هوية بصرية لمركز رعايي",
    category: "Graphic Design",
    image: "/category/Logo-Raeei.jpg",
    description: "بناء علامة تجارية تعكس الثقة والاحترافية في القطاع الطبي."
  },
  {
    id: "3",
    title: "تطبيق HIS لإدارة العيادات",
    category: "Software Development",
    image: "/category/iPhone 12 Pro 6.1_ Mockup Front View-1.png",
    description: "تطبيق موبايل شامل لحجز المواعيد وإدارة السجلات الطبية."
  },
  {
    id: "4",
    title: "حملة تسويقية لمركز النخبة",
    category: "Medical Marketing",
    image: "/category/Screenshot 2026-04-21 133648.png",
    description: "استراتيجية تسويق رقمي ضاعفت معدل الحجوزات بنسبة 300%."
  },
  {
    id: "5",
    title: "إنتاج فيديو سينمائي طبي",
    category: "Media Production",
    image: "/category/Screenshot 2026-04-21 133756.png",
    description: "قصة نجاح مصورة بأسلوب سينمائي يبرز الجانب الإنساني للطب."
  },
  {
    id: "6",
    title: "تصميم واجهة مستخدم Dashboard",
    category: "UI/UX Design",
    image: "/category/Screenshot 2026-04-21 133810.png",
    description: "واجهة استخدام ذكية تهدف لتبسيط المهام اليومية للطواقم الطبية."
  },
  {
    id: "7",
    title: "مشروع تطوير المنظومة الصحية",
    category: "Software Development",
    image: "/category/جامعه.png",
    description: "تطوير قاعدة بيانات مركزية للمنشآت الصحية الكبرى."
  },
  {
    id: "8",
    title: "تصميمات السوشيال ميديا",
    category: "Graphic Design",
    image: "/category/Screenshot 2026-04-21 134012.png",
    description: "محتوى بصري جذاب يعزز من حضور العيادة على منصات التواصل."
  },
  {
    id: "9",
    title: "منظومة إدارة المستشفيات",
    category: "Software Development",
    image: "/category/Screenshot 2026-04-21 134440.png",
    description: "حلول برمجية متكاملة لربط كافة أقسام المستشفى إلكترونياً."
  },
  {
    id: "10",
    title: "هوية بصرية - عيادة الجلدية",
    category: "Graphic Design",
    image: "/category/Screenshot 2026-04-21 134455.png",
    description: "تصميم يعكس الأناقة والنظافة المطلوبة في مراكز التجميل."
  },
  {
    id: "11",
    title: "تطبيق حجز المواعيد",
    category: "Software Development",
    image: "/category/Screenshot 2026-04-21 134504.png",
    description: "واجهة حجز سلسة تدعم الدفع الإلكتروني والمتابعة الفورية."
  },
  {
    id: "12",
    title: "حملة التسويق عبر جوجل",
    category: "Medical Marketing",
    image: "/category/Screenshot 2026-04-21 134514.png",
    description: "تحليل الكلمات المفتاحية لضمان الظهور في النتائج الأولى للبحث."
  },
  {
    id: "13",
    title: "تصميم واجهة مستخدم App",
    category: "UI/UX Design",
    image: "/category/Screenshot 2026-04-21 134524.png",
    description: "رحلة مستخدم مدروسة بعناية لزيادة معدل التحويل (Conversion)."
  },
  {
    id: "14",
    title: "إنتاج محتوى فيديو طبي",
    category: "Media Production",
    image: "/category/Screenshot 2026-04-21 134539.png",
    description: "فيديوهات تعليمية تهدف لزيادة الوعي الصحي للمرضى."
  },
  {
    id: "15",
    title: "براندينج احترافي لمركز عيون",
    category: "Graphic Design",
    image: "/category/Screenshot 2026-04-21 133909.png",
    description: "بناء هوية بصرية قوية تترك انطباعاً دائماً."
  },
  {
    id: "16",
    title: "موشن جرافيك طبي",
    category: "Media Production",
    image: "/category/Screenshot 2026-04-21 133937.png",
    description: "شرح العمليات الطبية المعقدة بأسلوب بصري مبسط."
  },
  {
    id: "17",
    title: "إعلانات سناب شات وإنستغرام",
    category: "Medical Marketing",
    image: "/category/Screenshot 2026-04-21 134113.png",
    description: "استهداف دقيق للجمهور المهتم بالخدمات الطبية النوعية."
  },
  {
    id: "18",
    title: "تصوير فوتوغرافي للمنشآت",
    category: "Media Production",
    image: "/category/Screenshot 2026-04-21 134152.png",
    description: "إبراز حداثة التجهيزات الطبية بلمسات احترافية."
  },
  {
    id: "19",
    title: "ستوديو ZTYX الإبداعي",
    category: "UI/UX Design",
    image: "/category/0150556.png",
    description: "مقر العمل حيث تولد الأفكار الإبداعية وتتحول لواقع."
  },
  {
    id: "20",
    title: "مستقبل الذكاء الاصطناعي",
    category: "Software Development",
    image: "/category/Gemini_Generated_Image_j67acfj67acfj67a copy.png",
    description: "دمج تقنيات الـ AI في تشخيص وتحليل البيانات الطبية."
  }
];

export const categories = ["الكل", "Software Development", "Medical Marketing", "Graphic Design", "Media Production", "UI/UX Design"];
