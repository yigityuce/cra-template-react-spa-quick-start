import { FC } from 'react';
import styles from './App.module.scss';
import { RouterOutlet } from '@utils';
import { GUARDS, ROUTES } from '@routes';
import { Grid } from '@mui/material';
import { Navbar } from '@components/Navbar';

export const App: FC = () => {
	return (
		<Grid className={styles.App} container wrap="nowrap" direction="column" justifyContent="flex-start">
			<Navbar />
			<RouterOutlet routes={ROUTES} guards={GUARDS} />
		</Grid>
	);
};
