import { DependencyList, useEffect, useState } from 'react';
import { Observable } from 'rxjs';

type State<T> = { data?: T; error?: Maybe<unknown>; loading: boolean; trigger: () => void };

export const useService = <T,>(cb: () => Observable<T>, deps: DependencyList = []): State<T> => {
	const [counter, setCounter] = useState(0);
	const trigger = () => setCounter(counter + 1);
	const [state, setState] = useState<State<T>>({ loading: true, data: undefined, error: undefined, trigger });

	useEffect(
		() => {
			!state.loading && setState({ ...state, loading: true });

			const subscription = cb().subscribe({
				next: (response) => setState({ loading: false, error: undefined, data: response, trigger }),
				error: (err) => setState({ loading: false, error: err, data: undefined, trigger }),
			});
			return () => subscription.unsubscribe();
		},
		deps ? [counter, ...deps] : [counter],
	);

	return state;
};
