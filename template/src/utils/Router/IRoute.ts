import { ReactElement, ReactNode } from 'react';
import { GuardedRouteProps } from 'react-router-guards';

export interface IRoute extends GuardedRouteProps {
	text?: ReactNode;
	path: string;
	icon?: ReactElement;
	meta?: Record<string, any>;
}
