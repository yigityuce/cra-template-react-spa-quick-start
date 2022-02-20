import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/types';

export interface ICommonState {
	counter: number;
}

const initialState: ICommonState = {
	counter: 0,
};

export const {
	actions: { incrementCounter, decrementCounter, resetCounter },
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
	},
});

export const counterSelector = (state: RootState) => state.Common.counter || 0;
