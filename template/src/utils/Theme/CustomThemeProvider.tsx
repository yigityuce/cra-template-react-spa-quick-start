import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { CUSTOM_THEME } from './CustomTheme';

export const CustomThemeProvider: FC = (props) => ThemeProvider({ theme: CUSTOM_THEME, ...props });
