import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../images/smart-search.mp4";
import { useNavigate } from "react-router-dom";
import search from "../images/smartsearch.jpg";

// Translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "Smart Search in AI Tools",
    heroDesc: "Instantly find, compare, and deploy the best AI solutions for your business needs.",
    featuresTitle: "Features & Benefits",
    featuresHeadline: "Unlock Smart AI Search",
    featuresDesc: "Discover, compare, and deploy AI tools with our intelligent search platform. Get instant results, personalized recommendations, and seamless integration for your workflow.",
    featuresList: [
      "Advanced AI-powered search for tools, models, and APIs",
      "Real-time filtering by category, pricing, and integration",
      "Personalized recommendations based on your use case",
      "Seamless integration and instant deployment options"
    ],
    featureGrid: [
      { title: "Fast Search", desc: "Find AI tools instantly with smart filters." },
      { title: "Compare Easily", desc: "View features, pricing, and reviews side-by-side." },
      { title: "One-Click Deploy", desc: "Integrate or launch tools in seconds." },
      { title: "Personalized Results", desc: "Get recommendations tailored to your needs." }
    ],
    howWorksTitle: "How It Works",
    howWorksSteps: [
      { icon: "🔎", title: "Search", desc: "Enter your requirements or keywords." },
      { icon: "⚡", title: "Discover", desc: "View matching AI tools and solutions instantly." },
      { icon: "📊", title: "Compare", desc: "Analyze features, pricing, and reviews." },
      { icon: "🚀", title: "Deploy", desc: "Integrate or launch with one click." }
    ],
    overviewTitle: "Why Smart Search?",
    overviewDesc: "Our platform combines advanced search algorithms, real-time filtering, and personalized recommendations to help you discover the perfect AI tool for any business need.",
    overviewList: [
      "Instant results for any query",
      "Side-by-side comparison of features and pricing",
      "Easy integration and deployment",
      "Secure and reliable platform"
    ],
    overviewBtn: "Learn More",
    useCasesTitle: "Popular Smart Search Use Cases",
    useCases: [
      { icon: "💬", title: "Customer Support", desc: "Find chatbots and virtual assistants for instant help." },
      { icon: "🛒", title: "E-Commerce", desc: "Discover recommendation engines and analytics tools." },
      { icon: "🏥", title: "Healthcare", desc: "Search for diagnostic and scheduling AI solutions." },
      { icon: "🎓", title: "Education", desc: "Explore tutoring and content generation platforms." },
      { icon: "🏦", title: "Finance", desc: "Locate fraud detection and financial analysis models." }
    ],
    highlightsTitle: "Smart Search Highlights",
    highlightsDesc: "Discover the unique features that make Smart Search the best way to find and deploy AI tools for your business.",
    highlights: [
      { icon: "🔎", title: "Intelligent Matching", desc: "AI-powered algorithms match your needs to the best tools." },
      { icon: "📞", title: "Instant Support", desc: "Get help and recommendations in real time." },
      { icon: "🔗", title: "Easy Integration", desc: "Connect and deploy tools with a few clicks." },
      { icon: "📅", title: "Personalized Experience", desc: "Results and suggestions tailored for you." }
    ],
    ctaTitle: "Ready to Supercharge Your Workflow?",
    ctaDesc: "Start searching for the perfect AI tool and unlock new possibilities for your business.",
    ctaBtn: "Start Searching"
  },
  ar: {
    heroTitle: "البحث الذكي في أدوات الذكاء الاصطناعي",
    heroDesc: "اعثر فوراً على أفضل حلول الذكاء الاصطناعي وطبقها لاحتياجات عملك.",
    featuresTitle: "الميزات والفوائد",
    featuresHeadline: "اكتشف البحث الذكي بالذكاء الاصطناعي",
    featuresDesc: "اكتشف وقارن وطبق أدوات الذكاء الاصطناعي عبر منصة بحث ذكية. احصل على نتائج فورية وتوصيات مخصصة ودمج سلس في سير العمل.",
    featuresList: [
      "بحث متقدم مدعوم بالذكاء الاصطناعي للأدوات والنماذج وواجهات البرمجة",
      "تصفية لحظية حسب الفئة والسعر والتكامل",
      "توصيات مخصصة حسب استخدامك",
      "دمج فوري وخيارات تطبيق مباشرة"
    ],
    featureGrid: [
      { title: "بحث سريع", desc: "اعثر على الأدوات فوراً عبر فلاتر ذكية." },
      { title: "مقارنة سهلة", desc: "شاهد الميزات والأسعار والمراجعات جنباً إلى جنب." },
      { title: "تطبيق بنقرة واحدة", desc: "ادمج أو أطلق الأدوات في ثوانٍ." },
      { title: "نتائج مخصصة", desc: "احصل على توصيات تناسب احتياجاتك." }
    ],
    howWorksTitle: "كيف يعمل",
    howWorksSteps: [
      { icon: "🔎", title: "ابحث", desc: "أدخل متطلباتك أو الكلمات المفتاحية." },
      { icon: "⚡", title: "اكتشف", desc: "شاهد الأدوات والحلول المطابقة فوراً." },
      { icon: "📊", title: "قارن", desc: "حلل الميزات والأسعار والمراجعات." },
      { icon: "🚀", title: "طبق", desc: "ادمج أو أطلق بنقرة واحدة." }
    ],
    overviewTitle: "لماذا البحث الذكي؟",
    overviewDesc: "منصتنا تجمع بين خوارزميات بحث متقدمة وتصفية لحظية وتوصيات مخصصة لتساعدك في اكتشاف أفضل أداة ذكاء اصطناعي لأي احتياج.",
    overviewList: [
      "نتائج فورية لأي استفسار",
      "مقارنة الميزات والأسعار جنباً إلى جنب",
      "دمج وتطبيق سهل",
      "منصة آمنة وموثوقة"
    ],
    overviewBtn: "اعرف المزيد",
    useCasesTitle: "حالات استخدام البحث الذكي",
    useCases: [
      { icon: "💬", title: "دعم العملاء", desc: "اعثر على روبوتات الدردشة والمساعدين الافتراضيين." },
      { icon: "🛒", title: "التجارة الإلكترونية", desc: "اكتشف محركات التوصية وأدوات التحليل." },
      { icon: "🏥", title: "الرعاية الصحية", desc: "ابحث عن حلول التشخيص والجدولة الذكية." },
      { icon: "🎓", title: "التعليم", desc: "استكشف منصات التدريس وتوليد المحتوى." },
      { icon: "🏦", title: "المالية", desc: "اعثر على نماذج كشف الاحتيال والتحليل المالي." }
    ],
    highlightsTitle: "أبرز ميزات البحث الذكي",
    highlightsDesc: "اكتشف الميزات الفريدة التي تجعل البحث الذكي أفضل وسيلة للعثور على أدوات الذكاء الاصطناعي وتطبيقها.",
    highlights: [
      { icon: "🔎", title: "مطابقة ذكية", desc: "خوارزميات الذكاء الاصطناعي تطابق احتياجاتك مع أفضل الأدوات." },
      { icon: "📞", title: "دعم فوري", desc: "احصل على المساعدة والتوصيات فوراً." },
      { icon: "🔗", title: "دمج سهل", desc: "اتصل وطبق الأدوات بسهولة." },
      { icon: "📅", title: "تجربة مخصصة", desc: "نتائج وتوصيات تناسبك." }
    ],
    ctaTitle: "جاهز لتعزيز سير عملك؟",
    ctaDesc: "ابدأ البحث عن أداة الذكاء الاصطناعي المثالية وافتح إمكانيات جديدة لعملك.",
    ctaBtn: "ابدأ البحث"
  },
  he: {
    heroTitle: "חיפוש חכם בכלי AI",
    heroDesc: "מצא, השווה ויישם פתרונות AI לעסק שלך מיד.",
    featuresTitle: "תכונות ויתרונות",
    featuresHeadline: "גלה חיפוש AI חכם",
    featuresDesc: "גלה, השווה ויישם כלי AI עם פלטפורמת חיפוש חכמה. קבל תוצאות מידיות, המלצות מותאמות ושילוב קל בתהליך העבודה.",
    featuresList: [
      "חיפוש מתקדם לכלים, מודלים ו-API",
      "סינון בזמן אמת לפי קטגוריה, מחיר ושילוב",
      "המלצות מותאמות אישית לפי הצורך שלך",
      "שילוב ויישום מידי"
    ],
    featureGrid: [
      { title: "חיפוש מהיר", desc: "מצא כלים מיד עם פילטרים חכמים." },
      { title: "השוואה קלה", desc: "ראה תכונות, מחירים וביקורות זה לצד זה." },
      { title: "יישום בלחיצה", desc: "שלב או הפעל כלים בשניות." },
      { title: "תוצאות מותאמות", desc: "קבל המלצות לפי הצורך שלך." }
    ],
    howWorksTitle: "איך זה עובד",
    howWorksSteps: [
      { icon: "🔎", title: "חפש", desc: "הזן דרישות או מילות מפתח." },
      { icon: "⚡", title: "גלה", desc: "ראה כלים ופתרונות מתאימים מיד." },
      { icon: "📊", title: "השווה", desc: "נתח תכונות, מחירים וביקורות." },
      { icon: "🚀", title: "יישם", desc: "שלב או הפעל בלחיצה אחת." }
    ],
    overviewTitle: "למה חיפוש חכם?",
    overviewDesc: "הפלטפורמה שלנו משלבת אלגוריתמים מתקדמים, סינון בזמן אמת והמלצות מותאמות כדי לעזור לך למצוא את כלי ה-AI המושלם לכל צורך עסקי.",
    overviewList: [
      "תוצאות מידיות לכל שאילתה",
      "השוואת תכונות ומחירים זה לצד זה",
      "שילוב ויישום קל",
      "פלטפורמה מאובטחת ואמינה"
    ],
    overviewBtn: "למידע נוסף",
    useCasesTitle: "שימושים נפוצים בחיפוש חכם",
    useCases: [
      { icon: "💬", title: "תמיכת לקוחות", desc: "מצא צ'אטבוטים ומסייעים וירטואליים." },
      { icon: "🛒", title: "מסחר אלקטרוני", desc: "גלה מנועי המלצה וכלי אנליטיקה." },
      { icon: "🏥", title: "בריאות", desc: "חפש פתרונות אבחון ותזמון חכמים." },
      { icon: "🎓", title: "חינוך", desc: "גלה פלטפורמות לימוד ויצירת תוכן." },
      { icon: "🏦", title: "פיננסים", desc: "מצא מודלים לזיהוי הונאות וניתוח פיננסי." }
    ],
    highlightsTitle: "הדגשים בחיפוש חכם",
    highlightsDesc: "גלה את התכונות שהופכות את החיפוש החכם לדרך הטובה ביותר למצוא וליישם כלי AI לעסק שלך.",
    highlights: [
      { icon: "🔎", title: "התאמה חכמה", desc: "אלגוריתמים מבוססי AI מתאימים את הצורך שלך לכלי הטוב ביותר." },
      { icon: "📞", title: "תמיכה מידית", desc: "קבל עזרה והמלצות בזמן אמת." },
      { icon: "🔗", title: "שילוב קל", desc: "חבר ויישם כלים בכמה קליקים." },
      { icon: "📅", title: "חוויית משתמש מותאמת", desc: "תוצאות והמלצות לפי הצורך שלך." }
    ],
    ctaTitle: "מוכן להאיץ את העבודה שלך?",
    ctaDesc: "התחל לחפש את כלי ה-AI המושלם ופתח אפשרויות חדשות לעסק שלך.",
    ctaBtn: "התחל חיפוש"
  }
};

function SmartSearch() {
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
      {/* 1. Hero Section with Background Video & Tagline */}
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
      {/* Features & Benefits - Unique Style */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Headline & Description */}
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
          {/* Right: Feature Grid */}
          <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.featureGrid.map((f, i) => (
              <motion.div
                key={i}
                className="flex flex-col justify-center p-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-purple-900 dark:via-black dark:to-purple-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-700 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08 }}
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
      {/* 3. How It Works */}
      <section className="py-8 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">{t.howWorksTitle}</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {t.howWorksSteps.map((step, idx) => (
              <div key={idx} className="flip-card w-64 h-64">
                <div className="flip-card-inner group relative w-full h-full">
                  {/* Front Side */}
                  <div className="flip-card-front absolute w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-700 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:rotate-y-180">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-700 dark:bg-purple-400 text-white text-3xl font-bold mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">Step {idx + 1}</p>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back absolute w-full h-full bg-purple-700 dark:bg-purple-400 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center text-white font-semibold px-4 transition-transform duration-500 group-hover:rotate-y-0 group-hover:scale-105" style={{transform: 'rotateY(180deg)'}}>
                    <div className="text-lg mb-2">{step.title}</div>
                    <div className="text-sm">{step.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Flip card CSS */}
        <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d; }
          .flip-card:hover .flip-card-inner, .flip-card:focus .flip-card-inner, .flip-card .group:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back { backface-visibility: hidden; position: absolute; width: 100%; height: 100%; border-radius: 1rem; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section>
      {/* Chatbot Assistant Overview - Image & Content Side-by-Side */}
      <section className="py-10 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <img src={search} alt="Smart Search AI" className="rounded-3xl shadow-xl w-full max-w-md object-cover" />
          </div>
          {/* Right: Content */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">{t.overviewTitle}</h2>
            <p className="text-lg text-black dark:text-white mb-6">
              {t.overviewDesc}
            </p>
            <ul className="list-disc pl-6 text-base text-black dark:text-white space-y-2 mb-6">
              {t.overviewList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="mt-4">
              <button className="px-6 py-3 bg-purple-700 text-white dark:bg-purple-400 dark:text-black rounded-xl font-bold shadow hover:bg-purple-800 dark:hover:bg-purple-500 transition">{t.overviewBtn}</button>
            </div>
          </div>
        </div>
      </section>
      {/* AI Chatbot Use Cases - Horizontal Scroll Section */}
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
      {/* Chatbot & Assistant Personalities - Split Layout, No Cards */}
      <section className="py-10 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Heading & Description */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight">
              {t.highlightsTitle}
            </h2>
            <p className="text-lg text-black dark:text-white mb-6">
              {t.highlightsDesc}
            </p>
          </div>
          {/* Right: Vertical Persona List with Connecting Line */}
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
      {/* CTA Section - End of Page */}
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

export default SmartSearch;
