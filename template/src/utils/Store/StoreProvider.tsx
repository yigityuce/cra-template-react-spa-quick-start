import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from '@store/store';

const { store, persistor } = createStore();

export const StoreProvider: FC = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
