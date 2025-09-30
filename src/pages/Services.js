import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import servicesVideo from "../images/services-hero.mp4";
import chatbot from "../images/chatbot.jpg";
import search from "../images/smartsearch.jpg";
import contentGen from "../images/contentgen.jpg";
import dataAnalytics from "../images/dataanalysis.jpg";
import designIntelligence from "../images/designsolutions.jpg";
import securitySolutions from "../images/security.jpg";
import { useNavigate } from "react-router-dom";
import api from "../images/api.png";
import responsive from  "../images/responsive-design.png";

import solutions from "../images/solutions.png";
import coding from "../images/coding.png";
import file from "../images/file.png";
import process from "../images/process.png";
import input from "../images/check-mark.png";
// Translations object for all UI text and arrays
const translations = {
  en: {
    heroTitle: "AI Tools Services",
    heroDesc: "Unlock the power of AI with our suite of innovative services.",
    servicesTitle: "Our AI Tools Services",
    servicesDesc: "From automation to analytics, our AI solutions empower your business to initiate, scale, and succeed in the digital era.",
    btn: "Learn More",
    integrationsTitle: "Easy Integration Options",
    integrationsDesc: "Multiple ways to incorporate our AI tools into your workflow, regardless of your tech stack",
    integrationHelp: "Need help with integration?",
    integrationContact: "Contact our team →",
    stepsTitle: "How Our AI Tools Work",
    stepsDesc: "A simple, streamlined process to harness the power of artificial intelligence for your needs",
    plansTitle: "Choose Your Plan",
    plansDesc: "Select the perfect plan for your needs. All plans include access to our full suite of AI tools.",
    mostPopular: "MOST POPULAR",
    ctaTitle: "Ready to Elevate Your Workflow?",
    ctaDesc: "Get started with our AI tools and experience the future of productivity, creativity, and security. Join thousands of innovators today!",
    ctaBtn: "Get Started"
  },
  ar: {
    heroTitle: "خدمات أدوات الذكاء الاصطناعي",
    heroDesc: "اكتشف قوة الذكاء الاصطناعي مع مجموعة خدماتنا المبتكرة.",
    servicesTitle: "خدمات أدوات الذكاء الاصطناعي",
    servicesDesc: "من الأتمتة إلى التحليلات، حلول الذكاء الاصطناعي لدينا تمكّن عملك من الانطلاق، التوسع، والنجاح في العصر الرقمي.",
    btn: "اعرف المزيد",
    integrationsTitle: "خيارات التكامل السهلة",
    integrationsDesc: "طرق متعددة لدمج أدوات الذكاء الاصطناعي في سير عملك، بغض النظر عن التقنيات المستخدمة",
    integrationHelp: "هل تحتاج إلى مساعدة في التكامل؟",
    integrationContact: "تواصل مع فريقنا →",
    stepsTitle: "كيف تعمل أدوات الذكاء الاصطناعي لدينا",
    stepsDesc: "عملية بسيطة وسلسة للاستفادة من قوة الذكاء الاصطناعي",
    plansTitle: "اختر خطتك",
    plansDesc: "اختر الخطة المثالية لاحتياجاتك. جميع الخطط تشمل الوصول الكامل لأدوات الذكاء الاصطناعي.",
    mostPopular: "الأكثر شعبية",
    ctaTitle: "جاهز لتعزيز سير عملك؟",
    ctaDesc: "ابدأ مع أدوات الذكاء الاصطناعي لدينا واختبر مستقبل الإنتاجية والإبداع والأمان. انضم إلى آلاف المبتكرين اليوم!",
    ctaBtn: "ابدأ الآن"
  },
  he: {
    heroTitle: "שירותי כלי AI",
    heroDesc: "גלה את עוצמת ה-AI עם מערך השירותים החדשני שלנו.",
    servicesTitle: "שירותי כלי AI שלנו",
    servicesDesc: "מאוטומציה ועד אנליטיקה, פתרונות ה-AI שלנו מאפשרים לעסק שלך להתחיל, לצמוח ולהצליח בעידן הדיגיטלי.",
    btn: "למידע נוסף",
    integrationsTitle: "אפשרויות אינטגרציה קלות",
    integrationsDesc: "דרכים רבות לשלב את כלי ה-AI שלנו בתהליך העבודה שלך, ללא תלות בטכנולוגיה",
    integrationHelp: "צריך עזרה באינטגרציה?",
    integrationContact: "צור קשר עם הצוות שלנו →",
    stepsTitle: "איך כלי ה-AI שלנו עובדים",
    stepsDesc: "תהליך פשוט ויעיל לניצול עוצמת הבינה המלאכותית",
    plansTitle: "בחר את התוכנית שלך",
    plansDesc: "בחר את התוכנית המושלמת עבורך. כל התוכניות כוללות גישה לכלי ה-AI שלנו.",
    mostPopular: "הכי פופולרי",
    ctaTitle: "מוכן לשדרג את העבודה שלך?",
    ctaDesc: "התחל עם כלי ה-AI שלנו ותחווה את עתיד הפרודוקטיביות, היצירתיות והאבטחה. הצטרף לאלפי חדשנים כבר היום!",
    ctaBtn: "התחל עכשיו"
  }
};

// Define services array outside JSX
const services = [
  {
    img: chatbot,
    title: {
      en: "AI Chatbots & Assistants",
      ar: "روبوتات الدردشة والمساعدون الذكيون",
      he: "צ'אטבוטים ועוזרי AI"
    },
    desc: {
      en: "24/7 customer engagement, personalized responses, and seamless integration with your platforms.",
      ar: "تفاعل مع العملاء على مدار الساعة، ردود مخصصة، وتكامل سلس مع منصاتك.",
      he: "מעורבות לקוחות 24/7, תגובות מותאמות ושילוב קל בפלטפורמות שלך."
    },
    btn: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" }
  },
  {
    img: search,
    title: {
      en: "Smart Search",
      ar: "البحث الذكي",
      he: "חיפוש חכם"
    },
    desc: {
      en: "Advanced AI-powered search to find insights and make informed decisions instantly.",
      ar: "بحث متقدم مدعوم بالذكاء الاصطناعي للعثور على رؤى واتخاذ قرارات فورية.",
      he: "חיפוש מתקדם מבוסס AI למציאת תובנות והחלטות מידיות."
    },
    btn: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" }
  },
  {
    img: contentGen,
    title: {
      en: "Content Generation",
      ar: "توليد المحتوى",
      he: "יצירת תוכן"
    },
    desc: {
      en: "Produce high-quality, original content in seconds using generative AI models.",
      ar: "أنشئ محتوى عالي الجودة وأصلي في ثوانٍ باستخدام نماذج الذكاء الاصطناعي التوليدي.",
      he: "יצירת תוכן איכותי ומקורי בשניות עם מודלי AI גנרטיביים."
    },
    btn: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" }
  },
  {
    img: dataAnalytics,
    title: {
      en: "Data Analytics",
      ar: "تحليلات البيانات",
      he: "אנליטיקת נתונים"
    },
    desc: {
      en: "Unlock trends and patterns with AI-driven analytics and predictive insights.",
      ar: "اكتشف الاتجاهات والأنماط مع تحليلات الذكاء الاصطناعي والرؤى التنبؤية.",
      he: "גלה מגמות ודפוסים עם אנליטיקה מבוססת AI ותובנות חיזוי."
    },
    btn: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" }
  },
  {
    img: designIntelligence,
    title: {
      en: "Design Intelligence",
      ar: "ذكاء التصميم",
      he: "אינטליגנציה עיצובית"
    },
    desc: {
      en: "Enhance creativity with AI-assisted design tools for stunning visuals and layouts.",
      ar: "عزز الإبداع بأدوات تصميم مدعومة بالذكاء الاصطناعي لمرئيات وتخطيطات مذهلة.",
      he: "שפר יצירתיות עם כלי עיצוב מבוססי AI לתוצרים מרהיבים."
    },
    btn: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" }
  },
  {
    img: securitySolutions,
    title: {
      en: "Security Solutions",
      ar: "حلول الأمن",
      he: "פתרונות אבטחה"
    },
    desc: {
      en: "Protect your data with AI-based security, threat detection, and compliance tools.",
      ar: "احمِ بياناتك بأدوات أمنية مدعومة بالذكاء الاصطناعي وكشف التهديدات والامتثال.",
      he: "הגן על הנתונים שלך עם אבטחה מבוססת AI, זיהוי איומים וכלי רגולציה."
    },
    btn: { en: "Learn More", ar: "اعرف المزيد", he: "למידע נוסף" }
  }
];
const steps = [
    {
        step: 1,
        title: "Select Your Tool",
        description: "Choose from our diverse range of AI-powered tools tailored to your specific needs",
        icon: coding
    },
    {
        step: 2,
        title: "Input Your Data",
        description: "Provide the necessary information or upload files for the AI to process",
        icon: file
    },
    {
        step: 3,
        title: "AI Processing",
        description: "Our advanced algorithms analyze and process your data with cutting-edge AI technology",
        icon: process
       
    },
    {
        step: 4,
        title: "Receive Results",
        description: "Get your processed output, insights, or generated content delivered instantly",
        icon: input
    }
];
const integrations = [
    {
        name: "API Access",
        description: "Seamlessly integrate our AI capabilities into your existing applications",
        icon: api,
        features: ["RESTful API", "Webhooks", "Comprehensive Documentation"]
    },
    {
        name: "Platform Plugins",
        description: "Install ready-made plugins for popular platforms and CMS",
        icon: responsive,
        features: ["WordPress", "Shopify", "Salesforce", "Zapier"]
    },
    {
        name: "Custom Solutions",
        description: "Tailor-made AI implementations for your specific business needs",
        icon: solutions,
        features: ["White-label Options", "Custom Training", "Dedicated Support"]
    }
];

// Feature arrays for interactive sections
const features = [
    { icon: "🧠", text: "Machine Learning" },
    { icon: "💬", text: "Natural Language Processing" },
    { icon: "📈", text: "Predictive Analytics" },
    { icon: "🎨", text: "AI Design" },
    { icon: "🔒", text: "Security & Compliance" },
    { icon: "🤖", text: "Automation" },
    { icon: "🌐", text: "Global Integration" },
];

const collaborationFeatures = [
    "Real-time teamwork with AI-powered suggestions",
    "Seamless integration with your favorite tools",
    "Automated task management and reminders",
    "Insightful analytics for smarter decisions",
];
const plans = [
    {
        name: "Starter",
        description: "Perfect for individuals and small teams getting started with AI",
        price: "$29",
        period: "per month",
        features: [
            "5,000 AI credits monthly",
            "Access to basic AI models",
            "Standard processing speed",
            "Email support",
            "1 user included"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Professional",
        description: "For growing businesses that need more power and flexibility",
        price: "$79",
        period: "per month",
        features: [
            "20,000 AI credits monthly",
            "Access to advanced AI models",
            "Priority processing",
            "Priority email & chat support",
            "5 users included",
            "Custom model fine-tuning"
        ],
        cta: "Try Free for 14 Days",
        popular: true
    },
    {
        name: "Enterprise",
        description: "For organizations with high-volume needs and custom requirements",
        price: "Custom",
        period: "tailored pricing",
        features: [
            "Unlimited AI credits",
            "Access to all AI models including experimental",
            "Highest priority processing",
            "24/7 dedicated support",
            "Unlimited users",
            "Custom model development",
            "SLA guarantees",
            "On-premise deployment options"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
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

  const getServicePath = (title) => {
    if (title === services[0].title[language]) return "/chatbots";
    if (title === services[1].title[language]) return "/smartsearch";
    if (title === services[2].title[language]) return "/contentgen";
    if (title === services[3].title[language]) return "/data-analytics";
    if (title === services[4].title[language]) return "/design-intelligence";
    if (title === services[5].title[language]) return "/security-solutions";
    return "/";
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={servicesVideo}
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

      {/* AI Tools Services Section */}
      <section className="w-full py-20 flex flex-col items-center bg-white dark:bg-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-purple-700 dark:text-purple-300">
            {t.servicesTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-10 text-center max-w-2xl mx-auto">
            {t.servicesDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={service.title[language]}
                className="service-card-service bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-purple-200 dark:border-purple-700 hover:scale-105 transition-transform"
              >
                <img
                  src={service.img}
                  alt={service.title[language]}
                  className="w-full h-40 rounded-xl mb-4 object-cover border-4 border-purple-300 dark:border-purple-500 shadow-lg"
                />
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                  {service.title[language]}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
                  {service.desc[language]}
                </p>
                <button
                  className="bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-purple-800 transition-all text-base mb-2"
                  onClick={() => navigate(getServicePath(service.title[language]))}
                >
                  {service.btn[language]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-10 px-4 bg-gradient-to-br from-black via-gray-900 to-purple-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-200">{t.integrationsTitle}</h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.integrationsDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white dark:bg-black p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-purple-200 dark:border-purple-700">
                <div className="text-purple-700 dark:text-purple-300 mb-6">
                  {typeof integration.icon === 'string' ? (
                    <img src={integration.icon} alt={integration.name} className="h-12 w-12 object-contain" />
                  ) : (
                    integration.icon
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{integration.name}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-6">{integration.description}</p>
                <ul className="space-y-2">
                  {integration.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full border border-purple-300">
              <span className="mr-2">{t.integrationHelp}</span>
              <span className="font-semibold text-purple-400 dark:text-purple-700 hover:text-purple-700 dark:hover:text-purple-500 cursor-pointer" onClick={() => navigate("/contact")}>
                {t.integrationContact}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How Our AI Tools Work Section */}
      <section className="py-5 px-4 bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-700 dark:text-purple-300">{t.stepsTitle}</h2>
          <p className="text-xl text-center text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
            {t.stepsDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-purple-400 z-0"></div>
                )}
                <div className="relative z-10 bg-white dark:bg-black p-6 rounded-2xl h-full border border-purple-200 dark:border-purple-700 shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-purple-700 dark:bg-purple-400 flex items-center justify-center mb-6 mx-auto">
                    <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-purple-400 dark:bg-purple-700 flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-300">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-200">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-gray-800"
          >
            {t.plansTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            {t.plansDesc}
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.18 }}
                viewport={{ once: true }}
                className={`flex-1 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ${plan.popular
                  ? "bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl transform -translate-y-2"
                  : "bg-white text-gray-800 shadow-lg border border-gray-200"
                  }`}
                whileHover={{ scale: 1.04, y: -8 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold rounded-bl-lg">
                    {t.mostPopular}
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-800"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? "text-purple-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-purple-200" : "text-gray-600"}`}>
                    /{plan.period}
                  </span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <svg
                        className={`h-6 w-6 mr-2 flex-shrink-0 ${plan.popular ? "text-purple-300" : "text-black dark:text-white"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.popular ? "text-purple-100" : "text-gray-700"}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  onClick={() => navigate("/contact")}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 flex items-center justify-center bg-black">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl">
            {t.ctaDesc}
          </p>
          <button className="bg-white text-purple-700 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-purple-700 hover:text-white transition-all text-lg" onClick={() => navigate("/contact")}>
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
}
