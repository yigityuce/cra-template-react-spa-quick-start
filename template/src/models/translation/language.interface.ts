import { LanguageCode } from './language-code.enum';

export interface ILanguage {
	code: LanguageCode;
	flag: string;
	text: string;
}
