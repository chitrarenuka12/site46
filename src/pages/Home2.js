import React from "react";
import videohero from "../images/home2-ai.mp4";
import client1 from "../images/team4.jpg"; // Replace with actual image paths
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rocket from "../images/rocket.png";
import lock from "../images/padlock.png";
import search from "../images/search.png";
import thunder from "../images/thunder.png";
import backcta from "../images/cta.jpg"; // Import background image for CTA section
import schedule from "../images/schedule.png";
import robot from "../images/robot.png";

const webinars = [
    {
        date: "Sep 18, 2025",
        icon: schedule,
        title: "AI for Business Growth",
        desc: "Discover how AI tools can drive efficiency and innovation in your organization."
    },
    {
        date: "Oct 2, 2025",
        icon: robot,
        title: "Mastering AI Automation",
        desc: "Learn best practices for automating workflows and boosting productivity with AI."
    },
    {
        date: "Oct 16, 2025",
        icon: lock,
        title: "AI Security & Compliance",
        desc: "Explore how to keep your AI projects secure and compliant with industry standards."
    }
];

const translations = {
  en: {
    heroTitle: "AI that understands you",
    heroDesc: "Empowering your workflow with next-generation artificial intelligence.",
    whyChoose: "Why Choose Us?",
    provenResults: "Proven Results & Trusted Excellence",
    whyPara1: "The numbers speak for themselves. Our track record of delivering exceptional AI solutions has earned us the trust of leading businesses worldwide.",
    whyPara2: "From startups to Fortune 500 companies, we've consistently delivered measurable results that drive growth, efficiency, and innovation. Our commitment to excellence is reflected in every project we undertake.",
    whyPara3: "With cutting-edge AI technology, expert teams, and a customer-first approach, we transform complex challenges into elegant solutions. Our comprehensive suite of AI tools and services ensures that every business, regardless of size, can harness the power of artificial intelligence to achieve their goals.",
    readMore: "Read More",
    impactNumber: "AI Projects Launched",
    impactDesc: "Delivering innovative AI solutions for automation, analytics, and digital transformation across industries.",
    transformTitle: "Transforming Workflows with AI",
    transformDesc: "Our platform empowers teams to automate processes, gain real-time insights, and scale operations securely. Trusted by global leaders for reliability and user-friendly integration.",
    leadEngineer: "Lead AI Engineer",
    stats: ["Active Users", "Enterprise Clients", "Uptime", "AI Integrations"],
    webinarsTitle: "Upcoming Webinars",
    register: "Register",
    registerFor: "Register for ",
    regSuccess: "Registration successful! Thank you for signing up.",
    coreBenefits: "Core Benefits",
    coreDesc: "Unlock the full potential of your business with our AI tools. Experience seamless integration, actionable insights, and future-ready automation designed to drive measurable results.",
    benefits: [
      { icon: thunder, title: "Instant Automation", desc: "Automate repetitive tasks and workflows to boost productivity and free up your team for creative work." },
      { icon: search, title: "Smart Insights", desc: "Analyze complex data and get actionable recommendations for smarter decision-making." },
      { icon: lock, title: "Enterprise Security", desc: "Protect your data and operations with advanced AI-driven security and compliance features." },
      { icon: rocket, title: "Scalable Integration", desc: "Easily connect AI tools with your existing systems and scale as your business grows." }
    ],
    ctaTitle: "Ready to Transform Your Workflow?",
    ctaDesc: "Unlock the power of AI tools and take your productivity to the next level. Start your journey with us today!",
    ctaBtn: "Get Started Now"
  },
  ar: {
    heroTitle: "ذكاء اصطناعي يفهمك",
    heroDesc: "تمكين سير عملك بأحدث تقنيات الذكاء الاصطناعي.",
    whyChoose: "لماذا تختارنا؟",
    provenResults: "نتائج مثبتة وتميز موثوق",
    whyPara1: "الأرقام تتحدث عن نفسها. سجلنا في تقديم حلول الذكاء الاصطناعي الاستثنائية أكسبنا ثقة الشركات الرائدة حول العالم.",
    whyPara2: "من الشركات الناشئة إلى شركات Fortune 500، قدمنا باستمرار نتائج قابلة للقياس تدفع النمو والكفاءة والابتكار. التزامنا بالتميز ينعكس في كل مشروع نقوم به.",
    whyPara3: "بتقنيات الذكاء الاصطناعي المتقدمة، فرق الخبراء، ونهج يركز على العميل، نحول التحديات المعقدة إلى حلول أنيقة. مجموعة أدواتنا وخدماتنا الشاملة تضمن أن كل شركة، بغض النظر عن حجمها، يمكنها الاستفادة من الذكاء الاصطناعي لتحقيق أهدافها.",
    readMore: "اقرأ المزيد",
    impactNumber: "مشاريع الذكاء الاصطناعي المنفذة",
    impactDesc: "تقديم حلول ذكاء اصطناعي مبتكرة للأتمتة والتحليلات والتحول الرقمي عبر الصناعات.",
    transformTitle: "تحويل سير العمل بالذكاء الاصطناعي",
    transformDesc: "منصتنا تمكن الفرق من أتمتة العمليات، والحصول على رؤى فورية، وتوسيع العمليات بأمان. موثوق بها من قبل القادة العالميين للموثوقية والتكامل السهل.",
    leadEngineer: "مهندس الذكاء الاصطناعي الرئيسي",
    stats: ["مستخدمون نشطون", "عملاء شركات", "وقت التشغيل", "تكاملات الذكاء الاصطناعي"],
    webinarsTitle: "الندوات القادمة",
    register: "سجل",
    registerFor: "سجل في ",
    regSuccess: "تم التسجيل بنجاح! شكرًا لانضمامك.",
    coreBenefits: "الفوائد الأساسية",
    coreDesc: "اكتشف الإمكانيات الكاملة لشركتك مع أدوات الذكاء الاصطناعي لدينا. تجربة تكامل سلس، رؤى قابلة للتنفيذ، وأتمتة جاهزة للمستقبل لتحقيق نتائج قابلة للقياس.",
    benefits: [
      { icon: thunder, title: "أتمتة فورية", desc: "أتمتة المهام المتكررة وسير العمل لزيادة الإنتاجية وتحرير فريقك للعمل الإبداعي." },
      { icon: search, title: "رؤى ذكية", desc: "حلل البيانات المعقدة واحصل على توصيات قابلة للتنفيذ لاتخاذ قرارات أكثر ذكاءً." },
      { icon: lock, title: "أمان المؤسسات", desc: "حماية بياناتك وعملياتك بميزات أمان وامتثال متقدمة مدعومة بالذكاء الاصطناعي." },
      { icon: rocket, title: "تكامل قابل للتوسع", desc: "اربط أدوات الذكاء الاصطناعي بسهولة بأنظمتك الحالية وتوسع مع نمو عملك." }
    ],
    ctaTitle: "جاهز لتحويل سير عملك؟",
    ctaDesc: "اكتشف قوة أدوات الذكاء الاصطناعي وارتق بإنتاجيتك إلى المستوى التالي. ابدأ رحلتك معنا اليوم!",
    ctaBtn: "ابدأ الآن"
  },
  he: {
    heroTitle: "בינה מלאכותית שמבינה אותך",
    heroDesc: "משפרים את זרימת העבודה שלך עם טכנולוגיית AI מתקדמת.",
    whyChoose: "למה לבחור בנו?",
    provenResults: "תוצאות מוכחות ומצוינות אמינה",
    whyPara1: "המספרים מדברים בעד עצמם. ההיסטוריה שלנו במתן פתרונות AI יוצאי דופן זיכתה אותנו באמון החברות המובילות בעולם.",
    whyPara2: "מסטארטאפים ועד חברות Fortune 500, סיפקנו תוצאות מדידות שמניעות צמיחה, יעילות וחדשנות. המחויבות שלנו למצוינות משתקפת בכל פרויקט.",
    whyPara3: "עם טכנולוגיית AI מתקדמת, צוותי מומחים וגישה ממוקדת לקוח, אנו הופכים אתגרים מורכבים לפתרונות אלגנטיים. מערך הכלים והשירותים המקיף שלנו מבטיח שכל עסק, בכל גודל, יוכל לנצל את כוח הבינה המלאכותית להשגת מטרותיו.",
    readMore: "קרא עוד",
    impactNumber: "פרויקטי AI שהושקו",
    impactDesc: "מספקים פתרונות AI חדשניים לאוטומציה, אנליטיקה וטרנספורמציה דיגיטלית בענפים שונים.",
    transformTitle: "משנים תהליכי עבודה עם AI",
    transformDesc: "הפלטפורמה שלנו מאפשרת לצוותים לאוטומט תהליכים, לקבל תובנות בזמן אמת ולהגדיל פעילות בצורה מאובטחת. אמון עולמי באמינות ובשילוב ידידותי למשתמש.",
    leadEngineer: "מהנדס AI ראשי",
    stats: ["משתמשים פעילים", "לקוחות ארגוניים", "זמן פעילות", "אינטגרציות AI"],
    webinarsTitle: "וובינרים קרובים",
    register: "הרשמה",
    registerFor: "הרשמה ל-",
    regSuccess: "ההרשמה הצליחה! תודה שנרשמת.",
    coreBenefits: "יתרונות מרכזיים",
    coreDesc: "פתח את הפוטנציאל המלא של העסק שלך עם כלי ה-AI שלנו. חווה אינטגרציה חלקה, תובנות מעשיות ואוטומציה מוכנה לעתיד שמביאה תוצאות מדידות.",
    benefits: [
      { icon: thunder, title: "אוטומציה מיידית", desc: "אוטומט משימות חוזרות ותהליכים להגדלת פרודוקטיביות ולשחרור הצוות לעבודה יצירתית." },
      { icon: search, title: "תובנות חכמות", desc: "נתח נתונים מורכבים וקבל המלצות מעשיות לקבלת החלטות חכמות יותר." },
      { icon: lock, title: "אבטחת ארגונים", desc: "הגן על הנתונים והפעילות שלך עם תכונות אבטחה ועמידה בתקנים מתקדמות מבוססות AI." },
      { icon: rocket, title: "אינטגרציה ניתנת להרחבה", desc: "חבר בקלות כלי AI למערכות קיימות והרחב עם צמיחת העסק." }
    ],
    ctaTitle: "מוכן לשנות את זרימת העבודה שלך?",
    ctaDesc: "גלה את כוח כלי ה-AI וקח את הפרודוקטיביות שלך לשלב הבא. התחל את המסע שלך איתנו היום!",
    ctaBtn: "התחל עכשיו"
  }
};

const Home2 = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedWebinar, setSelectedWebinar] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
    useEffect(() => {
        const updateLanguage = () => setLanguage(localStorage.getItem("language") || "en");
        window.addEventListener("storage", updateLanguage);
        const interval = setInterval(updateLanguage, 500);
        return () => {
            window.removeEventListener("storage", updateLanguage);
            clearInterval(interval);
        };
    }, []);

    const handleRegisterClick = (webinar) => {
        setSelectedWebinar(webinar);
        setShowModal(true);
        setFormData({ name: "", email: "" });
        setSubmitted(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store registration in localStorage
        const registrations = JSON.parse(localStorage.getItem("webinarRegistrations") || "[]");
        registrations.push({ ...formData, webinar: selectedWebinar.title, date: selectedWebinar.date });
        localStorage.setItem("webinarRegistrations", JSON.stringify(registrations));
        setSubmitted(true);
    };
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path);
    }

    return (
        <>
            <section className="relative w-screen h-screen m-0 p-0">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={videohero}
                    autoPlay
                    loop
                    muted
                />
                {/* Overlay and Tagline */}
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-10 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{translations[language].heroTitle}</h1>
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{translations[language].heroDesc}</p>
                </div>
            </section>
           



            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Unified Panel, No Card */}
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">{translations[language].whyChoose}</h2>
                        <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">{translations[language].provenResults}</h3>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">{translations[language].whyPara1}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{translations[language].whyPara2}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{translations[language].whyPara3}</p>
                        <button className="bg-black text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-purple-700 transition w-fit" onClick={()=>handleGetStarted("/services")}>{translations[language].readMore}</button>
                    </div>
                    {/* Right Side: Updated Stats Content */}
                    <div className="flex flex-col gap-6 justify-center h-full">
                        {[{
                            num: 1,
                            heading: translations[language].benefits[0].title,
                            para: translations[language].benefits[0].desc
                        }, {
                            num: 2,
                            heading: translations[language].benefits[1].title,
                            para: translations[language].benefits[1].desc
                        }, {
                            num: 3,
                            heading: translations[language].benefits[2].title,
                            para: translations[language].benefits[2].desc
                        }, {
                            num: 4,
                            heading: translations[language].benefits[3].title,
                            para: translations[language].benefits[3].desc
                        }].map((item, idx) => (
                            <motion.div
                                key={item.num}
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-14 h-14 aspect-square rounded-full bg-black dark:bg-purple-700 flex items-center justify-center text-2xl font-bold text-white border border-purple-400 shadow text-center"
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    {item.num}
                                </motion.div>
                                <div>
                                    <motion.h4
                                        className="font-bold text-lg text-black dark:text-white mb-1"
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.18 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.heading}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 text-sm"
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.para}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/*client section*/}
            <section className="w-full py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col items-center">
                <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {/* Left: Impact Number */}
                    <div className="flex flex-col items-start justify-center md:col-span-1">
                        <span className="text-6xl font-extrabold text-purple-400 mb-2">75+</span>
                        <span className="text-2xl font-bold text-purple-200 mb-6">{translations[language].impactNumber}</span>
                        <p className="text-gray-300 text-lg">{translations[language].impactDesc}</p>
                    </div>
                    {/* Center: Description */}
                    <div className="flex flex-col justify-center md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{translations[language].transformTitle}</h3>
                        <p className="text-gray-300 mb-4">{translations[language].transformDesc}</p>
                        <div className="flex items-center gap-4 mt-6">
                            <img src={client1} alt="Team Member" className="w-16 h-16 rounded-full border-4 border-purple-400" />
                            <div>
                                <span className="font-bold text-white">Jordan Lee</span>
                                <div className="text-purple-300 text-sm">{translations[language].leadEngineer}</div>
                            </div>
                        </div>
                    </div>
                    {/* Right: Stats Grid */}
                    <div className="flex flex-col gap-6 md:col-span-1">
                        <div className="grid grid-cols-2 gap-6">
                            {translations[language].stats.map((stat, idx) => (
                              <div key={stat} className="bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-300 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                                <span className="text-3xl font-extrabold text-white mb-2">{["15K+", "300+", "99.99%", "60+"][idx]}</span>
                                <span className="text-lg text-purple-100 font-semibold">{stat}</span>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/*webinar section*/}
            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-3xl w-full mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-purple-700 dark:text-purple-300">{translations[language].webinarsTitle}</h2>
                    <div className="relative flex flex-col gap-12">
                        <div className="absolute left-7 top-0 h-full w-1 bg-purple-300 dark:bg-purple-700 rounded-full"></div>
                        {webinars.map((webinar, idx) => (
                            <motion.div
                                key={webinar.title}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 + idx * 0.15 }}
                                viewport={{ once: true }}
                                className="relative flex items-center gap-6"
                            >
                                <div className="z-10 w-14 h-14 aspect-square rounded-full bg-purple-700 flex items-center justify-center text-2xl font-bold text-white shadow-lg border-4 border-white dark:border-black">
                                    <img src={webinar.icon} alt={webinar.title} className="w-8 h-8 object-contain" />
                                </div>
                                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-purple-200 dark:border-purple-700 flex-1">
                                    <div className="text-purple-600 dark:text-purple-300 font-bold text-lg mb-2">{webinar.date}</div>
                                    <h3 className="font-bold text-xl mb-2 text-black dark:text-white">{webinar.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{webinar.desc}</p>
                                    <button className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-purple-800 transition" onClick={() => handleRegisterClick(webinar)}>{translations[language].register}</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Modal for registration form */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border-2 border-purple-300 dark:border-purple-700 relative">
                                <button className="absolute top-4 right-4 text-black dark:text-white text-2xl" onClick={() => setShowModal(false)}>&times;</button>
                                <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">{translations[language].registerFor}{selectedWebinar?.title}</h3>
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            required
                                            className="p-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email"
                                            required
                                            className="p-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                        <button type="submit" className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-purple-800 transition">{translations[language].register}</button>
                                    </form>
                                ) : (
                                    <div className="text-green-600 dark:text-green-400 font-bold text-lg text-center py-6">{translations[language].regSuccess}</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-6xl w-full mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black dark:text-white">{translations[language].coreBenefits}</h2>
                    <p className="text-lg text-center text-gray-700 dark:text-white mb-12 max-w-3xl mx-auto">{translations[language].coreDesc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {translations[language].benefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="rounded-2xl p-8 shadow-xl border-2 border-purple-400 bg-purple-500 flex flex-col items-center text-center hover:scale-105 transition-transform"
                            >
                                <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center text-3xl mb-4 text-white shadow-lg">
                                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                                </div>
                                <h3 className="font-bold text-xl text-white mb-2">{benefit.title}</h3>
                                <p className="text-white text-sm mb-2">{benefit.desc}</p>
                                <span className="block w-8 h-1 bg-purple-400 rounded-full mt-4 animate-pulse"></span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
                         {/* CTA Section */}
            <section
                className="w-full py-20 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-900  flex flex-col items-center relative overflow-hidden"
                style={{
                    backgroundImage: `url(${backcta})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
                <div className="max-w-2xl w-full mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{translations[language].ctaTitle}</h2>
                    <p className="text-lg text-purple-200 mb-8">{translations[language].ctaDesc}</p>
                    <button className="bg-white text-purple-700 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-purple-200 transition-all text-xl" onClick={()=>handleGetStarted("/contact")}>{translations[language].ctaBtn}</button>
                </div>
            </section>
        </>
    );
}
export default Home2;


