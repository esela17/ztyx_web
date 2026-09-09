import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الامتحان الإلكتروني المعياري | تكنولوجيا المعلومات والذكاء الاصطناعي',
  description: 'اختبار إلكتروني معياري تفاعلي يشمل 40 سؤالاً مع توقيت زمني لكل سؤال ونظام حماية متقدم.',
}

export default function ExamPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0 !important; padding: 0 !important; overflow: hidden !important; }
        body > *:not(#exam-iframe-wrap) { display: none !important; }
      ` }} />
      <div
        id="exam-iframe-wrap"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 99999,
          background: '#04050A',
        }}
      >
        <iframe
          src="/exam.html?v=5"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          title="الامتحان الإلكتروني المعياري"
          allow="autoplay"
        />
      </div>
    </>
  )
}
