import { DependencyList, useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export const useService = <T,>(
	cb: () => Observable<T>,
	deps: DependencyList = []
): { data?: T; error?: Maybe<unknown>; loading: boolean } => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<T>();
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		setLoading(true);
		const subscription = cb().subscribe({
			next: (response) => {
				setData(response);
				setError(undefined);
				setLoading(false);
			},
			error: (err) => {
				setData(undefined);
				setError(err);
				setLoading(false);
			},
		});
		return () => subscription.unsubscribe();
	}, deps);

	return { data, error, loading };
};
