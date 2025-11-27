import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/public/locales/en/translation.json";
import es from "@/public/locales/es/translation.json";

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  },
};

i18n.use(initReactI18next).init({
  lng: "es",
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
