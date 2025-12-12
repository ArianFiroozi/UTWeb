import { createContext, useContext, useState } from "react";
import en from "./en.json";
import fa from "./fa.json";

const translations = { en, fa };
const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const t = (key) => translations[lang][key] || key;

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fa" : "en"));
  };

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
