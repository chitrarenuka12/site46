import contact from "../images/contact.mp4";
import map from "../images/map.jpg";
import { useState, useEffect } from "react";

const translations = {
  en: {
    heroTitle: "Get In Touch with US",
    heroDesc: "Friendly and welcoming, used by brands like Unbounce to make visitors feel valued and at ease.",
    formTitle: "Get In Touch With Us",
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    contactInfo: "Contact Information",
    phoneLabel: "Phone",
    phoneValue: "+1 (555) 123-4567",
    phoneTime: "Mon-Fri, 9am-6pm EST",
    emailLabel: "Email",
    emailValue: "contact@yourcompany.com",
    emailTime: "Response within 24 hours",
    locationLabel: "Location",
    locationValue: "123 Event Plaza, Suite 456",
    locationTime: "New York, NY 10001",
    faqsTitle: "AI Tools FAQs",
    mapTitle: "Find Us On The Map",
    faqs: [
      {
        q: "What are AI tools and how can they help my business?",
        a: "AI tools use artificial intelligence to automate tasks, analyze data, and provide insights, helping businesses improve efficiency, decision-making, and customer experience.",
      },
      {
        q: "Are AI tools secure and compliant?",
        a: "Yes, our AI tools are built with robust security and compliance features to protect your data and meet industry standards.",
      },
      {
        q: "Do I need technical expertise to use AI tools?",
        a: "No, our AI tools are designed for ease of use, with intuitive interfaces and support resources for all skill levels.",
      },
      {
        q: "Can AI tools be customized for my business needs?",
        a: "Absolutely! We offer customization options to tailor AI solutions to your specific requirements and goals.",
      },
      {
        q: "What support is available for AI tools?",
        a: "Our team provides comprehensive support, including onboarding, troubleshooting, and ongoing guidance to ensure your success with AI tools.",
      },
    ],
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroDesc: "ودود ومرحّب، تستخدمه العلامات التجارية لجعل الزوار يشعرون بالتقدير والراحة.",
    formTitle: "تواصل معنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    company: "الشركة",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال الرسالة",
    contactInfo: "معلومات التواصل",
    phoneLabel: "الهاتف",
    phoneValue: "+1 (555) 123-4567",
    phoneTime: "الاثنين-الجمعة، 9ص-6م بتوقيت شرق أمريكا",
    emailLabel: "البريد الإلكتروني",
    emailValue: "contact@yourcompany.com",
    emailTime: "الرد خلال 24 ساعة",
    locationLabel: "الموقع",
    locationValue: "123 Event Plaza، جناح 456",
    locationTime: "نيويورك، NY 10001",
    faqsTitle: "أسئلة شائعة حول أدوات الذكاء الاصطناعي",
    mapTitle: "اعثر علينا على الخريطة",
    faqs: [
      {
        q: "ما هي أدوات الذكاء الاصطناعي وكيف تساعد عملي؟",
        a: "تستخدم أدوات الذكاء الاصطناعي الأتمتة وتحليل البيانات وتقديم الرؤى لتحسين الكفاءة واتخاذ القرار وتجربة العملاء.",
      },
      {
        q: "هل أدوات الذكاء الاصطناعي آمنة ومتوافقة؟",
        a: "نعم، أدواتنا مبنية بميزات أمان وامتثال قوية لحماية بياناتك وتلبية المعايير.",
      },
      {
        q: "هل أحتاج خبرة تقنية لاستخدام أدوات الذكاء الاصطناعي؟",
        a: "لا، أدواتنا سهلة الاستخدام مع واجهات بسيطة ودعم لجميع المستويات.",
      },
      {
        q: "هل يمكن تخصيص أدوات الذكاء الاصطناعي لاحتياجات عملي؟",
        a: "بالتأكيد! نقدم خيارات تخصيص لتناسب متطلباتك وأهدافك.",
      },
      {
        q: "ما الدعم المتوفر لأدوات الذكاء الاصطناعي؟",
        a: "فريقنا يقدم دعم شامل، من التدريب إلى الحلول والمساعدة المستمرة لضمان نجاحك.",
      },
    ],
  },
  he: {
    heroTitle: "צור קשר איתנו",
    heroDesc: "ידידותי ומזמין, בשימוש מותגים מובילים כדי לגרום למבקרים להרגיש מוערכים ובנוח.",
    formTitle: "צור קשר איתנו",
    name: "שם",
    email: "אימייל",
    phone: "טלפון",
    company: "חברה",
    subject: "נושא",
    message: "הודעה",
    send: "שלח הודעה",
    contactInfo: "פרטי קשר",
    phoneLabel: "טלפון",
    phoneValue: "+1 (555) 123-4567",
    phoneTime: "ב'-ו', 9:00-18:00 שעון ניו-יורק",
    emailLabel: "אימייל",
    emailValue: "contact@yourcompany.com",
    emailTime: "תגובה תוך 24 שעות",
    locationLabel: "מיקום",
    locationValue: "123 Event Plaza, Suite 456",
    locationTime: "ניו יורק, NY 10001",
    faqsTitle: "שאלות נפוצות על כלי AI",
    mapTitle: "מצאו אותנו על המפה",
    faqs: [
      {
        q: "מהם כלי AI וכיצד הם יכולים לעזור לעסק שלי?",
        a: "כלי AI משתמשים בבינה מלאכותית לאוטומציה, ניתוח נתונים ומתן תובנות לשיפור יעילות, קבלת החלטות וחווית לקוח.",
      },
      {
        q: "האם כלי AI מאובטחים ועומדים בתקנים?",
        a: "כן, הכלים שלנו כוללים אבטחה ועמידה בתקנים כדי להגן על הנתונים שלך.",
      },
      {
        q: "האם צריך ידע טכני כדי להשתמש בכלי AI?",
        a: "לא, הכלים שלנו פשוטים לשימוש עם ממשק ידידותי ותמיכה לכל הרמות.",
      },
      {
        q: "האם ניתן להתאים אישית את כלי ה-AI לצרכים שלי؟",
        a: "בהחלט! אנו מציעים התאמה אישית לפי דרישותיך ומטרותיך.",
      },
      {
        q: "איזה תמיכה זמינה לכלי AI؟",
        a: "הצוות שלנו מספק תמיכה מלאה, כולל הדרכה, פתרון בעיות וליווי מתמשך להצלחה שלך.",
      },
    ],
  },
};

function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);
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
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={contact}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-center">
            {t.heroDesc}
          </p>
        </div>
      </section>
      {/* End Hero Section */}
      <section className="w-full py-20 px-4 bg-white dark:bg-black flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-purple-200 dark:border-purple-700">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-6 text-center">
            {t.formTitle}
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white font-bold rounded-lg shadow hover:bg-purple-800 transition-all text-lg"
            >
              {t.send}
            </button>
          </form>
        </div>
      </section>
      <section className="w-full py-5 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-black dark:to-purple-900">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            {t.contactInfo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-purple-700 dark:bg-purple-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-purple-200 dark:border-purple-700">
              <i className="fas fa-phone text-3xl text-white dark:text-purple-300 mb-3"></i>
              <h3 className="text-lg font-semibold mb-1 text-white dark:text-purple-200">
                {t.phoneLabel}
              </h3>
              <p className="text-purple-100 dark:text-purple-300 mb-1">
                {t.phoneValue}
              </p>
              <span className="text-sm text-purple-200 dark:text-purple-400">
                {t.phoneTime}
              </span>
            </div>
            <div className="bg-purple-700 dark:bg-purple-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-purple-200 dark:border-purple-700">
              <i className="fas fa-envelope text-3xl text-white dark:text-purple-300 mb-3"></i>
              <h3 className="text-lg font-semibold mb-1 text-white dark:text-purple-200">
                {t.emailLabel}
              </h3>
              <p className="text-purple-100 dark:text-purple-300 mb-1">
                {t.emailValue}
              </p>
              <span className="text-sm text-purple-200 dark:text-purple-400">
                {t.emailTime}
              </span>
            </div>
            <div className="bg-purple-700 dark:bg-purple-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-purple-200 dark:border-purple-700">
              <i className="fas fa-map-marker-alt text-3xl text-white dark:text-purple-300 mb-3"></i>
              <h3 className="text-lg font-semibold mb-1 text-white dark:text-purple-200">
                {t.locationLabel}
              </h3>
              <p className="text-purple-100 dark:text-purple-300 mb-1">
                {t.locationValue}
              </p>
              <span className="text-sm text-purple-200 dark:text-purple-400">
                {t.locationTime}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 bg-white dark:bg-black">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            {t.faqsTitle}
          </h2>
          <div className="space-y-6">
            {t.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-purple-50 dark:bg-purple-900 rounded-2xl shadow p-6 border border-purple-200 dark:border-purple-700"
              >
                <button
                  className="w-full text-left flex items-center justify-between focus:outline-none"
                  onClick={() =>
                    setOpenFaq(openFaq === idx ? null : idx)
                  }
                >
                  <span className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 transition-transform ${
                      openFaq === idx ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="mt-4 text-gray-700 dark:text-gray-200 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-0 bg-white dark:bg-black">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            {t.mapTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-purple-200 dark:border-purple-700 w-full">
            <img
              src={map}
              alt="Company Location Map"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl border border-purple-200 dark:border-purple-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;