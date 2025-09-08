import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import linkedin from "../images/linkedinl.png";
import twitter from "../images/twitterl.png";
import facebook from "../images/facebook l.png";
import gmail from "../images/google.png";

const translations = {
  en: {
    about: "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    servicesTitle: "Services",
    chatbots: "Chatbots & Assistants",
    smartSearch: "Smart Search",
    contentGen: "Content Generation",
    dataAnalytics: "Data Analytics",
    designIntelligence: "Design Intelligence",
    securitySolutions: "Security Solutions",
    connect: "Connect with us",
    email: "Email: support@stackly.com",
    phone: "Phone: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. All rights reserved By ESS.`
  },
  ar: {
    about: "تمكّن Stackly الشركات بحلول سحابية وذكاء اصطناعي وأمن سيبراني متقدمة لتحويل مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    contact: "تواصل",
    servicesTitle: "الخدمات",
    chatbots: "روبوتات الدردشة والمساعدون",
    smartSearch: "البحث الذكي",
    contentGen: "توليد المحتوى",
    dataAnalytics: "تحليلات البيانات",
    designIntelligence: "ذكاء التصميم",
    securitySolutions: "حلول الأمن",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني: support@stackly.com",
    phone: "الهاتف: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. جميع الحقوق محفوظة بواسطة ESS.`
  },
  he: {
    about: "Stackly מעניקה לעסקים פתרונות ענן, AI ואבטחת מידע מתקדמים לשינוי העתיד הדיגיטלי שלך.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    aboutUs: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    servicesTitle: "שירותים",
    chatbots: "צ'אטבוטים ועוזרי AI",
    smartSearch: "חיפוש חכם",
    contentGen: "יצירת תוכן",
    dataAnalytics: "אנליטיקת נתונים",
    designIntelligence: "אינטליגנציה עיצובית",
    securitySolutions: "פתרונות אבטחה",
    connect: "התחברו איתנו",
    email: "אימייל: support@stackly.com",
    phone: "טלפון: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. כל הזכויות שמורות ל-ESS.`
  }
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language] || translations["en"];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    // Listen for language changes from header
    const syncLanguage = () => {
      const lang = localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("storage", syncLanguage);
    const customLangChange = (e) => {
      const lang = e.detail || localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("languageChange", customLangChange);
    syncLanguage();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white text-black dark:bg-black py-12 px-5 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 md:gap-10">
        {/* Logo and About */}
        <div className="flex-1 min-w-[200px] px-5 md:px-8">
          <img 
            src={logo}
            alt="Stackly Logo" 
            className="w-36 mb-2 mt-2" 
          />
          <p className="text-sm text-black dark:text-gray-300 mt-3">
            {t.about}
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] px-5 md:px-8">
          <h4 className="text-base font-medium mb-3 text-black dark:text-gray-300">{t.quickLinks}</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><Link to="/home1" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.home}</Link></li>
            <li className="mb-2"><Link to="/about" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.aboutUs}</Link></li>
            <li className="mb-2"><Link to="/services" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.services}</Link></li>
            <li className="mb-2"><Link to="/blog" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.blog}</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.contact}</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div className="flex-1 min-w-[200px] px-5">
          <h4 className="text-base font-medium mb-3 text-black dark:text-gray-300">{t.servicesTitle}</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><Link to="/chatbots" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.chatbots}</Link></li>
            <li className="mb-2"><Link to="/smartsearch" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.smartSearch}</Link></li>
            <li className="mb-2"><Link to="/contentgen" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.contentGen}</Link></li>
            <li className="mb-2"><Link to="/data-analytics" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.dataAnalytics}</Link></li>
            <li className="mb-2"><Link to="/design-intelligence" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.designIntelligence}</Link></li>
            <li className="mb-2"><Link to="/security-solutions" className="text-black dark:text-gray-400 hover:text-purple-800 dark:hover:text-blue-300 transition-colors no-underline">{t.securitySolutions}</Link></li>
          </ul>
        </div>
        {/* Social & Contact */}
        <div className="flex-1 min-w-[200px] px-5">
          <h4 className="text-base font-medium mb-3 text-black dark:text-gray-300">{t.connect}</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://mail.google.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-blue-300 transition-colors"
            >
              <img
                src={gmail}
                alt="Gmail"
                className="w-6 h-6"
              />
            </a>
          </div>
          <p className="text-sm text-black dark:text-gray-300 mt-3">
            {t.email}<br />
            {t.phone}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative text-center py-3 mt-8 bg-white dark:bg-black text-black dark:text-gray-300">
        <p>{t.copyright}</p>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-800 transition-all z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;