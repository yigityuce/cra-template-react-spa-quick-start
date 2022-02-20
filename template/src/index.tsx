import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider, StoreProvider } from '@utils';
import { App } from './App';
import './styles.scss';

ReactDOM.render(
	<BrowserRouter>
		<StoreProvider>
			<CustomThemeProvider>
				<App />
			</CustomThemeProvider>
		</StoreProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
