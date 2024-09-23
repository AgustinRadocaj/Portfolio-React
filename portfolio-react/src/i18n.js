import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslations from './translations/es.json'
import enTranslations from './translations/en.json'

i18n.use(initReactI18next)

i18n.init({
    interpolation: {escapeValue: false},
    lng: 'es',
    fallbackLng: 'en',
    resources: {
       es: esTranslations,
       en: enTranslations
    }
});

export default i18n;