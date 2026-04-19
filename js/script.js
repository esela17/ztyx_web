// 1. نظام التبويبات (Tabs Switching)
function switchTab(tabId) {
    // إخفاء كل التبويبات
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // إظهار التبويب المطلوب
    document.getElementById('tab-' + tabId).classList.add('active');
    event.target.classList.add('active');
}

// 2. تأثير التمرير المتخفي (Parallax Background)
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxBg = document.getElementById('hero-parallax');
    const navbar = document.getElementById('navbar');

    // تحريك خلفية الـ Parallax ببطء
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }

    
    // إضافة ظل للقائمة العلوية عند النزول
    if (scrolled > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 3. مراقب عناصر الظهور (Intersection Observer for Reveal Animations)
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        threshold: 0.15, // يبدأ التأثير عند ظهور 15% من العنصر
        rootMargin: "0px 0px -30px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور لتحسين الأداء
            }
        });
    }, observerOptions);

    // تشغيل المراقب على جميع العناصر التي تحمل كلاس reveal-up
    document.querySelectorAll('.reveal-up').forEach(el => {
        observer.observe(el);
    });
});