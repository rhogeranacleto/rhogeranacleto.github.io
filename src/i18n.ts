import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ptBR from './locales/ptBR.json';

i18n.use(initReactI18next).init({
  lng: 'ptBR',
  fallbackLng: 'ptBR',
  resources: { ptBR, en },
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
