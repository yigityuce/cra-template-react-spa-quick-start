import { FC } from 'react';
import { ROUTES } from '@routes';
import { useRoutes } from 'react-router-dom';
import { LoadingSpinnerOverlay } from '@components/common';

export const App: FC = () => {
	const router = useRoutes(ROUTES);
	return (
		<>
			<LoadingSpinnerOverlay />
			{router}
		</>
	);
};
