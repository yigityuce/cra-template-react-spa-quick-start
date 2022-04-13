import { LanguageCode } from './language-code.enum';
import { ILanguage } from './language.interface';

export const DEFAULT_LANGUAGE: ILanguage = { code: LanguageCode.EN, flag: 'us', text: 'English' };
export const AVAILABLE_LANGUAGES: ILanguage[] = [DEFAULT_LANGUAGE, { code: LanguageCode.TR, flag: 'tr', text: 'Türkçe' }];
