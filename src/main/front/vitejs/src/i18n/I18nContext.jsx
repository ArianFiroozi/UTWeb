import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About",
    switch: "Farsi",
    welcome: "Welcome to the Home Page!",
    aboutText: "This is the About Page.",
    aboutenv: "Electric and eco-friendly vehicle design.",
    aboutsensor: "High-precision sensors and AI-driven decision making.",
    aboutinno: "Cutting-edge autonomous technology for safer roads.",
    innovation: "Innovation",
    env: "Sustainability",
    sensor: "AI & Sensors",
    utcar: "UTCar for Autonomous Driving",
    aboututcar:"something in the air",
    learnmore: "Learn More",
    address:"somewhere in Tehran, Iran",
    email:"email@gmail.com",
    phone: "0-123432",
    footernote:"footer note",
    phonestr: "Phone",
    addressstr: "Address",
    emailstr: "E-mail",

    projects:"Projects",
    members:"Our People"
  },
  fa: {
    home: "خونه",
    about: "درمورد ما",
    switch: "English",
    welcome: "خوش آمدید!",
    aboutText: "ما خوبیم.",
    aboutenv: "طراحی خودروهای برقی و دوستدار محیط‌زیست.",
    aboutsensor: "سنسورهای بسیار دقیق و تصمیم‌گیری مبتنی بر هوش مصنوعی.",
    aboutinno: "فناوری نوین رانندگی خودران برای جاده‌های ایمن‌تر.",
    innovation: "نوآوری",
    env: "پایداری",
    sensor: "هوش مصنوعی و سنسورها",
    utcar: "یو‌تی‌کار برای رانندگی خودران",
    aboututcar: "چیزی در هواست",
    learnmore: "اطلاعات بیشتر",

    address:"جایی در تهران، ایران",
    email:"email@gmail.com",
    phone: "0-123432",
    footernote:"این پانویسه",
    phonestr: "شماره تماس",
    addressstr: "نشانی",
    emailstr: "ایمیل",

    projects: "پروژه های ما",
    members: "اعضا",
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
