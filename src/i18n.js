
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "./locales/pt-BR.json";
import en from "./locales/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            "pt-BR": { translation: ptBR },
            en: { translation: en },
        },

        fallbackLng: "pt-BR",
        supportedLngs: ["pt-BR", "en"],

        detection: {
            order: ["localStorage"],
            lookupLocalStorage: "moventra-language",
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false,
        },
    });

function updateDocumentLanguage() {
    if (typeof document === "undefined") return;

    document.documentElement.lang =
        i18n.resolvedLanguage || "pt-BR";

    document.title = i18n.t("meta.title");

    const metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            i18n.t("meta.description")
        );
    }
}

i18n.on("languageChanged", updateDocumentLanguage);

updateDocumentLanguage();

export default i18n;