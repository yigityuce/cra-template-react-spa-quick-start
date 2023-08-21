import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from '@routes';

export const AppRoutes: FC = () => {
	const router = useRoutes(ROUTES as RouteObject[]);
	return router;
};
