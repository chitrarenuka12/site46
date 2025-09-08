import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../images/security-solutions.mp4";
import { useNavigate } from "react-router-dom";
import security from "../images/security.jpg";

// Translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "AI Security Solutions",
    heroDesc: "Protect your business with intelligent threat detection, automated response, and real-time monitoring powered by AI.",
    featuresTitle: "Features & Benefits",
    featuresHeadline: "Unlock AI-Powered Security",
    featuresDesc: "Our AI security solutions safeguard your data, systems, and users with proactive threat detection, automated incident response, and continuous monitoring.",
    featuresList: [
      "Real-time threat detection",
      "Automated incident response",
      "Continuous monitoring and compliance"
    ],
    featureGrid: [
      { title: "Threat Intelligence", desc: "Identify and block cyber threats instantly." },
      { title: "Anomaly Detection", desc: "Spot unusual activity and prevent breaches." },
      { title: "Automated Response", desc: "Respond to incidents without human delay." },
      { title: "Access Control", desc: "Manage permissions and prevent unauthorized access." },
      { title: "Data Encryption", desc: "Protect sensitive information at all times." },
      { title: "Compliance Monitoring", desc: "Ensure regulatory standards are met automatically." }
    ],
    howWorksTitle: "How It Works",
    howWorksSteps: [
      { icon: "🔍", title: "Monitor & Analyze", desc: "AI scans your systems for threats and vulnerabilities." },
      { icon: "⚡", title: "Detect & Alert", desc: "Instantly identify suspicious activity and notify your team." },
      { icon: "🤖", title: "Automate Response", desc: "AI takes action to contain and resolve incidents." },
      { icon: "📊", title: "Report & Improve", desc: "Get detailed reports and recommendations for future protection." }
    ],
    overviewTitle: "What Makes Our Security Solutions Unique?",
    overviewDesc: "Our AI security platform combines advanced analytics, real-time monitoring, and automated response to keep your business safe from evolving threats.",
    overviewList: [
      "Proactive threat detection",
      "Automated incident management",
      "Comprehensive compliance support",
      "Easy integration with existing systems"
    ],
    overviewBtn: "Learn More",
    useCasesTitle: "AI Security Use Cases",
    useCases: [
      { icon: "💻", title: "Network Security", desc: "Monitor and protect your network from cyber attacks." },
      { icon: "🔒", title: "Data Protection", desc: "Encrypt and safeguard sensitive information." },
      { icon: "🛡️", title: "Endpoint Security", desc: "Secure devices and prevent malware infections." },
      { icon: "📈", title: "Fraud Detection", desc: "Identify and block fraudulent activities in real time." },
      { icon: "🏥", title: "Healthcare Security", desc: "Protect patient data and ensure compliance." },
      { icon: "🏦", title: "Financial Security", desc: "Prevent financial fraud and secure transactions." }
    ],
    highlightsTitle: "Security Solution Highlights",
    highlightsDesc: "Our AI security solutions deliver robust protection, rapid response, and peace of mind for your business.",
    highlights: [
      { icon: "🕵️‍♂️", title: "Threat Hunter", desc: "Actively searches for and neutralizes threats." },
      { icon: "🔐", title: "Data Guardian", desc: "Ensures data privacy and integrity." },
      { icon: "⚡", title: "Rapid Responder", desc: "Handles incidents with speed and precision." },
      { icon: "📊", title: "Compliance Expert", desc: "Keeps your business aligned with regulations." }
    ],
    ctaTitle: "Ready to Secure Your Business with AI?",
    ctaDesc: "Protect your data, systems, and reputation with intelligent security solutions. Get started today!",
    ctaBtn: "Get Started"
  },
  ar: {
    heroTitle: "حلول الأمن بالذكاء الاصطناعي",
    heroDesc: "احمِ عملك بالكشف الذكي عن التهديدات، الاستجابة التلقائية، والمراقبة اللحظية المدعومة بالذكاء الاصطناعي.",
    featuresTitle: "الميزات والفوائد",
    featuresHeadline: "اكتشف الأمن المدعوم بالذكاء الاصطناعي",
    featuresDesc: "تحمي حلول الأمن الذكي بياناتك وأنظمتك ومستخدميك من خلال الكشف الاستباقي عن التهديدات، الاستجابة التلقائية للحوادث، والمراقبة المستمرة.",
    featuresList: [
      "كشف التهديدات اللحظي",
      "استجابة تلقائية للحوادث",
      "مراقبة مستمرة والامتثال"
    ],
    featureGrid: [
      { title: "ذكاء التهديدات", desc: "تحديد وحظر التهديدات السيبرانية فوراً." },
      { title: "اكتشاف الشذوذ", desc: "رصد النشاط غير المعتاد ومنع الاختراقات." },
      { title: "استجابة تلقائية", desc: "الاستجابة للحوادث دون تأخير بشري." },
      { title: "التحكم في الوصول", desc: "إدارة الأذونات ومنع الوصول غير المصرح به." },
      { title: "تشفير البيانات", desc: "حماية المعلومات الحساسة دائماً." },
      { title: "مراقبة الامتثال", desc: "ضمان الامتثال للمعايير تلقائياً." }
    ],
    howWorksTitle: "كيف يعمل",
    howWorksSteps: [
      { icon: "🔍", title: "المراقبة والتحليل", desc: "يفحص الذكاء الاصطناعي الأنظمة بحثاً عن التهديدات والثغرات." },
      { icon: "⚡", title: "الكشف والتنبيه", desc: "تحديد النشاط المشبوه فوراً وإبلاغ الفريق." },
      { icon: "🤖", title: "استجابة تلقائية", desc: "يتخذ الذكاء الاصطناعي إجراءات لاحتواء الحوادث وحلها." },
      { icon: "📊", title: "التقارير والتحسين", desc: "الحصول على تقارير مفصلة وتوصيات للحماية المستقبلية." }
    ],
    overviewTitle: "ما الذي يجعل حلولنا الأمنية فريدة؟",
    overviewDesc: "يجمع نظام الأمن الذكي بين التحليلات المتقدمة والمراقبة اللحظية والاستجابة التلقائية لحماية عملك من التهديدات المتطورة.",
    overviewList: [
      "كشف استباقي للتهديدات",
      "إدارة تلقائية للحوادث",
      "دعم امتثال شامل",
      "تكامل سهل مع الأنظمة الحالية"
    ],
    overviewBtn: "اعرف المزيد",
    useCasesTitle: "حالات استخدام الأمن الذكي",
    useCases: [
      { icon: "💻", title: "أمن الشبكات", desc: "مراقبة وحماية الشبكة من الهجمات السيبرانية." },
      { icon: "🔒", title: "حماية البيانات", desc: "تشفير وحماية المعلومات الحساسة." },
      { icon: "🛡️", title: "أمن الأجهزة الطرفية", desc: "تأمين الأجهزة ومنع البرمجيات الخبيثة." },
      { icon: "📈", title: "كشف الاحتيال", desc: "تحديد ومنع الأنشطة الاحتيالية فوراً." },
      { icon: "🏥", title: "أمن الرعاية الصحية", desc: "حماية بيانات المرضى وضمان الامتثال." },
      { icon: "🏦", title: "الأمن المالي", desc: "منع الاحتيال المالي وتأمين المعاملات." }
    ],
    highlightsTitle: "أبرز ميزات الحل الأمني",
    highlightsDesc: "توفر حلول الأمن الذكي حماية قوية واستجابة سريعة وراحة البال لعملك.",
    highlights: [
      { icon: "🕵️‍♂️", title: "صائد التهديدات", desc: "يبحث ويحيّد التهديدات بنشاط." },
      { icon: "🔐", title: "حارس البيانات", desc: "يضمن خصوصية وسلامة البيانات." },
      { icon: "⚡", title: "مستجيب سريع", desc: "يتعامل مع الحوادث بسرعة ودقة." },
      { icon: "📊", title: "خبير الامتثال", desc: "يحافظ على امتثال عملك للأنظمة." }
    ],
    ctaTitle: "جاهز لتأمين عملك بالذكاء الاصطناعي؟",
    ctaDesc: "احمِ بياناتك وأنظمتك وسمعتك بحلول أمنية ذكية. ابدأ الآن!",
    ctaBtn: "ابدأ الآن"
  },
  he: {
    heroTitle: "פתרונות אבטחה מבוססי AI",
    heroDesc: "הגן על העסק שלך עם זיהוי איומים חכם, תגובה אוטומטית וניטור בזמן אמת.",
    featuresTitle: "תכונות ויתרונות",
    featuresHeadline: "אבטחה מבוססת AI",
    featuresDesc: "פתרונות האבטחה שלנו מגנים על נתונים, מערכות ומשתמשים בזיהוי איומים, תגובה אוטומטית וניטור מתמשך.",
    featuresList: [
      "זיהוי איומים בזמן אמת",
      "תגובה אוטומטית לאירועים",
      "ניטור מתמשך ועמידה בתקנות"
    ],
    featureGrid: [
      { title: "מודיעין איומים", desc: "זיהוי וחסימת איומים מיידית." },
      { title: "זיהוי חריגות", desc: "איתור פעילות חריגה ומניעת פריצות." },
      { title: "תגובה אוטומטית", desc: "תגובה לאירועים ללא עיכוב אנושי." },
      { title: "בקרת גישה", desc: "ניהול הרשאות ומניעת גישה לא מורשית." },
      { title: "הצפנת נתונים", desc: "הגנה על מידע רגיש בכל עת." },
      { title: "ניטור עמידה בתקנות", desc: "עמידה בתקנות באופן אוטומטי." }
    ],
    howWorksTitle: "איך זה עובד",
    howWorksSteps: [
      { icon: "🔍", title: "ניטור וניתוח", desc: "ה-AI סורק מערכות לאיומים ופגיעויות." },
      { icon: "⚡", title: "זיהוי והתראה", desc: "זיהוי פעילות חשודה והתרעה לצוות." },
      { icon: "🤖", title: "תגובה אוטומטית", desc: "ה-AI פועל לטיפול באירועים." },
      { icon: "📊", title: "דיווח ושיפור", desc: "קבלת דוחות והמלצות להגנה עתידית." }
    ],
    overviewTitle: "מה מייחד את פתרונות האבטחה שלנו?",
    overviewDesc: "פלטפורמת האבטחה שלנו משלבת אנליטיקה מתקדמת, ניטור בזמן אמת ותגובה אוטומטית כדי להגן על העסק שלך מאיומים מתפתחים.",
    overviewList: [
      "זיהוי איומים פרואקטיבי",
      "ניהול אירועים אוטומטי",
      "תמיכה מלאה בתקנות",
      "אינטגרציה קלה עם מערכות קיימות"
    ],
    overviewBtn: "למידע נוסף",
    useCasesTitle: "שימושים באבטחה חכמה",
    useCases: [
      { icon: "💻", title: "אבטחת רשת", desc: "ניטור והגנה על הרשת מפני מתקפות." },
      { icon: "🔒", title: "הגנת נתונים", desc: "הצפנה והגנה על מידע רגיש." },
      { icon: "🛡️", title: "אבטחת נקודות קצה", desc: "הגנה על מכשירים ומניעת נוזקות." },
      { icon: "📈", title: "זיהוי הונאות", desc: "איתור ומניעת פעילויות הונאה בזמן אמת." },
      { icon: "🏥", title: "אבטחת בריאות", desc: "הגנה על נתוני מטופלים ועמידה בתקנות." },
      { icon: "🏦", title: "אבטחה פיננסית", desc: "מניעת הונאות פיננסיות והגנה על עסקאות." }
    ],
    highlightsTitle: "הדגשים בפתרון האבטחה",
    highlightsDesc: "פתרונות האבטחה שלנו מספקים הגנה חזקה, תגובה מהירה ושקט נפשי לעסק שלך.",
    highlights: [
      { icon: "🕵️‍♂️", title: "צייד איומים", desc: "מחפש ומנטרל איומים באופן פעיל." },
      { icon: "🔐", title: "שומר נתונים", desc: "מבטיח פרטיות ושלמות נתונים." },
      { icon: "⚡", title: "מגיב מהיר", desc: "מטפל באירועים במהירות ובדיוק." },
      { icon: "📊", title: "מומחה תקנות", desc: "שומר על עמידה בתקנות." }
    ],
    ctaTitle: "מוכן להגן על העסק שלך עם AI?",
    ctaDesc: "הגן על נתונים, מערכות ומוניטין עם פתרונות אבטחה חכמים. התחל עכשיו!",
    ctaBtn: "התחל עכשיו"
  }
};

function SecuritySolutions() {
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
      {/* Security Solutions Overview - Image & Content Side-by-Side */}
      <section className="py-10 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <img src={security} alt="AI Security Solutions" className="rounded-3xl shadow-xl w-full max-w-md object-cover" />
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
      {/* AI Security Use Cases - Horizontal Scroll Section */}
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
      {/* Security Solution Highlights - Split Layout, No Cards */}
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

export default SecuritySolutions;
