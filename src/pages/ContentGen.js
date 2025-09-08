import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../images/ai-demo.mp4";
import { useNavigate } from "react-router-dom";
import Contentgen from "../images/contentgen.jpg";

// Translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "AI Content Generation Tools",
    heroDesc: "Create high-quality content, code, and media instantly with advanced AI generators.",
    featuresTitle: "Features & Benefits",
    featuresHeadline: "Unlock AI-Powered Creativity",
    featuresDesc: "Our AI content generation tools help you produce articles, blogs, code, images, and more—faster and smarter.",
    featuresList: [
      "Generate text, code, and images in seconds",
      "Maintain brand voice and style consistency",
      "Multilingual and multi-format support",
      "24/7 availability for instant content creation"
    ],
    featureGrid: [
      { title: "Natural Language Generation", desc: "Write articles, blogs, and product descriptions." },
      { title: "Code Generation", desc: "Instantly create code snippets and scripts." },
      { title: "Image & Media Creation", desc: "Generate visuals and videos for marketing." },
      { title: "Multilingual Support", desc: "Create content in multiple languages." },
      { title: "Brand Consistency", desc: "Enforce tone, style, and guidelines." },
      { title: "Analytics & Insights", desc: "Track content performance and engagement." }
    ],
    howWorksTitle: "How It Works",
    howWorksSteps: [
      { icon: "📝", title: "Choose Content Type", desc: "Select text, code, image, or video." },
      { icon: "🔍", title: "Input Requirements", desc: "Add prompts, keywords, or style guides." },
      { icon: "⚡", title: "Generate & Edit", desc: "Instantly create and refine your content." },
      { icon: "🚀", title: "Publish & Analyze", desc: "Deploy content and track results." }
    ],
    overviewTitle: "Why Use AI for Content Generation?",
    overviewDesc: "AI tools streamline your workflow, boost creativity, and ensure quality—saving time and resources.",
    overviewList: [
      "Automated writing and editing",
      "Fast code and script generation",
      "Visual content for social media and ads",
      "Consistent quality and compliance"
    ],
    overviewBtn: "Learn More",
    useCasesTitle: "AI Content Generation Use Cases",
    useCases: [
      { icon: "📝", title: "Blogging", desc: "Write SEO-friendly posts in minutes." },
      { icon: "📢", title: "Marketing", desc: "Create ad copy and social media content." },
      { icon: "🛒", title: "E-Commerce", desc: "Generate product descriptions and reviews." },
      { icon: "🎓", title: "Education", desc: "Produce learning materials and quizzes." },
      { icon: "💻", title: "Development", desc: "Generate code and documentation." },
      { icon: "🎨", title: "Design", desc: "Create images, banners, and videos." }
    ],
    highlightsTitle: "Content Generation Highlights",
    highlightsDesc: "Discover the unique features that make AI content generation fast, creative, and reliable for your business.",
    highlights: [
      { icon: "📄", title: "Creative Templates", desc: "Start with proven formats for any content type." },
      { icon: "⚡", title: "Real-Time Editing", desc: "Refine and improve content instantly." },
      { icon: "🤝", title: "Collaboration", desc: "Work with teams and share drafts easily." },
      { icon: "🔒", title: "Secure Storage", desc: "Keep your content safe and organized." }
    ],
    ctaTitle: "Ready to Create with AI?",
    ctaDesc: "Start generating high-quality content and unlock new possibilities for your business.",
    ctaBtn: "Start Generating"
  },
  ar: {
    heroTitle: "أدوات إنشاء المحتوى بالذكاء الاصطناعي",
    heroDesc: "أنشئ محتوى عالي الجودة، كود ووسائط فوراً باستخدام مولدات الذكاء الاصطناعي المتقدمة.",
    featuresTitle: "الميزات والفوائد",
    featuresHeadline: "اكتشف الإبداع المدعوم بالذكاء الاصطناعي",
    featuresDesc: "تساعدك أدوات إنشاء المحتوى بالذكاء الاصطناعي على إنتاج المقالات والمدونات والكود والصور والمزيد بسرعة وذكاء.",
    featuresList: [
      "إنشاء نصوص وكود وصور في ثوانٍ",
      "الحفاظ على صوت العلامة التجارية واتساق الأسلوب",
      "دعم متعدد اللغات والصيغ",
      "توفر دائم لإنشاء المحتوى فوراً"
    ],
    featureGrid: [
      { title: "إنشاء اللغة الطبيعية", desc: "كتابة المقالات والمدونات ووصف المنتجات." },
      { title: "توليد الكود", desc: "إنشاء مقتطفات الكود والبرمجيات فوراً." },
      { title: "إنشاء الصور والوسائط", desc: "إنشاء صور وفيديوهات للتسويق." },
      { title: "دعم متعدد اللغات", desc: "إنشاء محتوى بلغات متعددة." },
      { title: "اتساق العلامة التجارية", desc: "فرض النبرة والأسلوب والإرشادات." },
      { title: "تحليلات ورؤى", desc: "تتبع أداء المحتوى والتفاعل." }
    ],
    howWorksTitle: "كيف يعمل",
    howWorksSteps: [
      { icon: "📝", title: "اختر نوع المحتوى", desc: "حدد نص، كود، صورة أو فيديو." },
      { icon: "🔍", title: "أدخل المتطلبات", desc: "أضف التعليمات أو الكلمات المفتاحية أو دليل الأسلوب." },
      { icon: "⚡", title: "أنشئ وعدل", desc: "أنشئ وعدل المحتوى فوراً." },
      { icon: "🚀", title: "انشر وحلل", desc: "انشر المحتوى وتتبع النتائج." }
    ],
    overviewTitle: "لماذا تستخدم الذكاء الاصطناعي لإنشاء المحتوى؟",
    overviewDesc: "تعمل أدوات الذكاء الاصطناعي على تبسيط سير العمل، وتعزيز الإبداع، وضمان الجودة—وتوفير الوقت والموارد.",
    overviewList: [
      "كتابة وتحرير تلقائي",
      "توليد الكود والبرمجيات بسرعة",
      "محتوى مرئي لوسائل التواصل والإعلانات",
      "جودة واتساق دائم"
    ],
    overviewBtn: "اعرف المزيد",
    useCasesTitle: "حالات استخدام إنشاء المحتوى بالذكاء الاصطناعي",
    useCases: [
      { icon: "📝", title: "التدوين", desc: "اكتب مقالات متوافقة مع SEO في دقائق." },
      { icon: "📢", title: "التسويق", desc: "أنشئ نصوص إعلانات ومحتوى اجتماعي." },
      { icon: "🛒", title: "التجارة الإلكترونية", desc: "أنشئ أوصاف المنتجات والمراجعات." },
      { icon: "🎓", title: "التعليم", desc: "إنتاج مواد تعليمية واختبارات." },
      { icon: "💻", title: "البرمجة", desc: "توليد الكود والتوثيق." },
      { icon: "🎨", title: "التصميم", desc: "إنشاء صور، لافتات وفيديوهات." }
    ],
    highlightsTitle: "أبرز ميزات إنشاء المحتوى",
    highlightsDesc: "اكتشف الميزات الفريدة التي تجعل إنشاء المحتوى بالذكاء الاصطناعي سريعاً ومبدعاً وموثوقاً لأعمالك.",
    highlights: [
      { icon: "📄", title: "قوالب إبداعية", desc: "ابدأ بصيغ مجربة لأي نوع محتوى." },
      { icon: "⚡", title: "تحرير فوري", desc: "حسّن وعدل المحتوى فوراً." },
      { icon: "🤝", title: "تعاون", desc: "اعمل مع الفرق وشارك المسودات بسهولة." },
      { icon: "🔒", title: "تخزين آمن", desc: "احفظ محتواك بأمان وتنظيم." }
    ],
    ctaTitle: "جاهز للإنشاء بالذكاء الاصطناعي؟",
    ctaDesc: "ابدأ في إنشاء محتوى عالي الجودة وافتح إمكانيات جديدة لأعمالك.",
    ctaBtn: "ابدأ الآن"
  },
  he: {
    heroTitle: "כלי יצירת תוכן ב-AI",
    heroDesc: "צור תוכן, קוד ומדיה איכותיים מיד עם מחוללי AI מתקדמים.",
    featuresTitle: "תכונות ויתרונות",
    featuresHeadline: "שחרר יצירתיות מבוססת AI",
    featuresDesc: "כלי יצירת התוכן שלנו מאפשרים לך להפיק מאמרים, בלוגים, קוד, תמונות ועוד—מהר וחכם.",
    featuresList: [
      "יצירת טקסט, קוד ותמונות בשניות",
      "שמירה על קול וסגנון המותג",
      "תמיכה רב-לשונית ורב-פורמטית",
      "זמינות מסביב לשעון ליצירת תוכן מיידית"
    ],
    featureGrid: [
      { title: "יצירת שפה טבעית", desc: "כתיבת מאמרים, בלוגים ותיאורי מוצרים." },
      { title: "יצירת קוד", desc: "יצירת קטעי קוד וסקריפטים מיד." },
      { title: "יצירת תמונות ומדיה", desc: "יצירת ויזואלים וסרטונים לשיווק." },
      { title: "תמיכה רב-לשונית", desc: "יצירת תוכן בשפות שונות." },
      { title: "עקביות מותג", desc: "שמירה על טון, סגנון והנחיות." },
      { title: "אנליטיקה ותובנות", desc: "מעקב אחרי ביצועי התוכן ומעורבות." }
    ],
    howWorksTitle: "איך זה עובד",
    howWorksSteps: [
      { icon: "📝", title: "בחר סוג תוכן", desc: "בחר טקסט, קוד, תמונה או וידאו." },
      { icon: "🔍", title: "הזן דרישות", desc: "הוסף הנחיות, מילות מפתח או מדריך סגנון." },
      { icon: "⚡", title: "צור וערוך", desc: "צור וערוך תוכן מיד." },
      { icon: "🚀", title: "פרסם ונתח", desc: "פרסם תוכן ומדוד תוצאות." }
    ],
    overviewTitle: "למה להשתמש ב-AI ליצירת תוכן?",
    overviewDesc: "כלי AI מייעלים את העבודה, מגבירים יצירתיות ומבטיחים איכות—חוסכים זמן ומשאבים.",
    overviewList: [
      "כתיבה ועריכה אוטומטית",
      "יצירת קוד וסקריפטים במהירות",
      "תוכן חזותי לרשתות חברתיות ומודעות",
      "איכות ועמידה בדרישות קבועה"
    ],
    overviewBtn: "למידע נוסף",
    useCasesTitle: "שימושים ביצירת תוכן ב-AI",
    useCases: [
      { icon: "📝", title: "בלוגים", desc: "כתיבת פוסטים מותאמי SEO בדקות." },
      { icon: "📢", title: "שיווק", desc: "יצירת טקסטים למודעות ותוכן לרשתות." },
      { icon: "🛒", title: "מסחר אלקטרוני", desc: "יצירת תיאורי מוצרים וביקורות." },
      { icon: "🎓", title: "חינוך", desc: "הפקת חומרי לימוד ומבחנים." },
      { icon: "💻", title: "פיתוח", desc: "יצירת קוד ותיעוד." },
      { icon: "🎨", title: "עיצוב", desc: "יצירת תמונות, באנרים וסרטונים." }
    ],
    highlightsTitle: "הדגשים ביצירת תוכן",
    highlightsDesc: "גלה את התכונות הייחודיות שהופכות את יצירת התוכן ב-AI למהירה, יצירתית ואמינה לעסק שלך.",
    highlights: [
      { icon: "📄", title: "תבניות יצירתיות", desc: "התחל עם פורמטים מוכחים לכל סוג תוכן." },
      { icon: "⚡", title: "עריכה בזמן אמת", desc: "שפר וערוך תוכן מיד." },
      { icon: "🤝", title: "שיתוף פעולה", desc: "עבוד עם צוותים ושתף טיוטות בקלות." },
      { icon: "🔒", title: "אחסון מאובטח", desc: "שמור את התוכן שלך מאורגן ובטוח." }
    ],
    ctaTitle: "מוכן ליצור עם AI?",
    ctaDesc: "התחל ליצור תוכן איכותי ופתח אפשרויות חדשות לעסק שלך.",
    ctaBtn: "התחל ליצור"
  }
};

function ContentGen() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for language changes from header
    const syncLanguage = () => {
      const lang = localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("storage", syncLanguage);

    // Also listen for custom event from header (for immediate update)
    const customLangChange = (e) => {
      const lang = e.detail || localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("languageChange", customLangChange);

    // Initial sync
    syncLanguage();

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  const t = translations[language] || translations["en"];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={heroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg text-center"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-center"
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 w-full mb-8 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight">
              {t.featuresTitle}
            </h2>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
              {t.featuresHeadline}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {t.featuresDesc}
            </p>
            <ul className="list-disc pl-6 text-base text-purple-700 dark:text-purple-300 space-y-2">
              {t.featuresList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
          <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.featureGrid.map((f, i) => (
              <motion.div
                key={i}
                className="flex flex-col justify-center p-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-purple-900 dark:via-black dark:to-purple-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-700 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(128,0,128,0.2)" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-1">{f.title}</h4>
                <p className="text-black dark:text-white text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-8 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">{t.howWorksTitle}</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {t.howWorksSteps.map((step, idx) => (
              <div key={idx} className="flip-card w-64 h-64">
                <div className="flip-card-inner group relative w-full h-full">
                  <div className="flip-card-front absolute w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-700 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:rotate-y-180">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-700 dark:bg-purple-400 text-white text-3xl font-bold mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">Step {idx + 1}</p>
                  </div>
                  <div className="flip-card-back absolute w-full h-full bg-purple-700 dark:bg-purple-400 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center text-white font-semibold px-4 transition-transform duration-500 group-hover:rotate-y-0 group-hover:scale-105" style={{transform: 'rotateY(180deg)'}}>
                    <div className="text-lg mb-2">{step.title}</div>
                    <div className="text-sm">{step.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d; }
          .flip-card:hover .flip-card-inner, .flip-card:focus .flip-card-inner, .flip-card .group:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back { backface-visibility: hidden; position: absolute; width: 100%; height: 100%; border-radius: 1rem; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section>

      {/* Overview Section */}
      <section className="py-10 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <img src={Contentgen} alt="AI Chatbot Assistant" className="rounded-3xl shadow-xl w-full max-w-md object-cover" />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">{t.overviewTitle}</h2>
            <p className="text-lg text-black dark:text-white mb-6">{t.overviewDesc}</p>
            <ul className="list-disc pl-6 text-base text-black dark:text-white space-y-2 mb-6">
              {t.overviewList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="mt-4">
              <button className="px-6 py-3 bg-purple-700 text-white dark:bg-purple-400 dark:text-black rounded-xl font-bold shadow hover:bg-purple-800 dark:hover:bg-purple-500 transition">{t.overviewBtn}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-5 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-10 text-black dark:text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {t.useCasesTitle}
          </motion.h2>
          <motion.div
            className="flex overflow-x-auto gap-8 pb-4 hide-scrollbar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.useCases.map((use, idx) => (
              <motion.div
                key={idx}
                className="min-w-[260px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-purple-900 dark:via-black dark:to-purple-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-700 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(128,0,128,0.2)" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-700 dark:bg-purple-400 text-white dark:text-black text-3xl font-bold mb-4">{use.icon}</div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2 text-center">{use.title}</h3>
                <p className="text-black dark:text-white text-sm text-center">{use.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      {/* Highlights Section */}
      <section className="py-10 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight">
              {t.highlightsTitle}
            </h2>
            <p className="text-lg text-black dark:text-white mb-6">
              {t.highlightsDesc}
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-start relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-purple-300 dark:bg-purple-700 rounded-full"></div>
            {t.highlights.map((f, i) => (
              <div key={i} className="flex items-center mb-10 last:mb-0 relative z-10">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-700 dark:bg-purple-400 text-white text-xl font-bold mr-6 shadow-lg">{f.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white mb-1">{f.title}</h4>
                  <p className="text-black dark:text-white text-sm max-w-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300 dark:from-purple-900 dark:via-purple-700 dark:to-purple-400">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-black mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-purple-100 dark:text-purple-900 mb-8">
            {t.ctaDesc}
          </p>
          <button className="px-8 py-4 bg-white text-purple-700 dark:bg-black dark:text-purple-300 rounded-xl font-bold shadow-lg hover:bg-purple-100 dark:hover:bg-purple-800 transition text-xl" onClick={()=>handleGetStarted("/contact")}>
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContentGen;
