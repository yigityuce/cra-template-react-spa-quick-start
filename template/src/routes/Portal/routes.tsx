import { Navigate } from 'react-router-dom';
import { IRoute } from '@models';
import { Tr } from '@utils';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import { Portal } from './Portal';
import { Overview } from './Overview';
import { History } from './History';
import { Search } from './Search';
import { Cart } from './Cart';
import { Settings } from './Settings';

export const PORTAL_ROUTES: IRoute = {
	path: '/portal',
	element: <Portal />,
	text: 'Portal',
	children: [
		{
			path: 'overview',
			element: <Overview />,
			showInMenu: true,
			icon: <HomeRoundedIcon color="inherit" fontSize="large" />,
			text: <Tr.Portal path="overview.title" />,
		},
		{
			path: 'history',
			element: <History />,
			showInMenu: true,
			icon: <FolderRoundedIcon color="inherit" fontSize="large" />,
			text: <Tr.Portal path="history.title" />,
		},
		{
			path: 'search',
			element: <Search />,
			showInMenu: true,
			icon: <MenuBookRoundedIcon color="inherit" fontSize="large" />,
			text: <Tr.Portal path="search.title" />,
		},
		{
			path: 'cart',
			element: <Cart />,
			showInMenu: true,
			icon: <ShoppingBagRoundedIcon color="inherit" fontSize="large" />,
			text: <Tr.Portal path="cart.title" />,
		},
		{
			path: 'settings',
			element: <Settings />,
			showInMenu: true,
			icon: <BuildRoundedIcon color="inherit" fontSize="large" />,
			text: <Tr.Portal path="settings.title" />,
		},
		{
			index: true,
			path: '*',
			element: <Navigate to={{ pathname: 'overview' }} replace />,
		},
	],
};
