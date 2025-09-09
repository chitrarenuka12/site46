import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useLocation } from "react-router-dom";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LoginBarChart = ({ loginData, setLoginData }) => {
  // Function to simulate a login (for demonstration)
  const simulateLogin = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];

    setLoginData(prevData => ({
      ...prevData,
      [today]: prevData[today] + 1
    }));
  };

  // Chart configuration
  const chartData = {
    labels: Object.keys(loginData),
    datasets: [
      {
        label: 'Number of Logins',
        data: Object.values(loginData),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Logins by Day of the Week',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Login Analytics</h2>
      <div className="h-80">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="mt-6">
        <button
          onClick={simulateLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Simulate Login (Demo)
        </button>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>This chart displays login data stored in your browser's local storage.</p>
        <p>Click the button to simulate a login for the current day.</p>
      </div>
    </div>
  );
};

const translations = {
  en: {
    emailDomain: "Email Domain Stats",
    domain: "Domain",
    userCount: "User Count",
    noDomain: "No domain data found.",
    loginsWeek: "Logins This Week",
    day: "Day",
    loginCount: "Login Count"
  },
  ar: {
    emailDomain: "إحصائيات نطاق البريد الإلكتروني",
    domain: "النطاق",
    userCount: "عدد المستخدمين",
    noDomain: "لا توجد بيانات نطاق.",
    loginsWeek: "تسجيلات الدخول هذا الأسبوع",
    day: "اليوم",
    loginCount: "عدد الدخول"
  },
  he: {
    emailDomain: "סטטיסטיקת דומיין אימייל",
    domain: "דומיין",
    userCount: "מספר משתמשים",
    noDomain: "לא נמצאו נתוני דומיין.",
    loginsWeek: "כניסות השבוע",
    day: "יום",
    loginCount: "מספר כניסות"
  }
};

const AdminDashboard = () => {
  const [loginData, setLoginData] = useState({
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0
  });
  
  const [logins, setLogins] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, loginsToday: 0 });
  const [recentLogins, setRecentLogins] = useState([]);
  const [mostActiveUsers, setMostActiveUsers] = useState([]);
  const [emailDomains, setEmailDomains] = useState([]);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
 
  const t = translations[language] || translations["en"];

  // Initialize chart data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('loginData');
    if (storedData) {
      setLoginData(JSON.parse(storedData));
    }
  }, []);

  // Update localStorage when loginData changes
  useEffect(() => {
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }, [loginData]);

  useEffect(() => {
    // Get login data from localStorage
    const userLogins = JSON.parse(localStorage.getItem("userLogins")) || {};
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Section 4: Most Active Users (top 5 by login count)
    const userLoginCounts = {};
    Object.entries(userLogins).forEach(([email]) => {
      userLoginCounts[email] = (userLoginCounts[email] || 0) + 1;
    });
    const activeUsersList = users.map(u => ({
      username: `${u.firstName} ${u.lastName}`,
      email: u.email,
      count: userLoginCounts[u.email] || 0
    })).sort((a, b) => b.count - a.count).slice(0, 5);
    setMostActiveUsers(activeUsersList);

    // Section 5: Email Domain Stats
    const domainCounts = {};
    users.forEach(u => {
      const domain = u.email.split('@')[1] || 'unknown';
      domainCounts[domain] = (domainCounts[domain] || 0) + 1;
    });
    setEmailDomains(Object.entries(domainCounts).map(([domain, count]) => ({ domain, count })));

    // Map email to username and login time
    const loginRows = Object.entries(userLogins)
      .filter(([email]) => users.some(u => u.email === email))
      .map(([email, loginTime]) => {
        const user = users.find(u => u.email === email);
        return {
          username: user ? `${user.firstName} ${user.lastName}` : "Unknown",
          email,
          loginTime: new Date(loginTime).toLocaleString()
        };
      });
    setLogins(loginRows);

    // Section 2: User Statistics
    const totalUsers = users.length;
    const today = new Date();
    const loginsToday = loginRows.filter(row => {
      const d = new Date(row.loginTime);
      return d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();
    }).length;
    setStats({ totalUsers, loginsToday });

    // Section 3: Recent Logins (last 5)
    setRecentLogins(loginRows.slice(-5).reverse());
  }, []);

  useEffect(() => {
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
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  useEffect(() => {
    // Listen for theme changes
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    // Listen for theme changes from header
    const syncTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      }
    };
    window.addEventListener("storage", syncTheme);
    window.addEventListener("themeChange", syncTheme);
    syncTheme();
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("themeChange", syncTheme);
    };
  }, []);

  // Add dark mode classes to main container and tables
  return (
    <div className={`w-full min-h-screen p-8 pt-24 transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-gray-50 text-black"}`}>
      {/* Section 1: Logins Table */}
      <section className="w-full mb-10">
        <h2 className="text-2xl font-bold mb-4">User Logins</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead className={isDark ? "bg-purple-900 text-white" : "bg-purple-600 text-white"}>
              <tr>
                <th className="py-3 px-4">Username</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Login Time</th>
              </tr>
            </thead>
            <tbody>
              {logins.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center text-gray-500">{isDark ? <span className="text-white">No logins found.</span> : "No logins found."}</td>
                </tr>
              ) : (
                logins.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-3 px-4">{row.username}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.loginTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Section 2: User Statistics */}
      <section className="w-full mb-10">
        <h2 className="text-2xl font-bold mb-4">User Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-lg shadow p-6 flex flex-col items-center ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <span className="text-4xl font-bold text-purple-600">{stats.totalUsers}</span>
            <span className="mt-2 text-lg">{isDark ? <span className="text-white">Total Users</span> : "Total Users"}</span>
          </div>
          <div className={`rounded-lg shadow p-6 flex flex-col items-center ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <span className="text-4xl font-bold text-purple-600">{stats.loginsToday}</span>
            <span className="mt-2 text-lg">{isDark ? <span className="text-white">Logins Today</span> : "Logins Today"}</span>
          </div>
        </div>
      </section>

      {/* Section 3: Recent Logins */}
      <section className="w-full mb-10">
        <h2 className="text-2xl font-bold mb-4">Recent Logins</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead className={isDark ? "bg-purple-900 text-white" : "bg-purple-600 text-white"}>
              <tr>
                <th className="py-3 px-4">Username</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Login Time</th>
              </tr>
            </thead>
            <tbody>
              {recentLogins.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center text-gray-500">{isDark ? <span className="text-white">No recent logins found.</span> : "No recent logins found."}</td>
                </tr>
              ) : (
                recentLogins.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-3 px-4">{row.username}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.loginTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Most Active Users */}
      <section className="w-full mb-10">
        <h2 className="text-2xl font-bold mb-4">Most Active Users</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead className={isDark ? "bg-purple-900 text-white" : "bg-purple-600 text-white"}>
              <tr>
                <th className="py-3 px-4">Username</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {mostActiveUsers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center text-gray-500">{isDark ? <span className="text-white">No active users found.</span> : "No active users found."}</td>
                </tr>
              ) : (
                mostActiveUsers.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-3 px-4">{row.username}</td>
                    <td className="py-3 px-4">{row.email}</td>
                    <td className="py-3 px-4">{row.count}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Section 5: Email Domain Stats & Weekly Logins Table */}
      <section className="w-full mb-10">
        <h2 className="text-2xl font-bold mb-4">{t.emailDomain}</h2>
        <div className="overflow-x-auto mb-12">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead className={isDark ? "bg-purple-900 text-white" : "bg-purple-600 text-white"}>
              <tr>
                <th className="py-3 px-4">{t.domain}</th>
                <th className="py-3 px-4">{t.userCount}</th>
              </tr>
            </thead>
            <tbody>
              {emailDomains.length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-4 px-4 text-center text-gray-500">{isDark ? <span className="text-white">{t.noDomain}</span> : t.noDomain}</td>
                </tr>
              ) : (
                emailDomains.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-3 px-4">{row.domain}</td>
                    <td className="py-3 px-4">{row.count}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Weekly Logins Table */}
        <h2 className="text-2xl font-bold mb-4">{t.loginsWeek}</h2>
        <div className="overflow-x-auto">
          <table className={`w-full rounded-lg shadow text-left ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
            <thead className={isDark ? "bg-purple-900 text-white" : "bg-purple-700 text-white"}>
              <tr>
                <th className="py-3 px-4">{t.day}</th>
                <th className="py-3 px-4">{t.loginCount}</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(loginData).map(([day, count], idx) => (
                <tr
                  key={day}
                  className={
                    idx % 2 === 0
                      ? isDark ? "bg-black text-white" : "bg-white text-black"
                      : isDark ? "bg-purple-900 text-white" : "bg-black text-white"
                  }
                >
                  <td className="py-3 px-4 font-semibold">{day}</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-3 py-1 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)",
                        color: "#fff",
                        fontWeight: "bold"
                      }}
                    >
                      {count}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Login Bar Chart Section */}
      <section className="w-full mb-10">
        <LoginBarChart loginData={loginData} setLoginData={setLoginData} />
      </section>
    </div>
  );
};

export default AdminDashboard;