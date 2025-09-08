import React, { useEffect, useState } from 'react';

const translations = {
  en: {
    title: "How AI is Transforming Healthcare Diagnostics",
    section1Title: "Enhanced Accuracy & Early Detection",
    section1Desc: "AI algorithms analyze medical data with remarkable precision, helping clinicians detect diseases earlier and more accurately. Machine learning models can identify subtle patterns in imaging, lab results, and patient records that may be missed by the human eye.",
    section1List: [
      "Automated analysis of X-rays, MRIs, and CT scans",
      "Predictive risk assessments for chronic conditions",
      "Early warning systems for critical illnesses"
    ],
    section2Title: "Personalized & Efficient Care",
    section2Desc: "AI-driven diagnostics enable personalized treatment plans and streamline clinical workflows. By integrating patient data from multiple sources, AI helps healthcare providers deliver targeted therapies and optimize resource allocation for better outcomes.",
    section2List: [
      "Tailored treatment recommendations",
      "Automated triage and workflow management",
      "Integration of wearable and remote monitoring data"
    ]
  },
  ar: {
    title: "كيف يغير الذكاء الاصطناعي تشخيص الرعاية الصحية",
    section1Title: "دقة محسنة واكتشاف مبكر",
    section1Desc: "تحلل خوارزميات الذكاء الاصطناعي البيانات الطبية بدقة مذهلة، مما يساعد الأطباء على اكتشاف الأمراض في وقت مبكر وبشكل أكثر دقة. يمكن لنماذج التعلم الآلي تحديد أنماط دقيقة في الصور والنتائج المخبرية وسجلات المرضى قد يغفلها الإنسان.",
    section1List: [
      "تحليل تلقائي للأشعة السينية والرنين المغناطيسي والأشعة المقطعية",
      "تقييمات تنبؤية لمخاطر الأمراض المزمنة",
      "أنظمة إنذار مبكر للأمراض الحرجة"
    ],
    section2Title: "رعاية شخصية وفعالة",
    section2Desc: "تمكن التشخيصات المدعومة بالذكاء الاصطناعي من وضع خطط علاجية مخصصة وتبسيط سير العمل السريري. من خلال دمج بيانات المرضى من مصادر متعددة، يساعد الذكاء الاصطناعي مقدمي الرعاية الصحية على تقديم علاجات مستهدفة وتحسين تخصيص الموارد لتحقيق نتائج أفضل.",
    section2List: [
      "توصيات علاجية مخصصة",
      "فرز تلقائي وإدارة سير العمل",
      "دمج بيانات الأجهزة القابلة للارتداء والمراقبة عن بعد"
    ]
  },
  he: {
    title: "איך AI משנה את עולם האבחון הרפואי",
    section1Title: "דיוק מוגבר וזיהוי מוקדם",
    section1Desc: "אלגוריתמים של AI מנתחים נתונים רפואיים בדיוק מרשים, מסייעים לרופאים לזהות מחלות מוקדם ובאמינות גבוהה. מודלים של למידת מכונה מזהים דפוסים עדינים בהדמיות, תוצאות מעבדה ורשומות מטופלים שלא תמיד נראים לעין אנושית.",
    section1List: [
      "ניתוח אוטומטי של צילומי רנטגן, MRI ו-CT",
      "הערכות סיכון לחולים כרוניים",
      "מערכות התרעה מוקדמת למחלות קריטיות"
    ],
    section2Title: "טיפול אישי ויעיל",
    section2Desc: "אבחון מבוסס AI מאפשר תוכניות טיפול מותאמות אישית ומייעל תהליכים קליניים. שילוב נתוני מטופלים ממקורות שונים עוזר לספק טיפולים ממוקדים ולשפר הקצאת משאבים לתוצאות טובות יותר.",
    section2List: [
      "המלצות טיפול מותאמות אישית",
      "מיון אוטומטי וניהול תהליכי עבודה",
      "שילוב נתוני ניטור מרחוק ולביש"
    ]
  }
};

const Blog3 = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language] || translations["en"];

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

  return (
    <div>
      <section className="w-full py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-purple-700 dark:text-purple-300">
            {t.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Section 1: Enhanced Accuracy & Early Detection */}
            <div className="bg-purple-50 dark:bg-purple-900 rounded-2xl shadow-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">{t.section1Title}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
                {t.section1Desc}
              </p>
              <ul className="list-disc pl-6 text-base text-purple-700 dark:text-purple-300 space-y-2">
                {t.section1List.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            {/* Section 2: Personalized & Efficient Care */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col justify-center border border-purple-200 dark:border-purple-700">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">{t.section2Title}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
                {t.section2Desc}
              </p>
              <ul className="list-disc pl-6 text-base text-purple-700 dark:text-purple-300 space-y-2">
                {t.section2List.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog3;