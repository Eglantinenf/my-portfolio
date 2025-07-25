"use client";

import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
    >
      {i18n.language === "en" ? "فارسی" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
