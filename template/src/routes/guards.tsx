import { GuardFunction } from 'react-router-guards';

export const GUARDS: GuardFunction[] = [
	(to, _from, next) => {
		if (to.meta?.auth) {
			// if (authService.getToken()) {
			// 	next();
			// } else {
			// 	authService
			// 		.initialize()
			// 		.then(() => next())
			// 		.catch(() => next.redirect('/'));
			// }
			next();
		} else {
			next();
		}
	},
];
