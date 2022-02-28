import { FC } from 'react';
import styles from './App.module.scss';
import { ROUTES } from '@routes';
import { Grid } from '@mui/material';
import { Navbar } from '@components/Navbar';
import { useRoutes } from 'react-router-dom';

export const App: FC = () => {
	const router = useRoutes(ROUTES);

	return (
		<Grid className={styles.App} container wrap="nowrap" direction="column" justifyContent="flex-start">
			<Navbar />
			{router}
		</Grid>
	);
};
