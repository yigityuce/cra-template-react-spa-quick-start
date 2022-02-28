import { createTheme } from '@mui/material';

// created by using Material-UI Theme Creator
// See: https://bareynol.github.io/mui-theme-creator
export const CUSTOM_THEME = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#556ee6',
		},
		secondary: {
			main: '#74788d',
		},
		background: {
			default: '#f8f8fb',
			paper: '#f6f6f6',
		},
		text: {
			secondary: '#556ee6',
			primary: '#495057',
		},
		success: {
			main: '#34c38f',
		},
		error: {
			main: '#f46a6a',
		},
		warning: {
			main: '#f1b44c',
		},
		info: {
			main: '#50a5f1',
		},
	},
});
