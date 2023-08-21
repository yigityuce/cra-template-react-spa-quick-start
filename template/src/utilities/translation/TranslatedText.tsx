import { TOptions } from 'i18next';
import { FC } from 'react';
import { Trans, Translation, TransProps, useTranslation } from 'react-i18next';

interface ITranslatedTextProps extends TransProps<string> {
	path: string;
	options?: string | TOptions;
	withInsecureTemplating?: boolean;
}

export enum TranslationNamespaces {
	Common = 'Common',
	Portal = 'Portal',
}

export const TranslatedText: Record<TranslationNamespaces, FC<ITranslatedTextProps>> = {
	[TranslationNamespaces.Common]: ({ path, options, children, withInsecureTemplating }) => {
		const { t } = useTranslation('common');
		return withInsecureTemplating ? (
			<Trans ns="common" i18nKey={path} t={t} tOptions={options}>
				{children}
			</Trans>
		) : (
			<Translation ns="common">{(tFunc) => tFunc(path, options)}</Translation>
		);
	},
	[TranslationNamespaces.Portal]: ({ path, options, children, withInsecureTemplating }) => {
		const { t } = useTranslation('portal');
		return withInsecureTemplating ? (
			<Trans ns="portal" i18nKey={path} t={t} tOptions={options}>
				{children}
			</Trans>
		) : (
			<Translation ns="portal">{(tFunc) => tFunc(path, options)}</Translation>
		);
	},
};
