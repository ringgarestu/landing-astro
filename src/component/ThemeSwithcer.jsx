import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
    setDarkMode(!darkMode);
  };

  return (
    <Switch auto color="default" icon={darkMode ? <FaMoon /> : <FaSun />} onClick={toggleDarkMode}>
      {darkMode ? "Dark" : "Light"}
    </Switch>
  );
};

export default ThemeSwitcher;
