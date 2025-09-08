import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../images/data-analytics.mp4";
import { useNavigate } from "react-router-dom";
import dataanalysis from "../images/dataanalysis.jpg";

// Translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "AI Data Analytics Tools",
    heroDesc: "Unlock actionable insights, automate reporting, and make smarter decisions with advanced AI analytics.",
    featuresTitle: "Features & Benefits",
    featuresHeadline: "Unlock Data-Driven Decisions",
    featuresDesc: "Our AI analytics tools help you visualize data, predict trends, and automate business intelligence for every team.",
    featuresList: [
      "Real-time dashboards and visualizations",
      "Predictive analytics and forecasting",
      "Automated reporting and alerts",
      "Integrate with any data source"
    ],
    featureGrid: [
      { title: "Data Visualization", desc: "Interactive charts and dashboards." },
      { title: "Predictive Modeling", desc: "Forecast sales, demand, and trends." },
      { title: "Automated Reporting", desc: "Schedule and share insights instantly." },
      { title: "Natural Language Queries", desc: "Ask questions and get answers from your data." },
      { title: "Anomaly Detection", desc: "Spot outliers and risks automatically." },
      { title: "Integration", desc: "Connect to databases, spreadsheets, and cloud sources." }
    ],
    howWorksTitle: "How It Works",
    howWorksSteps: [
      { icon: "🔗", title: "Connect Data Sources", desc: "Link databases, files, or APIs." },
      { icon: "📊", title: "Analyze & Visualize", desc: "Explore data with AI-powered charts and models." },
      { icon: "💡", title: "Get Insights", desc: "Receive automated reports and recommendations." },
      { icon: "🚀", title: "Take Action", desc: "Make decisions and share results with your team." }
    ],
    overviewTitle: "What Makes Our Data Analytics Unique?",
    overviewDesc: "AI analytics tools accelerate your workflow, reduce manual effort, and reveal hidden patterns for better business outcomes.",
    overviewList: [
      "Automated data cleaning and preparation",
      "Fast, interactive dashboards",
      "Predictive and prescriptive analytics",
      "Secure, scalable, and easy to use"
    ],
    overviewBtn: "Learn More",
    useCasesTitle: "AI Data Analytics Use Cases",
    useCases: [
      { icon: "📈", title: "Business Intelligence", desc: "Track KPIs and performance." },
      { icon: "📊", title: "Sales & Marketing", desc: "Analyze campaigns and customer behavior." },
      { icon: "💰", title: "Finance", desc: "Forecast revenue and detect fraud." },
      { icon: "🚚", title: "Operations", desc: "Optimize supply chain and inventory." },
      { icon: "🏥", title: "Healthcare", desc: "Monitor patient data and outcomes." },
      { icon: "👥", title: "HR & Talent", desc: "Analyze workforce trends and engagement." }
    ],
    highlightsTitle: "Data Analytics Highlights",
    highlightsDesc: "Discover the unique features that make AI analytics powerful, flexible, and easy to use for your business.",
    highlights: [
      { icon: "📊", title: "Customizable Dashboards", desc: "Tailor views for any team." },
      { icon: "🔔", title: "Real-Time Alerts", desc: "Get notified of important changes." },
      { icon: "🤝", title: "Collaboration", desc: "Share insights and reports securely." },
      { icon: "⚡", title: "Scalable Solutions", desc: "Handle big data with ease." }
    ],
    ctaTitle: "Ready to Analyze Your Data with AI?",
    ctaDesc: "Start exploring your data and unlock powerful insights for your business.",
    ctaBtn: "Start Analyzing"
  },
  ar: {
    heroTitle: "أدوات تحليلات البيانات بالذكاء الاصطناعي",
    heroDesc: "اكتشف رؤى قابلة للتنفيذ، وأتمت التقارير، واتخذ قرارات أكثر ذكاءً باستخدام تحليلات الذكاء الاصطناعي المتقدمة.",
    featuresTitle: "الميزات والفوائد",
    featuresHeadline: "اكتشف القرارات المدفوعة بالبيانات",
    featuresDesc: "تساعدك أدوات التحليلات الذكية على تصور البيانات، توقع الاتجاهات، وأتمتة ذكاء الأعمال لكل فريق.",
    featuresList: [
      "لوحات معلومات وتصورات لحظية",
      "تحليلات وتوقعات تنبؤية",
      "تقارير وتنبيهات تلقائية",
      "تكامل مع أي مصدر بيانات"
    ],
    featureGrid: [
      { title: "تصور البيانات", desc: "مخططات ولوحات معلومات تفاعلية." },
      { title: "النمذجة التنبؤية", desc: "توقع المبيعات والطلب والاتجاهات." },
      { title: "التقارير التلقائية", desc: "جدولة ومشاركة الرؤى فوراً." },
      { title: "استعلامات اللغة الطبيعية", desc: "اطرح الأسئلة واحصل على إجابات من بياناتك." },
      { title: "اكتشاف الشذوذ", desc: "اكتشف الحالات الشاذة والمخاطر تلقائياً." },
      { title: "التكامل", desc: "اتصل بقواعد البيانات والجداول السحابية." }
    ],
    howWorksTitle: "كيف يعمل",
    howWorksSteps: [
      { icon: "🔗", title: "ربط مصادر البيانات", desc: "ربط قواعد البيانات أو الملفات أو واجهات البرمجة." },
      { icon: "📊", title: "حلل وصور", desc: "استكشف البيانات بمخططات ونماذج ذكية." },
      { icon: "💡", title: "احصل على رؤى", desc: "استلم تقارير وتوصيات تلقائية." },
      { icon: "🚀", title: "اتخذ إجراء", desc: "اتخذ قرارات وشارك النتائج مع فريقك." }
    ],
    overviewTitle: "ما الذي يجعل تحليلاتنا فريدة؟",
    overviewDesc: "تسرّع أدوات التحليلات الذكية سير العمل، وتقلل الجهد اليدوي، وتكشف الأنماط الخفية لتحقيق نتائج أفضل.",
    overviewList: [
      "تنظيف وتحضير البيانات تلقائياً",
      "لوحات معلومات تفاعلية وسريعة",
      "تحليلات تنبؤية ووصفية",
      "آمنة وقابلة للتوسع وسهلة الاستخدام"
    ],
    overviewBtn: "اعرف المزيد",
    useCasesTitle: "حالات استخدام تحليلات البيانات الذكية",
    useCases: [
      { icon: "📈", title: "ذكاء الأعمال", desc: "تتبع مؤشرات الأداء والنتائج." },
      { icon: "📊", title: "المبيعات والتسويق", desc: "تحليل الحملات وسلوك العملاء." },
      { icon: "💰", title: "المالية", desc: "توقع الإيرادات واكتشاف الاحتيال." },
      { icon: "🚚", title: "العمليات", desc: "تحسين سلسلة التوريد والمخزون." },
      { icon: "🏥", title: "الرعاية الصحية", desc: "مراقبة بيانات المرضى والنتائج." },
      { icon: "👥", title: "الموارد البشرية", desc: "تحليل اتجاهات القوى العاملة والمشاركة." }
    ],
    highlightsTitle: "أبرز ميزات التحليلات",
    highlightsDesc: "اكتشف الميزات الفريدة التي تجعل التحليلات الذكية قوية ومرنة وسهلة الاستخدام لأعمالك.",
    highlights: [
      { icon: "📊", title: "لوحات معلومات قابلة للتخصيص", desc: "خصص العرض لكل فريق." },
      { icon: "🔔", title: "تنبيهات لحظية", desc: "تلقي إشعارات بالتغيرات الهامة." },
      { icon: "🤝", title: "تعاون", desc: "شارك الرؤى والتقارير بأمان." },
      { icon: "⚡", title: "حلول قابلة للتوسع", desc: "إدارة البيانات الضخمة بسهولة." }
    ],
    ctaTitle: "جاهز لتحليل بياناتك بالذكاء الاصطناعي؟",
    ctaDesc: "ابدأ في استكشاف بياناتك واكتشف رؤى قوية لأعمالك.",
    ctaBtn: "ابدأ التحليل"
  },
  he: {
    heroTitle: "כלי אנליטיקת נתונים ב-AI",
    heroDesc: "גלה תובנות, אוטומציה ודוחות חכמים עם אנליטיקה מתקדמת מבוססת AI.",
    featuresTitle: "תכונות ויתרונות",
    featuresHeadline: "החלטות מונעות נתונים",
    featuresDesc: "הכלים שלנו עוזרים לך להמחיש נתונים, לחזות מגמות ולאוטומט בינה עסקית לכל צוות.",
    featuresList: [
      "לוחות מחוונים בזמן אמת",
      "אנליטיקה וחיזוי מתקדם",
      "דיווח אוטומטי והתראות",
      "אינטגרציה עם כל מקור נתונים"
    ],
    featureGrid: [
      { title: "המחשת נתונים", desc: "גרפים ולוחות מחוונים אינטראקטיביים." },
      { title: "מודלים לחיזוי", desc: "תחזית מכירות, ביקוש ומגמות." },
      { title: "דיווח אוטומטי", desc: "תזמון ושיתוף תובנות מיד." },
      { title: "שאילתות שפה טבעית", desc: "שאל שאלות וקבל תשובות מהנתונים." },
      { title: "זיהוי חריגות", desc: "גלה חריגות וסיכונים אוטומטית." },
      { title: "אינטגרציה", desc: "חיבור למסדי נתונים, גיליונות ענן ועוד." }
    ],
    howWorksTitle: "איך זה עובד",
    howWorksSteps: [
      { icon: "🔗", title: "חיבור מקורות נתונים", desc: "קישור מסדי נתונים, קבצים או APIs." },
      { icon: "📊", title: "נתח והמחיש", desc: "חקור נתונים עם גרפים ומודלים חכמים." },
      { icon: "💡", title: "קבל תובנות", desc: "קבל דוחות והמלצות אוטומטיות." },
      { icon: "🚀", title: "פועל", desc: "קבל החלטות ושתף תוצאות עם הצוות." }
    ],
    overviewTitle: "מה מייחד את האנליטיקה שלנו?",
    overviewDesc: "כלי האנליטיקה מאיצים את העבודה, מפחיתים מאמץ ידני ומגלים דפוסים נסתרים לתוצאות עסקיות טובות יותר.",
    overviewList: [
      "ניקוי והכנת נתונים אוטומטית",
      "לוחות מחוונים אינטראקטיביים ומהירים",
      "אנליטיקה לחיזוי והמלצות",
      "מאובטח, גמיש וקל לשימוש"
    ],
    overviewBtn: "למידע נוסף",
    useCasesTitle: "שימושים באנליטיקת נתונים חכמה",
    useCases: [
      { icon: "📈", title: "בינה עסקית", desc: "מעקב אחרי מדדים וביצועים." },
      { icon: "📊", title: "מכירות ושיווק", desc: "ניתוח קמפיינים והתנהגות לקוחות." },
      { icon: "💰", title: "פיננסים", desc: "תחזית הכנסות וזיהוי הונאות." },
      { icon: "🚚", title: "תפעול", desc: "אופטימיזציה של שרשרת אספקה ומלאי." },
      { icon: "🏥", title: "בריאות", desc: "מעקב אחרי נתוני מטופלים ותוצאות." },
      { icon: "👥", title: "משאבי אנוש", desc: "ניתוח מגמות עובדים ומעורבות." }
    ],
    highlightsTitle: "הדגשים באנליטיקה",
    highlightsDesc: "גלה את התכונות שהופכות את האנליטיקה החכמה לעוצמתית, גמישה וקלה לשימוש לעסק שלך.",
    highlights: [
      { icon: "📊", title: "לוחות מחוונים מותאמים", desc: "התאם תצוגות לכל צוות." },
      { icon: "🔔", title: "התראות בזמן אמת", desc: "קבל התראות על שינויים חשובים." },
      { icon: "🤝", title: "שיתוף פעולה", desc: "שתף תובנות ודוחות בבטחה." },
      { icon: "⚡", title: "פתרונות גמישים", desc: "טפל בנתוני עתק בקלות." }
    ],
    ctaTitle: "מוכן לנתח נתונים עם AI?",
    ctaDesc: "התחל לחקור נתונים ופתח תובנות חדשות לעסק שלך.",
    ctaBtn: "התחל ניתוח"
  }
};

function DataAnalytics() {
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
            <img src={dataanalysis} alt="AI Data Analytics" className="rounded-3xl shadow-xl w-full max-w-md object-cover" />
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

export default DataAnalytics;
