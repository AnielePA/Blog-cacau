import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPTBR from './locales/pt-BR/translation.json';
import translationEN from './locales/en/translation.json';
import translationESP from './locales/esp/translation.json';



const resources = {
    'pt-BR': {
        translation: translationPTBR
    },
    en: {
        translation: translationEN
    },
    es: {
        translation: translationESP
    }
    //adicionar outros idiomas aqui
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pt-BR",


        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],

            lookupLocalStorage: 'i18nextLng',

            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false
        },
        debug: process.env.NODE_ENV === 'development',
    });

export default i18n;

