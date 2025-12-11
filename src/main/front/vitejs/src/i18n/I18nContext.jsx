import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About",
    switch: "Farsi",
    welcome: "Welcome to the Home Page!",
    aboutText: "This is the About Page."
  },
  fa: {
    home: "خونه",
    about: "درمورد ما",
    switch: "English",
    welcome: "خوش آمدید!",
    aboutText: "ما خوبیم."
  },
};

const I18nContext = createContext(null);

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fa" : "en"));
  };

  const t = (key) => translations[lang][key];

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
};
