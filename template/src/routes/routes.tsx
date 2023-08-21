import { Navigate } from 'react-router-dom';
import { Route } from '@models';
import { Homepage } from './Homepage';
import { PORTAL_ROUTES } from './Portal';

export const ROUTES: Route[] = [
	{
		path: '/home',
		element: <Homepage />,
	},
	PORTAL_ROUTES,
	{
		path: '*',
		element: <Navigate to={{ pathname: '/home' }} replace />,
	},
];
