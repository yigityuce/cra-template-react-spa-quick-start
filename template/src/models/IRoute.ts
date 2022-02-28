import { ReactElement, ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export interface IRouteNavbarItem {
	text?: ReactNode;
	icon?: ReactElement;
}

export interface IRoute extends RouteObject {
	navbarItem?: IRouteNavbarItem;
	children?: IRoute[];
}
