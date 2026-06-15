import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'كورس التأسيس البرمجي | المهندس إسلام حمادة (Mr. Code)',
  description: 'انطلق في رحلتك نحو الاحتراف من الصفر في عالم البرمجة مع المهندس إسلام حمادة. كورس تأسيس شامل ومكثف يؤهلك لدراسة أي لغة برمجة، وبناء أساس برمجي قوي للمستقبل.',
  keywords: [
    'كورس تأسيس برمجة',
    'تعلم البرمجة من الصفر',
    'إسلام حمادة',
    'Mr. Code',
    'أساسيات البرمجة',
    'كورس ذكاء اصطناعي',
    'دورة برمجة للمبتدئين',
    'تعليم التفكير الخوارزمي'
  ],
  openGraph: {
    title: 'كورس التأسيس البرمجي | المهندس إسلام حمادة (Mr. Code)',
    description: 'انطلق في رحلتك نحو الاحتراف من الصفر في عالم البرمجة. احجز مقعدك الآن في الدفعة الجديدة!',
    url: 'https://cureztyx.com/mr-code-foundation',
    siteName: 'ZTYX Learning',
    images: [
      {
        url: '/images/mr_code/COVER.png',
        width: 1200,
        height: 630,
        alt: 'كورس التأسيس البرمجي - إسلام حمادة',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كورس التأسيس البرمجي | المهندس إسلام حمادة (Mr. Code)',
    description: 'انطلق في رحلتك نحو الاحتراف من الصفر في عالم البرمجة. احجز مقعدك الآن في الدفعة الجديدة!',
    images: ['/images/mr_code/COVER.png'],
  },
};

export default function MrCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
