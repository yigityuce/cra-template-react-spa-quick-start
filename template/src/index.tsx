import './polyfills';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
