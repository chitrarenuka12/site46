import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../images/logo.png"; // ✅ Import logo properly

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact Us",
    logout: "Logout",
  },
  ar: {
    home: "الرئيسية",
    about: "معلومات عنا",
    services: "الخدمات",
    blog: "مدونة",
    contact: "اتصل بنا",
    logout: "تسجيل خروج",
  },
  he: {
    home: "בית",
    about: "עלינו",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    logout: "התנתק",
  },
};

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user initials
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find((user) => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial =
        currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial =
        currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Responsive nav close
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  useEffect(() => {
    if (language === "ar" || language === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }));
    localStorage.setItem("language", language);
  }, [language]);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      const main = document.querySelector('main');
      if (main) main.scrollTop = 0;
    }, 0);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      const main = document.querySelector('main');
      if (main) main.scrollTop = 0;
    }, 0);
  };

  const getActiveLink = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/home1" ||
      location.pathname === "/home2"
    )
      return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/chatbots",
        "/smartsearch",
        "/contentgen",
        "/data-analytics",
        "/design-intelligence",
        "/enterprise-management",
        "/security-solutions",
        "/services"
      ].includes(location.pathname)
    )
      return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => setAvatarDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="fixed top-0  left-0 w-full bg-white dark:bg-black text-black dark:text-gray-100 flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700 z-50">
      {/* Logo */}
      <nav className="flex-shrink-0">
        <Link to="/home1">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </nav>

      {/* Hamburger (mobile only) */}
      <button
        className={`md:hidden flex flex-col gap-1.5 ${
          mobileNavOpen ? "open" : ""
        }`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="w-6 h-0.5 bg-current transition-all"></span>
        <span className="w-6 h-0.5 bg-current transition-all"></span>
        <span className="w-6 h-0.5 bg-current transition-all"></span>
      </button>

      {/* Nav Links */}
      <nav
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-black md:bg-transparent px-6 py-4 md:p-0 shadow md:shadow-none`}
      >
        {/* Home */}
        <div className="relative">
          <span
            className={`cursor-pointer font-medium ${
              activeLink === "home" ? "text-purple-700 dark:text-purple-400" : ""
            }`}
            onClick={() => handleMainClick("home1")}
          >
            {translations[language].home}
          </span>
          <span
            className="ml-1 text-xs cursor-pointer"
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="absolute left-0 mt-2 flex flex-col bg-gray-100 dark:bg-gray-800 rounded shadow-md min-w-[160px] z-50">
              <Link
                to="/home1"
                onClick={handleLinkClick}
                className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  location.pathname === "/home1" ? "text-purple-700 dark:text-purple-400 font-bold" : ""
                }`}
              >
                Home1
              </Link>
              <Link
                to="/home2"
                onClick={handleLinkClick}
                className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  location.pathname === "/home2" ? "text-purple-700 dark:text-purple-400 font-bold" : ""
                }`}
              >
                Home 2
              </Link>
            </div>
          )}
        </div>

        {/* About */}
        <Link
          to="/about"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "about" ? "text-purple-700 dark:text-purple-400" : ""
          }`}
        >
          {translations[language].about}
        </Link>

        {/* Services */}
        <div className="relative">
          <span
            className={`cursor-pointer font-medium ${
              activeLink === "services" ? "text-purple-700 dark:text-purple-400" : ""
            }`}
            onClick={() => handleMainClick("services")}
          >
            {translations[language].services}
          </span>
          <span
            className="ml-1 text-xs cursor-pointer"
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="absolute left-0 mt-2 flex flex-col bg-gray-100 dark:bg-gray-800 rounded shadow-md min-w-[200px] z-50">
              {[
                { to: "/chatbots", label: "Chatbots" },
                { to: "/smartsearch", label: "Smart Search" },
                { to: "/contentgen", label: "Content Generation" },
                { to: "/data-analytics", label: "Data Analytics" },
                { to: "/design-intelligence", label: "Design Intelligence" },
                { to: "/security-solutions", label: "Security Solutions" },
                { to: "/services", label: "Services" }
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleLinkClick}
                  className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    location.pathname === item.to ? "text-purple-700 dark:text-purple-400 font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Blog */}
        <Link
          to="/blog"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "blog" ? "text-purple-700 dark:text-purple-400" : ""
          }`}
        >
          {translations[language].blog}
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "contact" ? "text-purple-700 dark:text-purple-400" : ""
          }`}
        >
          {translations[language].contact}
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-2 py-1 mr-2 bg-white dark:bg-gray-800 text-black dark:text-white"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="he">עברית</option>
        </select>
        {/* Theme Toggle with emoji */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center text-2xl"
        >
          {isDark ? "🌞" : "🌙"}
        </button>

        {/* Avatar */}
        <div ref={avatarRef} className="relative">
          <div
            className="w-10 h-10 bg-blue-800 text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
            onClick={toggleAvatarDropdown}
          >
            {initials || "AD"}
          </div>
          {avatarDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md min-w-[120px] z-50">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {translations[language].logout}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
