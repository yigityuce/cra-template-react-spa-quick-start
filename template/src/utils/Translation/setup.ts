import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { DEFAULT_LANGUAGE } from '@models';

i18next
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(HttpBackend)
	.init({
		lng: DEFAULT_LANGUAGE.code,
		fallbackLng: DEFAULT_LANGUAGE.code,
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		react: {
			useSuspense: false,
		},
	});

export const i18n = i18next;
