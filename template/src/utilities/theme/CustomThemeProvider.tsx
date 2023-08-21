import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { CUSTOM_THEME } from './CustomTheme';

export const CustomThemeProvider: FC<PropsWithChildren> = (props) => ThemeProvider({ theme: CUSTOM_THEME, ...props });
