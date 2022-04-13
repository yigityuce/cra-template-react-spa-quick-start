import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers';
import { RootState } from './types';

const createStore = (preloadedState?: RootState) => {
	return configureStore({
		preloadedState,
		reducer: persistReducer(
			{
				key: 'ui-store',
				storage,
			},
			rootReducer
		),
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	});
};

const store = createStore();
const persistor = persistStore(store);

export const getStore = () => ({ store, persistor });
