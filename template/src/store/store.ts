import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers';
import { RootState } from './types';

export const createStore = (preloadedState?: RootState) => {
	const store = configureStore({
		preloadedState,
		reducer: persistReducer(
			{
				key: 'ui-store',
				storage,
			},
			rootReducer
		),
		middleware: [
			...getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
		],
	});
	const persistor = persistStore(store);

	return { store, persistor };
};
