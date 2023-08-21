import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type Route = Omit<RouteObject, 'children'> & {
	text?: ReactNode;
	icon?: ReactNode;
	showInMenu?: boolean;
	children?: Route[];
};
