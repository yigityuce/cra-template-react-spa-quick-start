import { combineReducers } from '@reduxjs/toolkit';
import { reducer as Common } from './slices/common.slice';

export const rootReducer = combineReducers({
	Common,
});
