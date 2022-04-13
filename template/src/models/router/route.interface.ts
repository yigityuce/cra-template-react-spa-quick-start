import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export interface IRoute extends RouteObject {
	text?: ReactNode;
	icon?: ReactNode;
	showInMenu?: boolean;
	children?: IRoute[];
}
