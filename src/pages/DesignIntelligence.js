import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../images/ai-demo.mp4";
import { useNavigate } from "react-router-dom";
import DesignIntel from "../images/designsolutions.jpg";

// Translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "AI Design Intelligence",
    heroDesc: "Automate creative workflows, generate stunning visuals, and optimize design processes with AI-powered intelligence.",
    featuresTitle: "Features & Benefits",
    featuresHeadline: "Unlock AI-Driven Creativity",
    featuresDesc: "AI design intelligence tools help you ideate, create, and iterate faster—delivering beautiful, on-brand visuals and layouts with minimal effort.",
    featuresList: [
      "Automated design generation",
      "Style and brand consistency",
      "Real-time feedback and optimization"
    ],
    featureGrid: [
      { title: "Generative Art & Graphics", desc: "Create unique visuals and assets instantly." },
      { title: "Layout Optimization", desc: "AI arranges elements for best user experience." },
      { title: "Brand Style Transfer", desc: "Apply your brand's look to any design." },
      { title: "Design Suggestions", desc: "Get smart recommendations for colors, fonts, and layouts." },
      { title: "Rapid Prototyping", desc: "Turn ideas into interactive prototypes in minutes." },
      { title: "Collaboration Tools", desc: "Work with teams and share feedback seamlessly." }
    ],
    howWorksTitle: "How It Works",
    howWorksSteps: [
      { icon: "🎨", title: "Input Your Idea", desc: "Describe your vision or upload a reference." },
      { icon: "⚡", title: "AI Generates Designs", desc: "Get multiple creative options instantly." },
      { icon: "🔧", title: "Customize & Refine", desc: "Edit, tweak, and optimize with smart tools." },
      { icon: "🚀", title: "Export & Share", desc: "Download or share your final design." }
    ],
    overviewTitle: "What Makes Our Design Intelligence Unique?",
    overviewDesc: "Our AI design tools combine generative creativity, layout optimization, and brand intelligence to deliver stunning, effective designs for any project.",
    overviewList: [
      "Generates multiple creative options",
      "Ensures brand consistency",
      "Optimizes for usability and impact",
      "Collaborative and easy to use"
    ],
    overviewBtn: "Learn More",
    useCasesTitle: "AI Design Intelligence Use Cases",
    useCases: [
      { icon: "🖼️", title: "Graphic Design", desc: "Generate logos, banners, and social media assets." },
      { icon: "📐", title: "UI/UX Prototyping", desc: "Create wireframes and interactive prototypes." },
      { icon: "🎬", title: "Video & Animation", desc: "Automate video editing and motion graphics." },
      { icon: "📝", title: "Content Layouts", desc: "Design blog posts, newsletters, and presentations." },
      { icon: "🏢", title: "Branding", desc: "Maintain style across all marketing materials." },
      { icon: "🤝", title: "Collaboration", desc: "Share designs and get feedback instantly." }
    ],
    highlightsTitle: "Design Intelligence Highlights",
    highlightsDesc: "Our AI design solutions are packed with features to help you create, collaborate, and innovate faster than ever before.",
    highlights: [
      { icon: "🖌️", title: "Creative Generator", desc: "Produces endless design variations." },
      { icon: "🔍", title: "Style Analyzer", desc: "Ensures every design matches your brand." },
      { icon: "⚙️", title: "Layout Optimizer", desc: "Arranges elements for clarity and impact." },
      { icon: "🤝", title: "Collaborative Partner", desc: "Works with teams for feedback and iteration." }
    ],
    ctaTitle: "Ready to Elevate Your Designs with AI?",
    ctaDesc: "Empower your creative process, streamline workflows, and unlock new possibilities with AI design intelligence. Get started today!",
    ctaBtn: "Get Started"
  },
  ar: {
    heroTitle: "ذكاء التصميم بالذكاء الاصطناعي",
    heroDesc: "أتمت سير العمل الإبداعي، أنشئ تصاميم مذهلة، وحقق أفضل النتائج مع حلول الذكاء الاصطناعي.",
    featuresTitle: "الميزات والفوائد",
    featuresHeadline: "اكتشف الإبداع المدعوم بالذكاء الاصطناعي",
    featuresDesc: "تساعدك أدوات ذكاء التصميم على الابتكار، الإنشاء، والتطوير بسرعة—للحصول على تصاميم جميلة ومتسقة مع العلامة التجارية بأقل جهد.",
    featuresList: [
      "إنشاء تصاميم تلقائي",
      "اتساق الأسلوب والعلامة التجارية",
      "ملاحظات وتحسينات فورية"
    ],
    featureGrid: [
      { title: "فن وتوليد رسومات", desc: "أنشئ تصاميم ومرئيات فريدة فوراً." },
      { title: "تحسين التخطيط", desc: "يرتب الذكاء الاصطناعي العناصر لأفضل تجربة مستخدم." },
      { title: "نقل أسلوب العلامة التجارية", desc: "طبق أسلوب علامتك التجارية على أي تصميم." },
      { title: "اقتراحات التصميم", desc: "احصل على توصيات ذكية للألوان والخطوط والتخطيطات." },
      { title: "النمذجة السريعة", desc: "حوّل الأفكار إلى نماذج تفاعلية في دقائق." },
      { title: "أدوات التعاون", desc: "اعمل مع الفرق وشارك الملاحظات بسهولة." }
    ],
    howWorksTitle: "كيف يعمل",
    howWorksSteps: [
      { icon: "🎨", title: "أدخل فكرتك", desc: "صف رؤيتك أو حمّل مرجعاً." },
      { icon: "⚡", title: "الذكاء الاصطناعي ينشئ التصاميم", desc: "احصل على خيارات إبداعية متعددة فوراً." },
      { icon: "🔧", title: "خصص وحسّن", desc: "عدل وطور باستخدام أدوات ذكية." },
      { icon: "🚀", title: "صدّر وشارك", desc: "حمّل أو شارك التصميم النهائي." }
    ],
    overviewTitle: "ما الذي يجعل ذكاء التصميم لدينا فريداً؟",
    overviewDesc: "تجمع أدواتنا بين الإبداع التوليدي، وتحسين التخطيط، وذكاء العلامة التجارية للحصول على تصاميم مذهلة وفعالة لأي مشروع.",
    overviewList: [
      "ينشئ خيارات إبداعية متعددة",
      "يضمن اتساق العلامة التجارية",
      "يحسن للاستخدام والتأثير",
      "تعاوني وسهل الاستخدام"
    ],
    overviewBtn: "اعرف المزيد",
    useCasesTitle: "حالات استخدام ذكاء التصميم",
    useCases: [
      { icon: "🖼️", title: "تصميم جرافيكي", desc: "إنشاء شعارات، لافتات، ووسائط اجتماعية." },
      { icon: "📐", title: "نمذجة واجهات المستخدم", desc: "إنشاء نماذج أولية وتفاعلية." },
      { icon: "🎬", title: "فيديو ورسوم متحركة", desc: "أتمتة تحرير الفيديو والرسوم المتحركة." },
      { icon: "📝", title: "تخطيطات المحتوى", desc: "تصميم منشورات المدونة والنشرات والعروض." },
      { icon: "🏢", title: "العلامة التجارية", desc: "الحفاظ على الأسلوب في جميع المواد التسويقية." },
      { icon: "🤝", title: "التعاون", desc: "شارك التصاميم واحصل على الملاحظات فوراً." }
    ],
    highlightsTitle: "أبرز ميزات ذكاء التصميم",
    highlightsDesc: "حلولنا مليئة بالميزات لمساعدتك على الإنشاء والتعاون والابتكار بسرعة غير مسبوقة.",
    highlights: [
      { icon: "🖌️", title: "مولد إبداعي", desc: "ينتج تصاميم لا نهائية." },
      { icon: "🔍", title: "محلل الأسلوب", desc: "يضمن تطابق كل تصميم مع علامتك التجارية." },
      { icon: "⚙️", title: "محسن التخطيط", desc: "يرتب العناصر للوضوح والتأثير." },
      { icon: "🤝", title: "شريك تعاوني", desc: "يعمل مع الفرق للملاحظات والتطوير." }
    ],
    ctaTitle: "جاهز لتعزيز تصاميمك بالذكاء الاصطناعي؟",
    ctaDesc: "عزز العملية الإبداعية، وسرّع سير العمل، وافتح إمكانيات جديدة مع ذكاء التصميم. ابدأ الآن!",
    ctaBtn: "ابدأ الآن"
  },
  he: {
    heroTitle: "אינטליגנציה עיצובית ב-AI",
    heroDesc: "אוטומציה של תהליכים יצירתיים, יצירת ויזואלים מרהיבים ואופטימיזציה של עיצוב עם אינטליגנציה מבוססת AI.",
    featuresTitle: "תכונות ויתרונות",
    featuresHeadline: "שחרר יצירתיות מבוססת AI",
    featuresDesc: "כלי אינטליגנציה עיצובית עוזרים לך להמציא, ליצור ולשפר מהר—לתוצרים יפים, ממותגים ובמינימום מאמץ.",
    featuresList: [
      "יצירת עיצובים אוטומטית",
      "עקביות סגנון ומותג",
      "פידבק ואופטימיזציה בזמן אמת"
    ],
    featureGrid: [
      { title: "יצירת אמנות וגרפיקה", desc: "יצירת ויזואלים ונכסים ייחודיים מיד." },
      { title: "אופטימיזציית פריסה", desc: "ה-AI מסדר אלמנטים לחוויית משתמש מיטבית." },
      { title: "העברת סגנון מותג", desc: "החלת מראה המותג שלך על כל עיצוב." },
      { title: "המלצות עיצוב", desc: "קבל המלצות חכמות לצבעים, פונטים ופריסות." },
      { title: "אב-טיפוס מהיר", desc: "הפוך רעיונות לאבות-טיפוס אינטראקטיביים בדקות." },
      { title: "כלי שיתוף פעולה", desc: "עבודה עם צוותים ומשוב קל." }
    ],
    howWorksTitle: "איך זה עובד",
    howWorksSteps: [
      { icon: "🎨", title: "הזן רעיון", desc: "תאר את החזון שלך או העלה דוגמה." },
      { icon: "⚡", title: "ה-AI יוצר עיצובים", desc: "קבל אפשרויות יצירתיות רבות מיד." },
      { icon: "🔧", title: "התאם ושפר", desc: "ערוך, שפר ואופטימיזציה עם כלים חכמים." },
      { icon: "🚀", title: "ייצא ושתף", desc: "הורד או שתף את העיצוב הסופי." }
    ],
    overviewTitle: "מה מייחד את האינטליגנציה העיצובית שלנו?",
    overviewDesc: "הכלים שלנו משלבים יצירתיות גנרטיבית, אופטימיזציית פריסה ואינטליגנציה מותגית לעיצובים מרהיבים ויעילים לכל פרויקט.",
    overviewList: [
      "יוצר אפשרויות יצירתיות רבות",
      "מבטיח עקביות מותג",
      "אופטימיזציה לשימושיות והשפעה",
      "שיתופי פעולה וקלים לשימוש"
    ],
    overviewBtn: "למידע נוסף",
    useCasesTitle: "שימושים באינטליגנציה עיצובית",
    useCases: [
      { icon: "🖼️", title: "עיצוב גרפי", desc: "יצירת לוגואים, באנרים ונכסים לרשתות חברתיות." },
      { icon: "📐", title: "אב-טיפוס UI/UX", desc: "יצירת wireframes ואבות-טיפוס אינטראקטיביים." },
      { icon: "🎬", title: "וידאו ואנימציה", desc: "אוטומציה של עריכת וידאו וגרפיקה בתנועה." },
      { icon: "📝", title: "פריסות תוכן", desc: "עיצוב פוסטים, ניוזלטרים ומצגות." },
      { icon: "🏢", title: "מיתוג", desc: "שמירה על סגנון בכל חומר שיווקי." },
      { icon: "🤝", title: "שיתוף פעולה", desc: "שיתוף עיצובים ומשוב מידי." }
    ],
    highlightsTitle: "הדגשים באינטליגנציה עיצובית",
    highlightsDesc: "הפתרונות שלנו מלאים בתכונות שיעזרו לך ליצור, לשתף פעולה ולחדש מהר מתמיד.",
    highlights: [
      { icon: "🖌️", title: "מחולל יצירתי", desc: "יוצר אינסוף וריאציות עיצוב." },
      { icon: "🔍", title: "מנתח סגנון", desc: "מבטיח שכל עיצוב תואם את המותג שלך." },
      { icon: "⚙️", title: "אופטימיזטור פריסה", desc: "מסדר אלמנטים לבהירות והשפעה." },
      { icon: "🤝", title: "שותף שיתופי", desc: "עובד עם צוותים למשוב ושיפור." }
    ],
    ctaTitle: "מוכן לשדרג את העיצובים שלך עם AI?",
    ctaDesc: "שפר את התהליך היצירתי, זרז עבודה ופתח אפשרויות חדשות עם אינטליגנציה עיצובית. התחל עכשיו!",
    ctaBtn: "התחל עכשיו"
  }
};

function DesignIntelligence() {
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
      {/* Design Intelligence Overview */}
      <section className="py-10 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <img src={DesignIntel} alt="AI Design Intelligence" className="rounded-3xl shadow-xl w-full max-w-md object-cover" />
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
      {/* AI Design Intelligence Use Cases */}
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
      {/* Design Intelligence Highlights */}
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

export default DesignIntelligence;
