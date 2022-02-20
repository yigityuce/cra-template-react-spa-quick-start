import { FC } from 'react';
import { Switch } from 'react-router';
import { GuardedRoute, GuardFunction, GuardProvider } from 'react-router-guards';
import { IRoute } from './IRoute';

interface IRouterOutletProps {
	routes: IRoute[];
	guards: GuardFunction[];
}

export const RouterOutlet: FC<IRouterOutletProps> = ({ routes, guards, children }) => {
	return (
		<GuardProvider guards={guards}>
			<Switch>
				{routes.map(({ path, ...props }, i) => (
					<GuardedRoute key={`route-${path}-${i}`} path={path} {...props} />
				))}
				{children}
			</Switch>
		</GuardProvider>
	);
};
