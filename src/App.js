import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./compentents/Header";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Chatbots from "./pages/Chatbots";
import SmartSearch from "./pages/SmartSearch";
import ContentGen from "./pages/ContentGen";
import DataAnalytics from "./pages/DataAnalytics";
import DesignIntelligence from "./pages/DesignIntelligence";
import SecuritySolutions from "./pages/SecuritySolutions";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./compentents/Footer";
import ScrollToTop from './compentents/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  // Check if current path is login or /login
  const isLoginPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {!isLoginPage && <Header toggleTheme={toggleTheme} isDark={isDark} />}
      <ScrollToTop />
      <main className="p-0 m-0">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/chatbots" element={<Chatbots />} />
          <Route path="/smartsearch" element={<SmartSearch />} />
          <Route path="/contentgen" element={<ContentGen />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/design-intelligence" element={<DesignIntelligence />} />
          <Route path="/security-solutions" element={<SecuritySolutions />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        {!isLoginPage && <Footer />}
      </main>
    </div>
  );
}

export default App;
