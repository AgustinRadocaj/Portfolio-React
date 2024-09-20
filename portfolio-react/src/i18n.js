import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next)

i18n.init({
    interpolation: {escapeValue: false},
    lng: 'es',
    fallbackLng: 'en',
    resources: {
        es: {
            translation: {
                "experiencia": 'experiencia',
                "proyectos": 'proyectos',
                "contacto": 'contacto',
                "language": {
                    "spanish": 'Español',
                    "english": 'Ingles'
                }
            }
        },
        en: {
            translation: {
                "experiencia": 'experiencie',
                "proyectos": 'projects',
                "contacto": 'contact',
                "language": {
                    "spanish": 'Spanish',
                    "english": 'English'
                }
            }
        }
    }
});

export default i18n;