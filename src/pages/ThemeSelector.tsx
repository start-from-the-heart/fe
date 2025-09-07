import React, { useEffect, useState } from "react";

const ThemeSelector: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  // Cập nhật class `html.dark` theo theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative inline-block">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as "light" | "dark")}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 shadow-sm focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <option value="light">🌞 Light</option>
        <option value="dark">🌚 Dark</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
