import { motion } from "framer-motion";
import video from "../images/ai-home1.mp4";
import video1 from "../images/ai-demo.mp4";
import { useState, useEffect } from "react";
import workspace from "../images/work-space.jpg";
import team from "../images/ai-team.jpg";
import innovation from "../images/ai-innovation.jpg";
import growth from "../images/ai-growth.jpg";
import { useNavigate } from "react-router-dom";
import client1 from "../images/team2.jpg";
import client2 from "../images/team3.jpg";
import client3 from "../images/team4.jpg";

const aiTools = [
  {
    id: 1,
    name: "NEURAL SYNTHESIS",
    description: "Advanced AI that generates complex code structures from simple descriptions",
    capability: "Code Generation",
    efficiency: "87% faster development",
    color: "rgba(100, 220, 255, 0.8)",
    pattern: "circuit"
  },
  {
    id: 2,
    name: "QUANTUM DEBUGGER",
    description: "AI-powered debugging system that predicts and fixes errors before they occur",
    capability: "Error Prevention",
    efficiency: "Reduces bugs by 72%",
    color: "rgba(180, 100, 255, 0.8)",
    pattern: "grid"
  },
  {
    id: 3,
    name: "COGNITIVE OPTIMIZER",
    description: "Dynamically analyzes and improves application performance in real-time",
    capability: "Performance Enhancement",
    efficiency: "Increases speed by 3.2x",
    color: "rgba(255, 100, 150, 0.8)",
    pattern: "hexagon"
  }
];
// const testimonials = [
//   {
//     id: 1,
//     quote: "This AI tool completely transformed our content strategy. What used to take our team days now takes hours. It's like having another expert on the team.",
//     name: 'Sarah Chen',
//     title: 'Head of Marketing, TechGrowth Inc.',
//     avatar: client1
//   },
//   {
//     id: 2,
//     quote: "The code generation is scarily accurate. It doesn't just create boilerplate; it understands the context of our project and suggests optimal solutions.",
//     name: 'Marcus Johnson',
//     title: 'Lead Developer, NovaLabs',
//     avatar: client2
//   },
//   {
//     id: 3,
//     quote: "The data analysis features uncovered insights we had been missing for years. It paid for itself in the first quarter by optimizing our supply chain.",
//     name: 'Elena Rodriguez',
//     title: 'Data Analyst, Fortitude Corp.',
//     avatar: client3
//   }
// ];
const translations = {
  en: {
    heroTitle: "AI Tools for the Future",
    heroDesc: "Supercharge your workflow with cutting-edge AI. Generate content, analyze data, and automate tasks—all in one place.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    futureTitle: "The Future of Work, <span class='text-purple-400'>Powered by AI</span>",
    leftFeature1Title: "Intelligent Content Generation",
    leftFeature1Desc: "Instantly create engaging articles, blog posts, and marketing copy. Our AI understands context to deliver human-like text.",
    leftFeature2Title: "Creative Image Synthesis",
    leftFeature2Desc: "Transform your ideas into stunning visuals. Generate unique art, product mockups, and designs without any design skills.",
    rightFeature1Title: "Advanced Data Insights",
    rightFeature1Desc: "Simplify complex data. Our tools analyze datasets and present key findings in intuitive, easy-to-understand visual formats.",
    rightFeature2Title: "Seamless Automation",
    rightFeature2Desc: "Automate tedious, repetitive tasks. Build powerful workflows that save you time and increase overall productivity.",
    aiTools: [
      {
        name: "NEURAL SYNTHESIS",
        description: "Advanced AI that generates complex code structures from simple descriptions",
        capability: "Code Generation",
        efficiency: "87% faster development"
      },
      {
        name: "QUANTUM DEBUGGER",
        description: "AI-powered debugging system that predicts and fixes errors before they occur",
        capability: "Error Prevention",
        efficiency: "Reduces bugs by 72%"
      },
      {
        name: "COGNITIVE OPTIMIZER",
        description: "Dynamically analyzes and improves application performance in real-time",
        capability: "Performance Enhancement",
        efficiency: "Increases speed by 3.2x"
      }
    ],
    testimonials: [
      {
        quote: "This AI tool completely transformed our content strategy. What used to take our team days now takes hours. It's like having another expert on the team.",
        name: 'Sarah Chen',
        title: 'Head of Marketing, TechGrowth Inc.',
        avatar: client1
      },
      {
        quote: "The code generation is scarily accurate. It doesn't just create boilerplate; it understands the context of our project and suggests optimal solutions.",
        name: 'Marcus Johnson',
        title: 'Lead Developer, NovaLabs',
        avatar: client2
      },
      {
        quote: "The data analysis features uncovered insights we had been missing for years. It paid for itself in the first quarter by optimizing our supply chain.",
        name: 'Elena Rodriguez',
        title: 'Data Analyst, Fortitude Corp.',
        avatar: client3
      }
    ]
  },
  ar: {
    heroTitle: "أدوات الذكاء الاصطناعي للمستقبل",
    heroDesc: "عزز سير عملك بأحدث تقنيات الذكاء الاصطناعي. أنشئ المحتوى، وحلل البيانات، وأتمت المهام - كل ذلك في مكان واحد.",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
    futureTitle: "مستقبل العمل، <span class='text-purple-400'>مدعوم بالذكاء الاصطناعي</span>",
    leftFeature1Title: "إنشاء محتوى ذكي",
    leftFeature1Desc: "أنشئ مقالات ومنشورات ومدونات تسويقية جذابة فوراً. يفهم الذكاء الاصطناعي السياق ليقدم نصاً شبيهاً بالبشر.",
    leftFeature2Title: "توليف الصور الإبداعية",
    leftFeature2Desc: "حوّل أفكارك إلى صور مذهلة. أنشئ فنوناً وتصاميم ومنتجات فريدة دون أي مهارات تصميم.",
    rightFeature1Title: "رؤى بيانات متقدمة",
    rightFeature1Desc: "بسّط البيانات المعقدة. أدواتنا تحلل مجموعات البيانات وتعرض النتائج الرئيسية بشكل بصري سهل الفهم.",
    rightFeature2Title: "أتمتة سلسة",
    rightFeature2Desc: "أتمت المهام المتكررة والمملة. أنشئ سير عمل قوي يوفر الوقت ويزيد الإنتاجية.",
    aiTools: [
      {
        name: "التوليف العصبي",
        description: "ذكاء اصطناعي متقدم ينشئ هياكل برمجية معقدة من أوصاف بسيطة",
        capability: "توليد الكود",
        efficiency: "تطوير أسرع بنسبة 87%"
      },
      {
        name: "المصحح الكمومي",
        description: "نظام تصحيح مدعوم بالذكاء الاصطناعي يتنبأ بالأخطاء ويصلحها قبل حدوثها",
        capability: "منع الأخطاء",
        efficiency: "يقلل الأخطاء بنسبة 72%"
      },
      {
        name: "المحسن الإدراكي",
        description: "يحلل ويحسن أداء التطبيق ديناميكياً في الوقت الحقيقي",
        capability: "تعزيز الأداء",
        efficiency: "يزيد السرعة بمقدار 3.2x"
      }
    ],
    testimonials: [
      {
        quote: "أداة الذكاء الاصطناعي هذه غيرت استراتيجتنا بالكامل. ما كان يستغرق أيامًا أصبح يستغرق ساعات فقط. إنها كأنها خبير آخر في الفريق.",
        name: 'سارة تشين',
        title: 'رئيسة التسويق، تك جروث إنك.',
        avatar: client1
      },
      {
        quote: "توليد الكود دقيق بشكل مخيف. لا ينشئ فقط كودًا مبدئيًا؛ بل يفهم سياق المشروع ويقترح حلولاً مثالية.",
        name: 'ماركوس جونسون',
        title: 'المطور الرئيسي، نوفالابز',
        avatar: client2
      },
      {
        quote: "ميزات تحليل البيانات كشفت عن رؤى كنا نفتقدها لسنوات. وفرت لنا الكثير في الربع الأول من خلال تحسين سلسلة التوريد.",
        name: 'إلينا رودريغيز',
        title: 'محللة بيانات، فورتتيود كورب.',
        avatar: client3
      }
    ]
  },
  he: {
    heroTitle: "כלי AI לעתיד",
    heroDesc: "שפר את זרימת העבודה שלך עם טכנולוגיית AI מתקדמת. צור תוכן, נתח נתונים ואוטומט משימות - הכל במקום אחד.",
    getStarted: "התחל",
    learnMore: "למידע נוסף",
    futureTitle: "עתיד העבודה, <span class='text-purple-400'>מופעל על ידי AI</span>",
    leftFeature1Title: "יצירת תוכן חכמה",
    leftFeature1Desc: "צור מאמרים, פוסטים וכתיבה שיווקית מרתקת באופן מיידי. ה-AI מבין הקשר ומספק טקסט דמוי אדם.",
    leftFeature2Title: "סינתזת תמונות יצירתית",
    leftFeature2Desc: "הפוך רעיונות לתמונות מדהימות. צור אמנות, מוצרים ועיצובים ייחודיים ללא כישורי עיצוב.",
    rightFeature1Title: "תובנות נתונים מתקדמות",
    rightFeature1Desc: "פשט נתונים מורכבים. הכלים שלנו מנתחים מערכי נתונים ומציגים ממצאים מרכזיים בצורה ויזואלית אינטואיטיבית.",
    rightFeature2Title: "אוטומציה חלקה",
    rightFeature2Desc: "אוטומט משימות מייגעות וחוזרות. בנה תהליכים חזקים שחוסכים זמן ומעלים את הפרודוקטיביות.",
    aiTools: [
      {
        name: "סינתזה עצבית",
        description: "בינה מלאכותית מתקדמת שמייצרת מבני קוד מורכבים מתיאורים פשוטים",
        capability: "יצירת קוד",
        efficiency: "87% פיתוח מהיר יותר"
      },
      {
        name: "נפתר קוונטי",
        description: "מערכת ניפוי באגים מבוססת AI שמנבאת ומתקנת שגיאות לפני שהן קורות",
        capability: "מניעת שגיאות",
        efficiency: "מפחית באגים ב-72%"
      },
      {
        name: "מאיץ קוגניטיבי",
        description: "מנתח ומשפר ביצועי אפליקציה בזמן אמת",
        capability: "שיפור ביצועים",
        efficiency: "מגביר מהירות פי 3.2"
      }
    ],
    testimonials: [
      {
        quote: "הכלי הזה שינה לחלוטין את אסטרטגיית התוכן שלנו. מה שלקח ימים, עכשיו לוקח שעות. זה כמו עוד מומחה בצוות.",
        name: 'שרה צ׳ן',
        title: 'ראש מחלקת שיווק, TechGrowth Inc.',
        avatar: client1
      },
      {
        quote: "היצירה של הקוד מדויקת בצורה מפחידה. זה לא רק יוצר תבניות; זה מבין את ההקשר ומציע פתרונות אופטימליים.",
        name: 'מרקוס ג׳ונסון',
        title: 'מפתח ראשי, NovaLabs',
        avatar: client2
      },
      {
        quote: "הפיצ׳רים של ניתוח הנתונים חשפו תובנות שהחסרנו במשך שנים. זה השתלם ברבעון הראשון על ידי אופטימיזציה של שרשרת האספקה.",
        name: 'אלנה רודריגז',
        title: 'אנליסטית נתונים, Fortitude Corp.',
        avatar: client3
      }
    ]
  }
};

const Home1 = () => {
  const [activeTool, setActiveTool] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTool((prev) => (prev + 1) % aiTools.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateLanguage = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("storage", updateLanguage);
    const interval = setInterval(updateLanguage, 500);
    return () => {
      window.removeEventListener("storage", updateLanguage);
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path);
    }
  return (
    <div className="w-screen min-h-screen m-0 p-0">
      {/* Hero Section */}
      <section className="relative w-screen h-screen m-0 p-0">
        {/* Background Video */}
        {/* Hero Section */}
        <section className="relative w-screen h-screen m-0 p-0">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={video}
            autoPlay
            loop
            muted
          />
          {/* Overlay and Content */}
          <div className="absolute inset-0 bg-black/70  z-10 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{translations[language].heroTitle}</h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">{translations[language].heroDesc}</p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold text-white shadow-lg transition" onClick={()=>handleGetStarted("/contact")}>{translations[language].getStarted}</button>
              <button className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-full font-semibold text-white shadow-lg transition border border-white" onClick={()=>handleGetStarted("/services")}>{translations[language].learnMore}</button>
            </div>
          </div>
        </section>
      </section>


      {/* AI Tools Section */}
      <section className="w-full py-16 flex flex-col items-center bg-white dark:bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12"
          dangerouslySetInnerHTML={{ __html: translations[language].futureTitle }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl px-4"
        >
          {/* Left Features */}
          <div className="flex flex-col gap-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="font-semibold text-black dark:text-white text-lg mb-1">{translations[language].leftFeature1Title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{translations[language].leftFeature1Desc}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-3xl">🖼️</span>
              <div>
                <h3 className="font-semibold text-black dark:text-white text-lg mb-1">{translations[language].leftFeature2Title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{translations[language].leftFeature2Desc}</p>
              </div>
            </motion.div>
          </div>
          {/* Center Icon */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-28 h-28 flex items-center justify-center rounded-full bg-purple-500 shadow-lg animate-pulse mb-2"
            >
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1.5-1.5M15 17l.75 3L17.25 18.5M8 10h8M6 14h12m-2-4l2-6m-6 6l-2-6m6 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </motion.div>
          </div>
          {/* Right Features */}
          <div className="flex flex-col gap-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-3xl">📊</span>
              <div>
                <h3 className="font-semibold text-black dark:text-white text-lg mb-1">{translations[language].rightFeature1Title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{translations[language].rightFeature1Desc}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="font-semibold text-black dark:text-white text-lg mb-0">{translations[language].rightFeature2Title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{translations[language].rightFeature2Desc}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/*second section  */}


      {/* Demo Section */}
      <section className="w-full bg-white dark:bg-black pt-6 pb-10">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center gap-12 px-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Video Column */}
          <motion.div
            className="md:w-1/2 w-full flex items-center justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <video
              src={video1}
              controls
              className="rounded-2xl shadow-xl w-full max-w-[700px] h-[340px] object-cover border border-gray-200 dark:border-gray-800"
              style={{ background: '#222' }}
            />
          </motion.div>
          {/* Content Column */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col justify-center md:justify-center h-full mt-0"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold mb-4 text-black dark:text-white"
            >
              {translations[language].demoTitle || {
                en: "See Our AI in Action",
                ar: "شاهد الذكاء الاصطناعي الخاص بنا في العمل",
                he: "ראו את ה-AI שלנו בפעולה"
              }[language]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8 text-lg text-gray-700 dark:text-gray-300"
            >
              {translations[language].demoDesc || {
                en: "Ready to see how our tools can transform your workflow? Our interactive demo section guides you through the process, showing you exactly how simple it is to get powerful results.",
                ar: "هل أنت مستعد لرؤية كيف يمكن لأدواتنا تحويل سير عملك؟ قسم العرض التفاعلي يرشدك خلال العملية ويظهر لك مدى سهولة الحصول على نتائج قوية.",
                he: "מוכנים לראות איך הכלים שלנו יכולים לשנות את זרימת העבודה שלכם? אזור ההדגמה האינטראקטיבי מדריך אתכם בתהליך ומראה כמה קל לקבל תוצאות עוצמתיות."
              }[language]}
            </motion.p>
            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white dark:border-gray-900">1</div>
                <div>
                  <h3 className="font-bold text-xl text-black dark:text-white mb-1">{translations[language].demoStep1Title || {
                    en: "Input Your Idea",
                    ar: "أدخل فكرتك",
                    he: "הכניסו את הרעיון שלכם"
                  }[language]}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{translations[language].demoStep1Desc || {
                    en: "Start by typing your prompt into our simple, intuitive interface. The AI is ready to listen.",
                    ar: "ابدأ بكتابة فكرتك في واجهتنا البسيطة والسهلة. الذكاء الاصطناعي جاهز للاستماع.",
                    he: "התחילו בהקלדת ההנחיה שלכם בממשק הפשוט והאינטואיטיבי שלנו. ה-AI מוכן להקשיב."
                  }[language]}</p>
                </div>
              </motion.div>
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white dark:border-gray-900">2</div>
                <div>
                  <h3 className="font-bold text-xl text-black dark:text-white mb-1">{translations[language].demoStep2Title || {
                    en: "AI Processing",
                    ar: "معالجة الذكاء الاصطناعي",
                    he: "עיבוד AI"
                  }[language]}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{translations[language].demoStep2Desc || {
                    en: "Our advanced algorithms get to work instantly, analyzing your request to generate the best possible output.",
                    ar: "خوارزمياتنا المتقدمة تبدأ العمل فوراً، تحلل طلبك لتوليد أفضل نتيجة ممكنة.",
                    he: "האלגוריתמים המתקדמים שלנו מתחילים לעבוד מיד, מנתחים את הבקשה שלכם כדי להפיק את התוצאה הטובה ביותר."
                  }[language]}</p>
                </div>
              </motion.div>
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white dark:border-gray-900">3</div>
                <div>
                  <h3 className="font-bold text-xl text-black dark:text-white mb-1">{translations[language].demoStep3Title || {
                    en: "Get Instant Results",
                    ar: "احصل على نتائج فورية",
                    he: "קבלו תוצאות מיידיות"
                  }[language]}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{translations[language].demoStep3Desc || {
                    en: "Receive a polished, high-quality result in seconds. Edit, download, or share your creation.",
                    ar: "احصل على نتيجة عالية الجودة في ثوانٍ. عدل، حمل أو شارك إبداعك.",
                    he: "קבלו תוצאה איכותית ומלוטשת תוך שניות. ערכו, הורידו או שתפו את היצירה שלכם."
                  }[language]}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Testimonials Section */}
      <section className="py-10 bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
              {translations[language].testimonialsTitle || {
                en: "Loved by Developers and Teams",
                ar: "محبوب من قبل المطورين والفرق",
                he: "אהוב על ידי מפתחים וצוותים"
              }[language]}
            </h2>
            <p className="mt-4 text-lg text-black dark:text-white">
              {translations[language].testimonialsDesc || {
                en: "Don't just take our word for it. Here's what our users have to say.",
                ar: "لا تأخذوا كلامنا فقط. إليكم ما يقوله مستخدمونا.",
                he: "אל תקחו רק את המילה שלנו. הנה מה שהמשתמשים שלנו אומרים."
              }[language]}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(translations[language].testimonials || []).map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(128,0,255,0.12)" }}
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-purple-200 dark:border-purple-700 flex flex-col"
              >
                <p className="italic mb-6 flex-grow text-gray-700 dark:text-white">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    {/* If you want to show avatar only for English, or if available */}
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover  border-purple-200 dark:border-purple-700"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      
    {/* Unique About Us Section - Modern Grid Style */}
    <section className="w-full py-10 bg-white dark:bg-black flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Left: About Us Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white"
          >
            {translations[language].aboutTitle || {
              en: "About Us",
              ar: "من نحن",
              he: "עלינו"
            }[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-200 mb-4"
          >
            {translations[language].aboutDesc1 || {
              en: "We are a team of passionate engineers, designers, and AI researchers dedicated to building the future of intelligent productivity. Our mission is to empower developers, creators, and businesses with advanced AI tools that are easy to use, reliable, and transformative.",
              ar: "نحن فريق من المهندسين والمصممين والباحثين في الذكاء الاصطناعي ملتزمون ببناء مستقبل الإنتاجية الذكية. مهمتنا هي تمكين المطورين والمبدعين والشركات بأدوات ذكاء اصطناعي متقدمة وسهلة الاستخدام وموثوقة ومحورية.",
              he: "אנחנו צוות של מהנדסים, מעצבים וחוקרי AI נלהבים שמוקדשים לבניית עתיד של פרודוקטיביות חכמה. המשימה שלנו היא להעצים מפתחים, יוצרים ועסקים עם כלי AI מתקדמים, קלים לשימוש, אמינים ומשני מציאות."
            }[language]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-200 mb-8"
          >
            {translations[language].aboutDesc2 || {
              en: "From code generation and smart automation to deep data insights, we believe in making artificial intelligence accessible for everyone. Every feature is crafted with care, innovation, and a commitment to helping you achieve more in less time.",
              ar: "من توليد الكود والأتمتة الذكية إلى التحليلات العميقة للبيانات، نؤمن بجعل الذكاء الاصطناعي متاحًا للجميع. كل ميزة مصممة بعناية وابتكار والتزام بمساعدتك على تحقيق المزيد في وقت أقل.",
              he: "מיצירת קוד ואוטומציה חכמה ועד לתובנות נתונים עמוקות, אנחנו מאמינים בהנגשת בינה מלאכותית לכולם. כל פיצ'ר נבנה בקפידה, חדשנות ומחויבות לעזור לכם להשיג יותר בפחות זמן."
            }[language]}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="px-8 py-3 border-2 border-purple-600 text-purple-700 dark:text-purple-300 rounded-lg font-semibold bg-transparent hover:bg-purple-50 dark:hover:bg-purple-900 transition w-fit"onClick={()=>handleGetStarted("/contact")}
          >
            {translations[language].aboutBtn || {
              en: "Meet the Team",
              ar: "تعرف على الفريق",
              he: "הכירו את הצוות"
            }[language]}
          </motion.button>
        </motion.div>
        {/* Right: Image Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.img src={workspace} alt="AI Workspace" className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 bg-gray-100 dark:bg-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.img src={team} alt="AI Team" className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 bg-gray-100 dark:bg-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.img src={innovation} alt="AI Innovation" className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 bg-gray-100 dark:bg-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.img src={growth} alt="AI Growth" className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 bg-gray-100 dark:bg-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
      <section className="w-full py-16 bg-purple-50 dark:bg-black flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4">
            {translations[language].ctaTitle || {
              en: "Ready to Supercharge Your Workflow?",
              ar: "هل أنت مستعد لتعزيز سير عملك؟",
              he: "מוכנים להאיץ את זרימת העבודה שלכם?"
            }[language]}
          </h2>
          <p className="text-lg text-black dark:text-white mb-8">
            {translations[language].ctaDesc || {
              en: "Start using our AI tools today and experience a new level of productivity and creativity.",
              ar: "ابدأ باستخدام أدوات الذكاء الاصطناعي الخاصة بنا اليوم واختبر مستوى جديدًا من الإنتاجية والإبداع.",
              he: "התחילו להשתמש בכלי ה-AI שלנו היום ותחוו רמה חדשה של פרודוקטיביות ויצירתיות."
            }[language]}
          </p>
          <button className="px-10 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full shadow-lg transition text-xl" onClick={()=>handleGetStarted("/contact")}>{translations[language].getStarted}</button>
        </div>
      </section>
    </div>
  );
}
export default Home1