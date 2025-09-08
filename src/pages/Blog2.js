import React, { useEffect, useState } from 'react';

const translations = {
  en: {
    title: "Ethical Considerations in AI Development",
    section1Title: "Fairness & Bias Mitigation",
    section1Desc: "Ensuring fairness in AI systems is critical to prevent discrimination and promote equal opportunities. Developers must identify, measure, and mitigate biases in training data and algorithms to build trustworthy AI that serves all users fairly.",
    section1List: [
      "Bias detection and correction in datasets",
      "Transparent model evaluation",
      "Inclusive design for diverse populations"
    ],
    section2Title: "Accountability & Transparency",
    section2Desc: "Responsible AI development requires clear accountability and transparency. This includes documenting decision processes, providing explanations for AI outputs, and establishing mechanisms for oversight and redress in case of errors or harm.",
    section2List: [
      "Explainable AI models",
      "Clear documentation and reporting",
      "Ethical review boards and audits"
    ]
  },
  ar: {
    title: "الاعتبارات الأخلاقية في تطوير الذكاء الاصطناعي",
    section1Title: "العدالة ومعالجة التحيز",
    section1Desc: "ضمان العدالة في أنظمة الذكاء الاصطناعي أمر بالغ الأهمية لمنع التمييز وتعزيز تكافؤ الفرص. يجب على المطورين تحديد وقياس ومعالجة التحيزات في بيانات التدريب والخوارزميات لبناء ذكاء اصطناعي موثوق يخدم جميع المستخدمين بعدالة.",
    section1List: [
      "اكتشاف وتصحيح التحيز في مجموعات البيانات",
      "تقييم النموذج بشفافية",
      "تصميم شامل لمجموعات سكانية متنوعة"
    ],
    section2Title: "المساءلة والشفافية",
    section2Desc: "يتطلب تطوير الذكاء الاصطناعي المسؤول وضوح المساءلة والشفافية. يشمل ذلك توثيق عمليات اتخاذ القرار، وتقديم تفسيرات لمخرجات الذكاء الاصطناعي، وإنشاء آليات للرقابة والمعالجة في حال حدوث أخطاء أو ضرر.",
    section2List: [
      "نماذج ذكاء اصطناعي قابلة للتفسير",
      "توثيق واضح وإبلاغ",
      "مجالس مراجعة أخلاقية وتدقيق"
    ]
  },
  he: {
    title: "שיקולים אתיים בפיתוח AI",
    section1Title: "הוגנות ומניעת הטיות",
    section1Desc: "הבטחת הוגנות במערכות AI קריטית למניעת אפליה ולקידום שוויון הזדמנויות. מפתחים חייבים לזהות, למדוד ולתקן הטיות בנתוני אימון ובאלגוריתמים כדי לבנות AI אמין שמשרת את כל המשתמשים בהוגנות.",
    section1List: [
      "זיהוי ותיקון הטיות במאגרי נתונים",
      "הערכת מודלים בשקיפות",
      "עיצוב מכליל לאוכלוסיות מגוונות"
    ],
    section2Title: "אחריות ושקיפות",
    section2Desc: "פיתוח AI אחראי דורש אחריות ושקיפות ברורה. זה כולל תיעוד תהליכי קבלת החלטות, מתן הסברים לתוצאות AI, והקמת מנגנוני פיקוח וטיפול במקרה של טעויות או נזק.",
    section2List: [
      "מודלים מוסברים של AI",
      "תיעוד ודיווח ברור",
      "ועדות אתיות וביקורות"
    ]
  }
};

const Blog2 = () => {
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
            {/* Section 1: Fairness & Bias Mitigation */}
            <div className="bg-purple-50 dark:bg-purple-900 rounded-2xl shadow-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">{t.section1Title}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
                {t.section1Desc}
              </p>
              <ul className="list-disc pl-6 text-base text-purple-700 dark:text-purple-300 space-y-2">
                {t.section1List.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            {/* Section 2: Accountability & Transparency */}
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

export default Blog2;