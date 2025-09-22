import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import de from "./locales/de.json";

// Define type for resources
export const resources = {
  en: { translation: en },
  de: { translation: de },
} as const;

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next) // bind react-i18next
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    resources,
  });

export default i18n;
