import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دبلومة Python التفاعلية | Mr Code — إسلام حمادة',
  description: 'منصة أنشطة دبلومة Python التفاعلية من مستر كود — عجلة الأسئلة، لعبة التوصيل، الذاكرة البرمجية، وأكثر!',
}

export default function MrCodePythonPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0 !important; padding: 0 !important; overflow: hidden !important; }
        body > *:not(#python-iframe-wrap) { display: none !important; }
      ` }} />
      <div
        id="python-iframe-wrap"
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
          src="/mr_code_python.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          title="دبلومة Python التفاعلية - مستر كود"
          allow="autoplay"
        />
      </div>
    </>
  )
}
