import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';

export const useLocationChange = (cb: (loc: Location) => void): void => {
	const loc = useLocation();
	useEffect(() => cb(loc), [loc]);
};
