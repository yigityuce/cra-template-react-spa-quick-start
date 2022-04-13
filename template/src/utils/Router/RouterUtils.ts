import { matchPath, resolvePath } from 'react-router-dom';

export class RouterUtils {
	static isLocationAndRouteMatched(href?: Maybe<string>): boolean {
		let isLocationMatched = false;
		if (href) {
			const resolved = resolvePath(href);
			isLocationMatched = !!matchPath({ path: resolved.pathname, end: true }, location.pathname);
		}
		return isLocationMatched;
	}
}
