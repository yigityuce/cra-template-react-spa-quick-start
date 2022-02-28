import { Home as HomeIcon } from '@mui/icons-material';
import { IRoute } from '@models';
import { Homepage } from './Homepage';
import { Admin, AdminDashboard } from './Admin';

export const ROUTES: IRoute[] = [
	{
		path: '/home',
		element: <Homepage />,
		navbarItem: { icon: <HomeIcon /> },
	},
	{
		path: '/admin',
		element: <Admin />,
		navbarItem: { text: 'Admin' },
		children: [
			{
				index: true,
				element: <AdminDashboard />,
			},
		],
	},
];
