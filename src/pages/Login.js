import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginback from '../images/login-back.jpg';

const translations = {
  en: {
    welcome: "Welcome to ",
    register: "Register at ",
    stackly: "STACKLY",
    loginDesc: "Welcome back, Please login into an account",
    username: "Your Username",
    password: "Enter Password",
    forgot: "Forgot password?",
    loginBtn: "Login",
    signupPrompt: "Don't have an account? Sign Up",
    signupBtn: "Sign Up",
    alreadyPrompt: "Already have an account? Login",
    firstName: "First Name",
    lastName: "Last Name",
    resetTitle: "Reset Password",
    resetPlaceholder: "Enter your registered email",
    sendReset: "Send Reset Link",
    backToLogin: "Back to Login",
    invalid: "Invalid email or password.",
    exists: "User already exists with this email.",
    signupSuccess: "Signup successful! Please login.",
    noUser: "No user found with this email.",
    resetMsg: "User found. Please check your email for password reset instructions. (Simulation)"
  },
  ar: {
    welcome: "مرحبًا في ",
    register: "سجل في ",
    stackly: "STACKLY",
    loginDesc: "مرحبًا بعودتك، يرجى تسجيل الدخول إلى حسابك",
    username: "اسم المستخدم",
    password: "أدخل كلمة المرور",
    forgot: "نسيت كلمة المرور؟",
    loginBtn: "تسجيل الدخول",
    signupPrompt: "ليس لديك حساب؟ سجل الآن",
    signupBtn: "سجل",
    alreadyPrompt: "لديك حساب بالفعل؟ تسجيل الدخول",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    resetTitle: "إعادة تعيين كلمة المرور",
    resetPlaceholder: "أدخل بريدك الإلكتروني المسجل",
    sendReset: "إرسال رابط إعادة التعيين",
    backToLogin: "العودة لتسجيل الدخول",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    exists: "يوجد مستخدم بهذا البريد الإلكتروني.",
    signupSuccess: "تم التسجيل بنجاح! يرجى تسجيل الدخول.",
    noUser: "لا يوجد مستخدم بهذا البريد الإلكتروني.",
    resetMsg: "تم العثور على المستخدم. يرجى التحقق من بريدك الإلكتروني لإعادة تعيين كلمة المرور. (محاكاة)"
  },
  he: {
    welcome: "ברוך הבא ל",
    register: "הירשם ב",
    stackly: "STACKLY",
    loginDesc: "ברוך שובך, אנא התחבר לחשבון שלך",
    username: "שם משתמש",
    password: "הזן סיסמה",
    forgot: "שכחת סיסמה?",
    loginBtn: "התחבר",
    signupPrompt: "אין לך חשבון? הירשם",
    signupBtn: "הירשם",
    alreadyPrompt: "יש לך חשבון? התחבר",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    resetTitle: "איפוס סיסמה",
    resetPlaceholder: "הזן את האימייל הרשום שלך",
    sendReset: "שלח קישור איפוס",
    backToLogin: "חזרה להתחברות",
    invalid: "אימייל או סיסמה שגויים.",
    exists: "משתמש כבר קיים עם אימייל זה.",
    signupSuccess: "ההרשמה הצליחה! אנא התחבר.",
    noUser: "לא נמצא משתמש עם אימייל זה.",
    resetMsg: "משתמש נמצא. בדוק את האימייל שלך להוראות איפוס סיסמה. (סימולציה)"
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language] || translations["en"];
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = (language === "ar" || language === "he") ? "rtl" : "ltr";
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }));
  }, [language]);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (loginData.email === "admin@enkonix.in" && loginData.password === "admin123") {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[loginData.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/admin");
      return;
    }

    const user = users.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      setError("");
      localStorage.setItem("loggedInUserEmail", user.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[user.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/home1");
    } else {
      setError(t.invalid);
    }
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError(t.exists);
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert(t.signupSuccess);
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  const handleForgotPasswordChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === forgotEmail);

    if (!user) {
      setError(t.noUser);
      setResetMessage("");
    } else {
      setError("");
      setResetMessage(t.resetMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center pt-16" style={{ backgroundImage: `url(${loginback})` }}>
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-purple-500 border-opacity-40">
        {/* Language Dropdown */}
        <div className="w-full flex justify-end mb-4">
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="p-2 rounded border border-purple-400 bg-white text-black font-bold"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="he">עברית</option>
          </select>
        </div>
        {!isForgotPassword ? (
          <>
            <h1 className="text-3xl font-bold text-purple-600 mb-2">
              {isLogin ? t.welcome : t.register}
              <span className="text-black">{t.stackly}</span>
            </h1>
            <p className="mb-6 text-white">
              {t.loginDesc}
            </p>
            {isLogin ? (
              <form
                onSubmit={handleLoginSubmit}
                className="w-full flex flex-col gap-4"
              >
                <input
                  className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                  type="email"
                  name="email"
                  placeholder={t.username}
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
                <input
                  className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                  type="password"
                  name="password"
                  placeholder={t.password}
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <p
                  className="text-right text-white cursor-pointer text-sm font-bold mt-[-10px]"
                  onClick={() => {
                    setError("");
                    setIsForgotPassword(true);
                    setResetMessage("");
                  }}
                >
                  {t.forgot}
                </p>
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-bold border-none p-3 rounded mt-2 transition-colors duration-300 hover:bg-purple-800"
                >
                  {t.loginBtn}
                </button>
                <p
                  className="cursor-pointer text-white mt-4 text-center font-bold"
                  onClick={() => {
                    setError("");
                    setIsLogin(false);
                  }}
                >
                  {t.signupPrompt}
                </p>
              </form>
            ) : (
              <form
                onSubmit={handleSignUpSubmit}
                className="w-full flex flex-col gap-4"
              >
                <input
                  className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                  type="text"
                  name="firstName"
                  placeholder={t.firstName}
                  value={signUpData.firstName}
                  onChange={handleSignUpChange}
                  required
                />
                <input
                  className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                  type="text"
                  name="lastName"
                  placeholder={t.lastName}
                  value={signUpData.lastName}
                  onChange={handleSignUpChange}
                  required
                />
                <input
                  className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                  type="email"
                  name="email"
                  placeholder={t.username}
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  required
                />
                <input
                  className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                  type="password"
                  name="password"
                  placeholder={t.password}
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-bold border-none p-3 rounded mt-2 transition-colors duration-300 hover:bg-purple-800"
                >
                  {t.signupBtn}
                </button>
                <p
                  className="cursor-pointer text-white mt-4 text-center font-bold"
                  onClick={() => {
                    setError("");
                    setIsLogin(true);
                  }}
                >
                  {t.alreadyPrompt}
                </p>
              </form>
            )}
            {error && <p className="text-purple-500 mt-2 font-bold">{error}</p>}
            {resetMessage && (
              <p className="text-purple-500 mt-2 font-bold">{resetMessage}</p>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-purple-600">
              {t.resetTitle}
            </h2>
            <form
              onSubmit={handleForgotPasswordSubmit}
              className="w-full flex flex-col gap-4"
            >
              <input
                className="p-3 text-base border border-purple-400 rounded focus:outline-none focus:border-purple-600 bg-white text-black"
                type="email"
                placeholder={t.resetPlaceholder}
                value={forgotEmail}
                onChange={handleForgotPasswordChange}
                required
              />
              <button
                type="submit"
                className="bg-purple-600 text-white font-bold border-none p-3 rounded mt-2 transition-colors duration-300 hover:bg-purple-800"
              >
                {t.sendReset}
              </button>
              <p
                className="cursor-pointer text-purple-600 mt-4 text-center font-bold"
                onClick={() => {
                  setError("");
                  setResetMessage("");
                  setIsForgotPassword(false);
                }}
              >
                {t.backToLogin}
              </p>
            </form>
            {error && <p className="text-purple-500 mt-2 font-bold">{error}</p>}
            {resetMessage && (
              <p className="text-purple-500 mt-2 font-bold">{resetMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;