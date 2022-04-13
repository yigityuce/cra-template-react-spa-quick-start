import { FC } from 'react';
import { Translation } from 'react-i18next';

interface ITrProps {
	path: string;
}

export enum TranslationNamespaces {
	Common = 'Common',
	Portal = 'Portal',
}

export const Tr: Record<TranslationNamespaces, FC<ITrProps>> = {
	[TranslationNamespaces.Common]: ({ path }) => <Translation ns="common">{(t) => t(path)}</Translation>,
	[TranslationNamespaces.Portal]: ({ path }) => <Translation ns="portal">{(t) => t(path)}</Translation>,
};
