import { EffectCallback, FC, useEffect } from 'react';
import { i18n } from './setup';
import { I18nextProvider } from 'react-i18next';
import { LanguageCode } from '@models';
import { from } from 'rxjs';
import { useSelector } from 'react-redux';
import { languageSelector } from '@store/slices/common.slice';

const setLanguageEffect = (language: LanguageCode): ReturnType<EffectCallback> => {
	const subscription = from(i18n.changeLanguage(language)).subscribe();
	return () => subscription.unsubscribe();
};

export const TranslationProvider: FC = ({ children }) => {
	const language = useSelector(languageSelector);
	useEffect(() => setLanguageEffect(language), []);
	useEffect(() => setLanguageEffect(language), [language]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
