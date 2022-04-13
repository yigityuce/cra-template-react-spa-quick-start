import { Navigate } from 'react-router-dom';
import { IRoute } from '@models';
import { Homepage } from './Homepage';
import { PORTAL_ROUTES } from './Portal';
import { Login } from './Login';

export const ROUTES: IRoute[] = [
	{
		path: '/home',
		element: <Homepage />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	PORTAL_ROUTES,
	{
		path: '*',
		element: <Navigate to={{ pathname: '/home' }} replace />,
	},
];
