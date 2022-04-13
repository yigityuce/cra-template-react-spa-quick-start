import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/types';
import { LanguageCode, DEFAULT_LANGUAGE } from '@models';

export interface ICommonState {
	counter: number;
	language: LanguageCode;
}

const initialState: ICommonState = {
	counter: 0,
	language: DEFAULT_LANGUAGE.code,
};

export const {
	actions: { incrementCounter, decrementCounter, resetCounter, setLanguage },
	reducer,
} = createSlice({
	name: 'common',
	initialState,
	reducers: {
		incrementCounter: (state, data: PayloadAction<Maybe<number>>) => {
			state.counter = state.counter + (data.payload ? data.payload : 1);
		},
		decrementCounter: (state, data: PayloadAction<Maybe<number>>) => {
			state.counter = state.counter - (data.payload ? data.payload : 1);
		},
		resetCounter: (state) => {
			state.counter = 0;
		},
		setLanguage: (state, data: PayloadAction<LanguageCode>) => {
			state.language = data.payload || DEFAULT_LANGUAGE.code;
		},
	},
});

export const counterSelector = (state: RootState) => state.Common.counter || 0;
export const languageSelector = (state: RootState) => state.Common.language || DEFAULT_LANGUAGE.code;
