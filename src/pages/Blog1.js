import React, { useEffect, useState } from 'react';

const translations = {
  en: {
    title: "The Future of Generative AI in Content Creation",
    section1Title: "AI-Powered Creativity & Personalization",
    section1Desc: "Generative AI is revolutionizing content creation by enabling brands and creators to produce highly personalized, engaging, and original content at scale. With advanced models, AI can understand audience preferences, adapt tone and style, and generate everything from articles to videos tailored for each user.",
    section1List: [
      "Hyper-personalized marketing campaigns",
      "Automated blog and social media posts",
      "Dynamic video and image generation"
    ],
    section2Title: "Collaboration & Ethical Innovation",
    section2Desc: "The future of generative AI lies in collaborative workflows and responsible innovation. AI tools will empower teams to co-create, edit, and refine content together, while new standards ensure transparency, authenticity, and ethical use of generated media.",
    section2List: [
      "Real-time collaboration between humans and AI",
      "Ethical guidelines for content generation",
      "Detection and prevention of misinformation"
    ]
  },
  ar: {
    title: "مستقبل الذكاء الاصطناعي التوليدي في إنشاء المحتوى",
    section1Title: "الإبداع والتخصيص المدعوم بالذكاء الاصطناعي",
    section1Desc: "يحدث الذكاء الاصطناعي التوليدي ثورة في إنشاء المحتوى من خلال تمكين العلامات التجارية والمبدعين من إنتاج محتوى أصلي وجذاب ومخصص على نطاق واسع. يمكن للنماذج المتقدمة فهم تفضيلات الجمهور وتكييف الأسلوب والنبرة وإنشاء كل شيء من المقالات إلى الفيديوهات المخصصة لكل مستخدم.",
    section1List: [
      "حملات تسويقية فائقة التخصيص",
      "منشورات تلقائية للمدونات ووسائل التواصل",
      "إنشاء ديناميكي للفيديو والصور"
    ],
    section2Title: "التعاون والابتكار الأخلاقي",
    section2Desc: "يكمن مستقبل الذكاء الاصطناعي التوليدي في سير العمل التعاوني والابتكار المسؤول. ستُمكن أدوات الذكاء الاصطناعي الفرق من الإنشاء والتحرير والتطوير معًا، بينما تضمن المعايير الجديدة الشفافية والأصالة والاستخدام الأخلاقي للمحتوى المُنشأ.",
    section2List: [
      "تعاون لحظي بين البشر والذكاء الاصطناعي",
      "إرشادات أخلاقية لإنشاء المحتوى",
      "اكتشاف ومنع المعلومات المضللة"
    ]
  },
  he: {
    title: "העתיד של AI גנרטיבי ביצירת תוכן",
    section1Title: "יצירתיות והתאמה אישית מבוססי AI",
    section1Desc: "AI גנרטיבי משנה את עולם התוכן ומאפשר למותגים וליוצרים לייצר תוכן מקורי, מותאם אישית ומרתק בקנה מידה גדול. מודלים מתקדמים מבינים העדפות קהל, מתאימים סגנון וטון, ומייצרים הכל ממאמרים ועד סרטונים מותאמים לכל משתמש.",
    section1List: [
      "קמפיינים שיווקיים מותאמים אישית",
      "פוסטים אוטומטיים לבלוגים ורשתות חברתיות",
      "יצירת תמונות וסרטונים דינמית"
    ],
    section2Title: "שיתופיות וחדשנות אתית",
    section2Desc: "העתיד של AI גנרטיבי הוא בשיתופי פעולה וחדשנות אחראית. כלים יאפשרו לצוותים ליצור, לערוך ולשפר תוכן יחד, תוך שמירה על שקיפות, אותנטיות ושימוש אתי במדיה שנוצרה.",
    section2List: [
      "שיתוף פעולה בזמן אמת בין אדם ל-AI",
      "הנחיות אתיות ליצירת תוכן",
      "זיהוי ומניעת דיסאינפורמציה"
    ]
  }
};

const Blog1 = () => {
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
            {/* Section 1: AI-Powered Creativity & Personalization */}
            <div className="bg-purple-50 dark:bg-purple-900 rounded-2xl shadow-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">{t.section1Title}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
                {t.section1Desc}
              </p>
              <ul className="list-disc pl-6 text-base text-purple-700 dark:text-purple-300 space-y-2">
                {t.section1List.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            {/* Section 2: Collaboration & Ethical Innovation */}
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

export default Blog1;