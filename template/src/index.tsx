import './polyfills';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider, StoreProvider, TranslationProvider } from '@utils';
import { App } from './App';
import './styles.scss';

ReactDOM.render(
	<BrowserRouter>
		<StoreProvider>
			<CustomThemeProvider>
				<TranslationProvider>
					<App />
				</TranslationProvider>
			</CustomThemeProvider>
		</StoreProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
