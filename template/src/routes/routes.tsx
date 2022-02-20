import { Redirect } from 'react-router';
import { Home as HomeIcon } from '@mui/icons-material';
import { IRoute } from '@utils';
import { Home } from './home';
import { Counter } from './counter';

export const ROUTES: IRoute[] = [
	{
		path: '/home',
		component: Home,
		icon: <HomeIcon />,
	},
	{
		path: '/counter',
		component: Counter,
		text: 'Counter',
	},
	{
		path: '/page-1',
		component: () => <p>Page 1</p>,
		meta: { auth: true },
		text: 'Page 1',
	},
	{
		path: '/',
		component: () => <Redirect to="/home" />,
	},
];
