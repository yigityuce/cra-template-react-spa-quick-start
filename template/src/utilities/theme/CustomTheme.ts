import { createTheme, Theme } from '@mui/material';

interface CustomThemeProperties {
	brandColors: {
		purple: string;
		turquois: string;
	};
}

export type CustomThemeDefinition = Theme & CustomThemeProperties;

// created by using Material-UI Theme Creator
// See: https://bareynol.github.io/mui-theme-creator
export const CUSTOM_THEME: CustomThemeDefinition = Object.assign<Theme, CustomThemeProperties>(
	createTheme({
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: 'none',
						borderRadius: 10,
					},
				},
			},
		},
		palette: {
			mode: 'light',
			grey: {
				'50': '#FAFAFA',
				'100': '#FBFBFB',
				'200': '#ECECED',
				'300': '#CECECE',
				'400': '#BDBDBD',
				'500': '#9E9E9E',
				'600': '#757575',
				'700': '#616161',
				'800': '#424242',
				'900': '#212121',
			},
			primary: {
				main: '#0F69AF',
			},
			secondary: {
				main: '#AFCB1F',
			},
			background: {
				default: '#FAFBFB',
				paper: '#ffffff',
			},
			text: {
				primary: '#6B6B6B',
				secondary: '#556ee6',
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
		typography: {
			fontFamily: [
				'Montserrat',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			].join(', '),
			allVariants: {
				wordBreak: 'break-all',
				color: '#6B6B6B',
			},
			h1: {
				fontSize: 18,
				lineHeight: '57px',
				fontWeight: 400,
				letterSpacing: '6px',
				textTransform: 'uppercase',
			},
			body1: {
				fontSize: 12,
			},
		},
	}),
	{
		brandColors: {
			purple: '#3D0D6D',
			turquois: '#09BED1',
		},
	},
);
