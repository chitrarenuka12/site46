import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vision from "../images/ai-vision.jpg"; // Replace with your actual image file path
// Replace with your actual video file path
import aboutvideo from "../images/hero-aboutai.mp4";
import { useNavigate } from "react-router-dom";
import expert1 from "../images/expert1.jpg"; // Replace with actual image paths
import expert2 from "../images/expert2.jpg";
import expert3 from "../images/expert3.jpg";  
import innovation from "../images/innovation.png"; // New import for innovation image
import brain from "../images/brain.png"; // New import for brain image
import worldwide from "../images/worldwide.png"; // New import for worldwide image
import rocket from "../images/rocket.png"; // New import for rocket image
import robot from "../images/robot.png"; // New import for robot image
import scale from "../images/scale.png"; // New import for scale image
import officebuilding from "../images/office-building.png"; // New import for office building image  
import pioneer from "../images/dna.png"
const translations = {
  en: {
    taglineTitle: "Empowering Innovation with AI",
    taglineDesc: "Discover our journey, mission, and the experts behind the vision.",
    missionTitle: "Our Mission",
    missionDesc: "We strive to foster a future where AI empowers creativity, collaboration, and ethical progress. Our mission is to build tools that inspire, connect, and elevate every user’s potential.",
    missionCards: [
      { icon: worldwide, title: "Global Collaboration", desc: "Connect teams and ideas across borders for breakthrough innovation." },
      { icon: innovation, title: "Creative Intelligence", desc: "Unleash new possibilities with AI-powered design and ideation." },
      { icon: brain, title: "Continuous Learning", desc: "Empower users to grow and adapt with smart, evolving tools." }
    ],
    visionTitle: "Our Vision",
    visionDesc: "We are committed to shaping a future where AI is a creative partner, driving ethical progress and empowering every person and organization to achieve more. Our vision is to build intelligent tools that inspire innovation, foster collaboration, and unlock new possibilities for all. To revolutionize the world of content creation by harnessing the power of AI, delivering seamless and effortless solutions that empower individuals and businesses to effortlessly generate, enhance, and transform their content.",
    storyTitle: "Our Story",
    storyDesc: "From a small team of dreamers to a global leader in AI tools, our journey has been defined by innovation, collaboration, and a relentless pursuit of excellence. Every milestone reflects our commitment to empowering people and organizations with intelligent technology.",
    storySteps: [
      { icon: rocket, year: "2020", text: "Launched our first AI platform" },
      { icon: robot, year: "2021", text: "Introduced smart automation tools" },
      { icon: worldwide, year: "2022", text: "Expanded to global markets" },
      { icon: scale, year: "2023", text: "Started AI ethics initiative" },
      { icon: officebuilding, year: "2024", text: "Delivered enterprise AI solutions" },
      { icon: pioneer, year: "2025", text: "Pioneered quantum AI" }
    ],
    teamTitle: "Our Expert Team",
    teamDesc: "Meet the minds driving our AI innovation. Our diverse team blends expertise in machine learning, design, engineering, and ethics to deliver world-class solutions.",
    teamMembers: [
      { name: "Dr. Maya Patel", role: "Chief AI Scientist", img: expert1 },
      { name: "Alex Kim", role: "Lead ML Engineer", img: expert2 },
      { name: "Sara Lee", role: "Product Designer", img: expert3 }
    ],
    ctaTitle: "Ready to Transform Your Workflow?",
    ctaDesc: "Join thousands of innovators using our AI tools to boost productivity, creativity, and collaboration. Start your journey today!",
    ctaBtn: "Get Started"
  },
  ar: {
    taglineTitle: "تمكين الابتكار بالذكاء الاصطناعي",
    taglineDesc: "اكتشف رحلتنا، مهمتنا، والخبراء وراء الرؤية.",
    missionTitle: "مهمتنا",
    missionDesc: "نسعى لتعزيز مستقبل يمكّن فيه الذكاء الاصطناعي الإبداع والتعاون والتقدم الأخلاقي. مهمتنا هي بناء أدوات تلهم وتربط وترتقي بإمكانات كل مستخدم.",
    missionCards: [
      { icon: worldwide, title: "التعاون العالمي", desc: "ربط الفرق والأفكار عبر الحدود لتحقيق ابتكار رائد." },
      { icon: innovation, title: "الذكاء الإبداعي", desc: "اكتشف إمكانيات جديدة مع التصميم والأفكار المدعومة بالذكاء الاصطناعي." },
      { icon: brain, title: "التعلم المستمر", desc: "مكّن المستخدمين من النمو والتكيف مع أدوات ذكية ومتطورة." }
    ],
    visionTitle: "رؤيتنا",
    visionDesc: "نلتزم بتشكيل مستقبل يكون فيه الذكاء الاصطناعي شريكًا إبداعيًا، يدفع التقدم الأخلاقي ويمكّن كل شخص ومنظمة لتحقيق المزيد. رؤيتنا هي بناء أدوات ذكية تلهم الابتكار وتعزز التعاون وتفتح إمكانيات جديدة للجميع. ثورة في عالم إنشاء المحتوى من خلال تسخير قوة الذكاء الاصطناعي وتقديم حلول سلسة تمكّن الأفراد والشركات من إنشاء وتحسين وتحويل المحتوى بسهولة.",
    storyTitle: "قصتنا",
    storyDesc: "من فريق صغير من الحالمين إلى قائد عالمي في أدوات الذكاء الاصطناعي، كانت رحلتنا مليئة بالابتكار والتعاون والسعي المستمر للتميز. كل إنجاز يعكس التزامنا بتمكين الناس والمنظمات بالتكنولوجيا الذكية.",
    storySteps: [
      { icon: rocket, year: "2020", text: "إطلاق أول منصة ذكاء اصطناعي" },
      { icon: robot, year: "2021", text: "تقديم أدوات الأتمتة الذكية" },
      { icon: worldwide, year: "2022", text: "التوسع للأسواق العالمية" },
      { icon: scale, year: "2023", text: "بدء مبادرة أخلاقيات الذكاء الاصطناعي" },
      { icon: officebuilding, year: "2024", text: "تقديم حلول ذكاء اصطناعي للمؤسسات" },
      { icon: pioneer, year: "2025", text: "ريادة الذكاء الاصطناعي الكمومي" }
    ],
    teamTitle: "فريق الخبراء لدينا",
    teamDesc: "تعرف على العقول التي تقود ابتكار الذكاء الاصطناعي لدينا. يجمع فريقنا بين الخبرة في التعلم الآلي، التصميم، الهندسة، والأخلاقيات لتقديم حلول عالمية المستوى.",
    teamMembers: [
      { name: "د. مايا باتيل", role: "عالمة الذكاء الاصطناعي الرئيسية", img: expert1 },
      { name: "أليكس كيم", role: "مهندس تعلم آلي رئيسي", img: expert2 },
      { name: "سارة لي", role: "مصممة المنتجات", img: expert3 }
    ],
    ctaTitle: "هل أنت مستعد لتحويل سير عملك؟",
    ctaDesc: "انضم إلى آلاف المبتكرين الذين يستخدمون أدوات الذكاء الاصطناعي لدينا لتعزيز الإنتاجية والإبداع والتعاون. ابدأ رحلتك اليوم!",
    ctaBtn: "ابدأ الآن"
  },
  he: {
    taglineTitle: "העצמת חדשנות עם AI",
    taglineDesc: "גלו את המסע שלנו, המשימה והמומחים מאחורי החזון.",
    missionTitle: "המש mission שלנו",
    missionDesc: "אנו שואפים לקדם עתיד שבו AI מעצים יצירתיות, שיתוף פעולה והתקדמות אתית. המש mission שלנו היא לבנות כלים שמעניקים השראה, מחברים ומעצימים את הפוטנציאל של כל משתמש.",
    missionCards: [
      { icon: worldwide, title: "שיתוף פעולה גלובלי", desc: "חברו צוותים ורעיונות מעבר לגבולות לחדשנות פורצת דרך." },
      { icon: innovation, title: "אינטליגנציה יצירתית", desc: "פתחו אפשרויות חדשות עם עיצוב ורעיונות מבוססי AI." },
      { icon: brain, title: "למידה מתמשכת", desc: "העצימו משתמשים לצמוח ולהסתגל עם כלים חכמים ומתפתחים." }
    ],
    visionTitle: "החזון שלנו",
    visionDesc: "אנו מחויבים לעצב עתיד שבו AI הוא שותף יצירתי, מקדם התקדמות אתית ומעצים כל אדם וארגון להשיג יותר. החזון שלנו הוא לבנות כלים חכמים שמעוררים חדשנות, מעודדים שיתוף פעולה ופותחים אפשרויות חדשות לכולם. מהפכה בעולם יצירת התוכן באמצעות כוח ה-AI, פתרונות חלקים שמאפשרים לכל אחד ליצור, לשפר ולהפוך תוכן בקלות.",
    storyTitle: "הסיפור שלנו",
    storyDesc: "מצוות קטן של חולמים למוביל עולמי בכלי AI, המסע שלנו הוגדר על ידי חדשנות, שיתוף פעולה ושאיפה מתמדת למצוינות. כל אבן דרך משקפת את המחויבות שלנו להעצים אנשים וארגונים עם טכנולוגיה חכמה.",
    storySteps: [
      { icon: rocket, year: "2020", text: "השקנו את פלטפורמת ה-AI הראשונה שלנו" },
      { icon: robot, year: "2021", text: "הצגנו כלי אוטומציה חכמים" },
      { icon: worldwide, year: "2022", text: "התרחבות לשווקים גלובליים" },
      { icon: scale, year: "2023", text: "התחלנו יוזמת אתיקה ב-AI" },
      { icon: officebuilding, year: "2024", text: "סיפקנו פתרונות AI לארגונים" },
      { icon: pioneer, year: "2025", text: "חלוצי AI קוונטי" }
    ],
    teamTitle: "צוות המומחים שלנו",
    teamDesc: "הכירו את המוחות שמובילים את החדשנות שלנו ב-AI. הצוות המגוון שלנו משלב מומחיות בלמידת מכונה, עיצוב, הנדסה ואתיקה כדי לספק פתרונות ברמה עולמית.",
    teamMembers: [
      { name: 'ד"ר מאיה פאטל', role: "מדענית AI ראשית", img: expert1 },
      { name: "אלכס קים", role: "מהנדס ML ראשי", img: expert2 },
      { name: "שרה לי", role: "מעצבת מוצר", img: expert3 }
    ],
    ctaTitle: "מוכנים לשנות את זרימת העבודה שלכם?",
    ctaDesc: "הצטרפו לאלפי חדשנים המשתמשים בכלי ה-AI שלנו כדי להעצים פרודוקטיביות, יצירתיות ושיתוף פעולה. התחילו את המסע שלכם היום!",
    ctaBtn: "התחל"
  }
};

export default function AboutUs() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const navigate = useNavigate();

  useEffect(() => {
    const updateLanguage = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("storage", updateLanguage);
    const interval = setInterval(updateLanguage, 500);
    return () => {
      window.removeEventListener("storage", updateLanguage);
      clearInterval(interval);
    };
  }, []);

  const handleGetStarted = (path) => {
    navigate(path);
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* 1. Background Video + Tagline */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={aboutvideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg text-center"
          >
            {translations[language].taglineTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-center"
          >
            {translations[language].taglineDesc}
          </motion.p>
        </div>
      </section>

      {/* Mission Section - AI Tools Theme */}
      <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
        <div className="max-w-4xl w-full mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-700 dark:text-purple-300"
          >
            {translations[language].missionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-white mb-8"
          >
            {translations[language].missionDesc}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {translations[language].missionCards.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 shadow-xl border border-purple-400 backdrop-blur-lg bg-white/60 dark:bg-black/60 flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-purple-700 text-white flex items-center justify-center text-3xl mb-4 shadow-lg">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-purple-700 dark:text-purple-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - True 50/50 Split (Image | Content) */}
      <section className="w-full py-5 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-black">
          {/* Left: Image (50%) */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-black">
            <img src={vision} alt="AI Vision" className="w-full h-full object-cover" />
          </div>
          {/* Right: Content (50%) */}
          <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center px-10 py-8">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-purple-700 dark:text-purple-300">{translations[language].visionTitle}</h2>
            <p className="text-xl text-justify text-gray-700 dark:text-gray-200 mb-8 max-w-xl">{translations[language].visionDesc}</p>
            
          </div>
        </div>
      </section>

      {/* Our Story Section - AI Tools, Horizontal Stepper */}
      <section className="w-full py-10 flex flex-col items-center bg-purple-50 dark:bg-black ">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-10 text-center text-purple-700 dark:text-purple-300"
        >
          {translations[language].storyTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-700 dark:text-gray-200 mb-16 text-center max-w-3xl"
        >
          {translations[language].storyDesc}
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-5xl mx-auto px-2">
          {translations[language].storySteps.map((item, idx, arr) => (
            <React.Fragment key={item.year}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
                viewport={{ once: true }}
                className="flex flex-col items-center w-full md:w-auto"
              >
                <span className="text-4xl text-purple-700 dark:text-purple-300 mb-2">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                </span>
                <span className="text-lg text-black dark:text-white font-semibold mb-1">{item.year}</span>
                <span className="text-base text-gray-700 dark:text-gray-200 text-center">{item.text}</span>
              </motion.div>
              {idx < arr.length - 1 && (
                <>
                  {/* Horizontal connector for desktop, vertical for mobile */}
                  <div className="hidden md:block w-16 h-1 bg-purple-300 dark:bg-purple-700 mx-2 rounded-full"></div>
                  <div className="block md:hidden w-1 h-8 bg-purple-300 dark:bg-purple-700 my-2 rounded-full"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Expert Team Section - AI Tools */}
      <section className="w-full py-10 flex flex-col items-center ">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-purple-700 dark:text-purple-300"
        >
          {translations[language].teamTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-700 dark:text-gray-200 mb-14 text-center max-w-2xl"
        >
          {translations[language].teamDesc}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
          {translations[language].teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-purple-200 dark:border-purple-700 hover:scale-105 transition-transform"
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-purple-300 dark:border-purple-500 shadow-lg" />
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-1">{member.name}</h3>
              <span className="text-base text-gray-700 dark:text-gray-200 mb-2">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - AI Tools */}
      <section className="w-full py-24 flex items-center justify-center bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 relative">
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
          >
            {translations[language].ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-10 max-w-2xl"
          >
            {translations[language].ctaDesc}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white text-purple-700 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-purple-700 hover:text-white transition-all text-lg" onClick={()=>handleGetStarted("/contact")}
          >
            {translations[language].ctaBtn}
          </motion.button>
        </div>
      </section>
    </div>
  );
}
