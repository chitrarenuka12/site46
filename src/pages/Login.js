import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginback from '../images/login-back.jpg';
import logo from '../images/logo.png';

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
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginback})` }}>
      <div className="w-full max-w-lg bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-purple-400 border-opacity-50 mx-4">
        {/* Language Dropdown */}
        <div className="w-full flex justify-end mb-4">
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="p-2 rounded-lg border border-purple-400 bg-white text-black font-semibold shadow-md"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="he">עברית</option>
          </select>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center mb-4">
          <img 
            src={logo} 
            alt="STACKLY Logo" 
            className="h-16 w-auto bg-white rounded-xl p-2 shadow-lg"
          />
        </div>

        {/* Welcome Text */}
        <p className="mb-6 text-white text-center text-lg font-medium">
          {t.loginDesc}
        </p>

        {!isForgotPassword ? (
          <>
            {isLogin ? (
              <form
                onSubmit={handleLoginSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-white font-semibold text-sm">
                    {t.username} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                    type="email"
                    name="email"
                    placeholder={t.username}
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-white font-semibold text-sm">
                    {t.password} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                    type="password"
                    name="password"
                    placeholder={t.password}
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <p
                  className="text-right text-white cursor-pointer text-sm font-bold hover:text-purple-300 transition-colors duration-300"
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
                  className="bg-purple-600 text-white font-bold border-none p-3 rounded-lg mt-2 transition-all duration-300 hover:bg-purple-700 hover:shadow-lg transform hover:scale-105"
                >
                  {t.loginBtn}
                </button>
                <p className="text-white mt-3 text-center font-semibold">
                  Don't have an account? {" "}
                  <span
                    className="cursor-pointer text-purple-300 hover:text-purple-200 transition-colors duration-300 underline"
                    onClick={() => {
                      setError("");
                      setIsLogin(false);
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            ) : (
              <form
                onSubmit={handleSignUpSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-white font-semibold text-sm">
                    {t.firstName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                    type="text"
                    name="firstName"
                    placeholder={t.firstName}
                    value={signUpData.firstName}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-white font-semibold text-sm">
                    {t.lastName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                    type="text"
                    name="lastName"
                    placeholder={t.lastName}
                    value={signUpData.lastName}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-white font-semibold text-sm">
                    {t.username} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                    type="email"
                    name="email"
                    placeholder={t.username}
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-white font-semibold text-sm">
                    {t.password} <span className="text-red-400">*</span>
                  </label>
                  <input
                    className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                    type="password"
                    name="password"
                    placeholder={t.password}
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-bold border-none p-3 rounded-lg mt-2 transition-all duration-300 hover:bg-purple-700 hover:shadow-lg transform hover:scale-105"
                >
                  {t.signupBtn}
                </button>
                <p className="text-white mt-3 text-center font-semibold">
                  Already have an account? {" "}
                  <span
                    className="cursor-pointer text-purple-300 hover:text-purple-200 transition-colors duration-300 underline"
                    onClick={() => {
                      setError("");
                      setIsLogin(true);
                    }}
                  >
                    Login
                  </span>
                </p>
              </form>
            )}
            {error && (
              <p className="text-red-400 mt-3 font-bold text-center bg-red-100 bg-opacity-20 p-2 rounded-lg">
                {error}
              </p>
            )}
            {resetMessage && (
              <p className="text-green-400 mt-3 font-bold text-center bg-green-100 bg-opacity-20 p-2 rounded-lg">
                {resetMessage}
              </p>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300 text-center">
              {t.resetTitle}
            </h2>
            <form
              onSubmit={handleForgotPasswordSubmit}
              className="w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <label className="text-white font-semibold text-sm">
                  {t.resetPlaceholder} <span className="text-red-400">*</span>
                </label>
                <input
                  className="p-3 text-base border border-purple-400 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-white text-black shadow-md transition-all duration-300"
                  type="email"
                  placeholder={t.resetPlaceholder}
                  value={forgotEmail}
                  onChange={handleForgotPasswordChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white font-bold border-none p-3 rounded-lg mt-2 transition-all duration-300 hover:bg-purple-700 hover:shadow-lg transform hover:scale-105"
              >
                {t.sendReset}
              </button>
              <p className="text-purple-300 mt-3 text-center font-semibold">
                <span
                  className="cursor-pointer hover:text-white transition-colors duration-300 underline"
                  onClick={() => {
                    setError("");
                    setResetMessage("");
                    setIsForgotPassword(false);
                  }}
                >
                  {t.backToLogin}
                </span>
              </p>
            </form>
            {error && (
              <p className="text-red-400 mt-3 font-bold text-center bg-red-100 bg-opacity-20 p-2 rounded-lg">
                {error}
              </p>
            )}
            {resetMessage && (
              <p className="text-green-400 mt-3 font-bold text-center bg-green-100 bg-opacity-20 p-2 rounded-lg">
                {resetMessage}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;