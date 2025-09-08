import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blogVideo from "../images/blog-ai.mp4";

// Add translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "AI Insights & Stories",
    heroDesc: "Explore the latest trends, breakthroughs, and expert perspectives in artificial intelligence.",
    featuredTitle: "Featured Insights",
    featuredDesc: "Deep dives into the most important topics in artificial intelligence",
    readArticle: "Read Article",
    conceptTitle: "AI Concept Explorer",
    conceptDesc: "Understand key AI concepts through simple explanations and analogies",
    definition: "Definition",
    analogy: "Analogy",
    applications: "Applications",
    related: "Related Articles",
    didYouKnow: "Did you know? Many AI concepts are inspired by how humans learn and solve problems.",
    tip: "Tip: Try exploring open-source AI libraries to deepen your understanding.",
    fact: "Fact: Neural networks can have millions of parameters, making them powerful but complex.",
    innovationTitle: "AI Innovation Spotlight",
    innovationDesc: "Exploring groundbreaking developments that are shaping the future of artificial intelligence",
    spotlight1Title: "Multimodal Learning Systems",
    spotlight1Desc: "Recent advancements in AI have enabled systems that can simultaneously process and understand multiple types of data. These multimodal models combine text, images, audio, and video to create more comprehensive understanding of context and content. The implications for creative industries are profound, as these systems can generate rich, multi-format content from simple prompts.",
    spotlight1Tag: "Research Breakthrough • May 2023",
    spotlight2Title: "Energy-Efficient AI Training",
    spotlight2Desc: "New techniques in model compression and efficient architecture design are dramatically reducing the computational resources required for training sophisticated AI models. These innovations address both environmental concerns and accessibility barriers, making powerful AI tools available to researchers and developers with limited resources. The approach combines knowledge distillation, pruning, and novel optimization algorithms.",
    spotlight2Tag: "Sustainability Focus • April 2023",
    trendTitle: "Emerging Trend: Neuro-Symbolic Integration",
    trendDesc: "The integration of neural networks with symbolic reasoning represents one of the most promising directions in AI research. By combining the pattern recognition strengths of deep learning with the logical reasoning capabilities of symbolic systems, researchers are developing AI that can not only recognize patterns but also understand and explain them. This approach addresses the \"black box\" problem of neural networks while maintaining their powerful learning capabilities.",
    trendTag: "Trend Analysis • Ongoing Research",
    ctaTitle: "Ready to explore more AI insights?",
    ctaDesc: "Join our newsletter or contact us to stay updated with the latest trends, tips, and breakthroughs in AI. Don't miss out!",
    contact: "Contact Us"
  },
  ar: {
    heroTitle: "رؤى وقصص الذكاء الاصطناعي",
    heroDesc: "استكشف أحدث الاتجاهات والاختراقات ووجهات نظر الخبراء في الذكاء الاصطناعي.",
    featuredTitle: "أهم المقالات",
    featuredDesc: "تحليلات معمقة لأهم مواضيع الذكاء الاصطناعي",
    readArticle: "اقرأ المقال",
    conceptTitle: "استكشاف مفاهيم الذكاء الاصطناعي",
    conceptDesc: "افهم المفاهيم الأساسية للذكاء الاصطناعي من خلال شروحات وأمثلة بسيطة",
    definition: "التعريف",
    analogy: "تشبيه",
    applications: "التطبيقات",
    related: "مقالات ذات صلة",
    didYouKnow: "هل تعلم؟ العديد من مفاهيم الذكاء الاصطناعي مستوحاة من كيفية تعلم البشر وحلهم للمشكلات.",
    tip: "نصيحة: جرب استكشاف مكتبات الذكاء الاصطناعي مفتوحة المصدر لتعميق فهمك.",
    fact: "حقيقة: الشبكات العصبية يمكن أن تحتوي على ملايين المعاملات، مما يجعلها قوية ولكن معقدة.",
    innovationTitle: "تسليط الضوء على ابتكارات الذكاء الاصطناعي",
    innovationDesc: "استكشاف التطورات الرائدة التي تشكل مستقبل الذكاء الاصطناعي",
    spotlight1Title: "أنظمة التعلم متعددة الوسائط",
    spotlight1Desc: "مكنت التطورات الحديثة في الذكاء الاصطناعي الأنظمة من معالجة وفهم أنواع متعددة من البيانات في وقت واحد. تجمع هذه النماذج بين النص والصور والصوت والفيديو لفهم أكثر شمولاً للسياق والمحتوى. التأثيرات على الصناعات الإبداعية كبيرة، حيث يمكن لهذه الأنظمة توليد محتوى غني ومتعدد الصيغ من مطالبات بسيطة.",
    spotlight1Tag: "اختراق بحثي • مايو 2023",
    spotlight2Title: "تدريب الذكاء الاصطناعي الموفر للطاقة",
    spotlight2Desc: "تقنيات جديدة في ضغط النماذج وتصميم الهياكل الفعالة تقلل بشكل كبير من الموارد الحسابية المطلوبة لتدريب نماذج الذكاء الاصطناعي المتقدمة. تعالج هذه الابتكارات المخاوف البيئية وحواجز الوصول، مما يجعل أدوات الذكاء الاصطناعي القوية متاحة للباحثين والمطورين ذوي الموارد المحدودة.",
    spotlight2Tag: "تركيز الاستدامة • أبريل 2023",
    trendTitle: "اتجاه ناشئ: التكامل العصبي الرمزي",
    trendDesc: "يمثل دمج الشبكات العصبية مع الاستدلال الرمزي أحد أكثر الاتجاهات الواعدة في أبحاث الذكاء الاصطناعي. من خلال الجمع بين قوة التعرف على الأنماط والتفكير المنطقي، يطور الباحثون ذكاءً اصطناعياً يمكنه التعرف على الأنماط وفهمها وشرحها.",
    trendTag: "تحليل الاتجاهات • بحث مستمر",
    ctaTitle: "هل أنت مستعد لاستكشاف المزيد من رؤى الذكاء الاصطناعي؟",
    ctaDesc: "اشترك في نشرتنا أو تواصل معنا للبقاء على اطلاع بأحدث الاتجاهات والنصائح والاختراقات في الذكاء الاصطناعي.",
    contact: "تواصل معنا"
  },
  he: {
    heroTitle: "תובנות וסיפורי AI",
    heroDesc: "גלה את המגמות, הפריצות והדעות המובילות בתחום הבינה המלאכותית.",
    featuredTitle: "כתבות נבחרות",
    featuredDesc: "סקירות מעמיקות בנושאים החשובים ביותר בבינה מלאכותית",
    readArticle: "קרא כתבה",
    conceptTitle: "מגלה מושגי AI",
    conceptDesc: "הבנת מושגי מפתח ב-AI דרך הסברים ודימויים פשוטים",
    definition: "הגדרה",
    analogy: "דימוי",
    applications: "יישומים",
    related: "מאמרים קשורים",
    didYouKnow: "ידעת? הרבה מושגי AI נלקחו מהאופן שבו בני אדם לומדים ופותרים בעיות.",
    tip: "טיפ: נסה לחקור ספריות AI בקוד פתוח להעמקת ההבנה.",
    fact: "עובדה: לרשתות עצביות יכולים להיות מיליוני פרמטרים – עוצמתי ומורכב.",
    innovationTitle: "זרקור חדשנות AI",
    innovationDesc: "סקירת פיתוחים פורצי דרך שמעצבים את עתיד הבינה המלאכותית",
    spotlight1Title: "מערכות למידה מולטימודליות",
    spotlight1Desc: "התקדמות ב-AI מאפשרת למערכות להבין ולעבד סוגי מידע שונים בו-זמנית. מודלים אלו משלבים טקסט, תמונה, אודיו ווידאו להבנה עמוקה יותר של הקשר ותוכן.",
    spotlight1Tag: "פריצת דרך מחקרית • מאי 2023",
    spotlight2Title: "אימון AI חסכוני באנרגיה",
    spotlight2Desc: "טכניקות חדשות בדחיסת מודלים ועיצוב יעיל מפחיתות משמעותית את המשאבים הנדרשים לאימון מודלי AI מתקדמים. החדשנות הזו פותחת את התחום לחוקרים ומפתחים עם משאבים מוגבלים.",
    spotlight2Tag: "מיקוד קיימות • אפריל 2023",
    trendTitle: "מגמה: אינטגרציה עצבית-סמלית",
    trendDesc: "שילוב רשתות עצביות עם הסקה סימבולית הוא מהכיוונים המבטיחים ביותר במחקר AI. שילוב זיהוי דפוסים עם הסקה לוגית יוצר AI שמזהה, מבין ומסביר.",
    trendTag: "ניתוח מגמות • מחקר מתמשך",
    ctaTitle: "מוכן לגלות עוד תובנות AI?",
    ctaDesc: "הצטרף לניוזלטר או צור קשר כדי להישאר מעודכן במגמות, טיפים ופריצות דרך ב-AI.",
    contact: "צור קשר"
  }
};

const featuredArticles = [
  {
    title: "The Future of Generative AI in Content Creation",
    excerpt: "Explore how generative AI is revolutionizing content creation across industries, from marketing to entertainment.",
    author: "Dr. Emily Chen",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Generative AI",
    gradient: "from-purple-600 via-blue-600 to-teal-600"
  },
  {
    title: "Ethical Considerations in AI Development",
    excerpt: "A deep dive into the ethical challenges facing AI developers and how to build responsible AI systems.",
    author: "Marcus Johnson",
    date: "April 28, 2023",
    readTime: "12 min read",
    category: "AI Ethics",
    gradient: "from-rose-600 via-amber-600 to-orange-600"
  },
  {
    title: "How AI is Transforming Healthcare Diagnostics",
    excerpt: "Discover the groundbreaking ways AI is improving diagnostic accuracy and patient outcomes worldwide.",
    author: "Sarah Williams",
    date: "June 3, 2023",
    readTime: "10 min read",
    category: "AI in Healthcare",
    gradient: "from-green-600 via-emerald-600 to-lime-600"
  }
];

const concepts = [
  {
    term: "Neural Networks",
    definition: "Computing systems inspired by the human brain that learn to perform tasks by considering examples.",
    analogy: "Like a team of specialists where each person focuses on a specific pattern, then combines their findings.",
    applications: "Image recognition, speech recognition, natural language processing",
    complexity: "Intermediate",
    icon: "🧠"
  },
  {
    term: "Transformers",
    definition: "A deep learning architecture that handles sequential data using self-attention mechanisms.",
    analogy: "Like reading a sentence while constantly checking how each word relates to all other words.",
    applications: "Language translation, text generation, chatbots",
    complexity: "Advanced",
    icon: "🔀"
  },
  {
    term: "Generative Adversarial Networks",
    definition: "A system where two neural networks contest with each other to generate new, synthetic data.",
    analogy: "Like an art forger and an art expert competing - the forger improves until the expert can't tell real from fake.",
    applications: "Image generation, video generation, art creation",
    complexity: "Advanced",
    icon: "🎨"
  },
  {
    term: "Natural Language Processing",
    definition: "A field of AI that gives machines the ability to read, understand, and derive meaning from human languages.",
    analogy: "Like teaching a computer to understand context, sarcasm, and nuance in human communication.",
    applications: "Chatbots, sentiment analysis, text summarization",
    complexity: "Intermediate",
    icon: "💬"
  }
];

function Blog() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeConcept, setActiveConcept] = useState(0);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={blogVideo}
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
      {/* Featured Articles Section */}
      <section className="py-16 px-4 text-black dark:text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-700 dark:text-purple-300">{t.featuredTitle}</h2>
          <p className="text-xl text-center text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
            {t.featuredDesc}
          </p>
          <div className="relative flex justify-center items-center min-h-[28rem] overflow-visible">
            <div className="relative z-10 flex flex-col justify-center items-start px-20 max-w-2xl w-full border-4 border-purple-700 dark:border-purple-400 rounded-2xl bg-white dark:bg-black">
              <span className="inline-block px-4 py-1 bg-purple-700/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-purple-700 dark:text-purple-300">
                {featuredArticles[currentFeature].category}
              </span>
              <div className="overflow-hidden">
                <motion.h3
                  key={featuredArticles[currentFeature].title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl font-bold mb-6 text-black dark:text-white"
                >
                  {featuredArticles[currentFeature].title}
                </motion.h3>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  key={featuredArticles[currentFeature].excerpt}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-xl mb-8 text-gray-700 dark:text-gray-200"
                >
                  {featuredArticles[currentFeature].excerpt}
                </motion.p>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span>{featuredArticles[currentFeature].author}</span>
                <span className="mx-3">•</span>
                <span>{featuredArticles[currentFeature].date}</span>
                <span className="mx-3">•</span>
                <span>{featuredArticles[currentFeature].readTime}</span>
              </div>
              <button
                className="mt-8 mb-5 px-8 py-3 bg-purple-700 dark:bg-purple-400 text-white font-semibold rounded-lg hover:bg-purple-800 dark:hover:bg-purple-500 transition-colors"
                onClick={() => {
                  if (currentFeature === 0) window.location.href = "/blog1";
                  else if (currentFeature === 1) window.location.href = "/blog2";
                  else if (currentFeature === 2) window.location.href = "/blog3";
                }}
              >
                {t.readArticle}
              </button>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentFeature ? 'bg-purple-700 dark:bg-purple-400' : 'bg-gray-300 dark:bg-gray-700'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* AI Concepts Section */}
      <section className="py-5 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">{t.conceptTitle}</h2>
          <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.conceptDesc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {concepts.map((concept, index) => (
              <button
                key={index}
                onClick={() => setActiveConcept(index)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${activeConcept === index
                  ? "bg-purple-100 dark:bg-purple-900 border-2 border-purple-300 dark:border-purple-700 shadow-md"
                  : "bg-white dark:bg-gray-900 hover:bg-purple-50 dark:hover:bg-purple-800"
                  }`}
              >
                <div className="text-3xl mb-2 text-purple-600 dark:text-purple-300">{concept.icon}</div>
                <h3 className="font-medium text-black dark:text-white">{concept.term}</h3>
              </button>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
            <div className="flex items-start mb-6">
              <div className="text-5xl mr-6 text-purple-600 dark:text-purple-300">{concepts[activeConcept].icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-2">{concepts[activeConcept].term}</h3>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                  {concepts[activeConcept].complexity} Level
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">{t.definition}</h4>
                <p className="text-black dark:text-white mb-6">{concepts[activeConcept].definition}</p>
                <h4 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">{t.analogy}</h4>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg border border-purple-100 dark:border-purple-700">
                  <p className="text-black dark:text-white">{concepts[activeConcept].analogy}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">{t.applications}</h4>
                <p className="text-black dark:text-white mb-6">{concepts[activeConcept].applications}</p>
                <h4 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">{t.related}</h4>
                <ul className="space-y-2">
                  <li className="text-black dark:text-white">
                    <span className="font-semibold">{t.didYouKnow.split(":")[0]}</span> {t.didYouKnow.split(":")[1] || t.didYouKnow}
                  </li>
                  <li className="text-black dark:text-white">
                    <span className="font-semibold">{t.tip.split(":")[0]}</span> {t.tip.split(":")[1] || t.tip}
                  </li>
                  <li className="text-black dark:text-white">
                    <span className="font-semibold">{t.fact.split(":")[0]}</span> {t.fact.split(":")[1] || t.fact}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI Innovation Spotlight Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-purple-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">{t.innovationTitle}</h2>
            <p className="text-xl text-purple-700 dark:text-purple-300 max-w-3xl mx-auto">
              {t.innovationDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-md border border-purple-100 dark:border-purple-800">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-black dark:text-white">{t.spotlight1Title}</h3>
              </div>
              <p className="text-black dark:text-white mb-6 leading-relaxed">
                {t.spotlight1Desc}
              </p>
              <div className="flex items-center text-purple-700 dark:text-purple-300">
                <span className="text-sm">{t.spotlight1Tag}</span>
              </div>
            </div>
            <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-md border border-purple-100 dark:border-purple-800">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-purple-400 dark:bg-purple-700 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-black dark:text-white">{t.spotlight2Title}</h3>
              </div>
              <p className="text-black dark:text-white mb-6 leading-relaxed">
                {t.spotlight2Desc}
              </p>
              <div className="flex items-center text-purple-700 dark:text-purple-300">
                <span className="text-sm">{t.spotlight2Tag}</span>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-r from-purple-700 to-purple-400 dark:bg-black rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">{t.trendTitle}</h3>
              <p className="mb-6 leading-relaxed">
                {t.trendDesc}
              </p>
              <div className="flex items-center text-purple-200 dark:text-purple-300">
                <span className="text-sm">{t.trendTag}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-gradient-to-r from-purple-600 to-black mt-12 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
        <p className="text-white mb-6 text-center max-w-xl">{t.ctaDesc}</p>
        <div className="flex gap-4">
          <a href="/contact" className="bg-white text-purple-700 font-bold px-6 py-3 rounded-full shadow hover:bg-purple-700 hover:text-white transition">{t.contact}</a>
          
        </div>
      </section>
    </div>
  );
}

export default Blog;
