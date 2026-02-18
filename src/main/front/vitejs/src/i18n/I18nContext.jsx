import { createContext, useContext, useState } from "react";
import en from "./en.json";
import fa from "./fa.json";

const translations = { en, fa };
const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const t = (key) => {
    if (!key) return "";
    // support nested keys like "step.carlaDesc"
    const parts = String(key).split(".");
    let node = translations[lang];
    for (const part of parts) {
      if (node && Object.prototype.hasOwnProperty.call(node, part)) {
        node = node[part];
      } else {
        return key; // fallback to the key if not found
      }
    }
    return typeof node === "string" ? node : key;
  };

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
