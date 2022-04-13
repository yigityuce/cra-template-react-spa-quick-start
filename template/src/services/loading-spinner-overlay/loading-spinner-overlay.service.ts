import { BehaviorSubject } from 'rxjs';

type FnType = (...args: any) => any;
type ModifierWithCallback = <Fn extends FnType = FnType>(cb?: Fn) => ReturnType<Fn>;

class LoadingSpinnerOverlayService {
	private _counter = new BehaviorSubject<number>(0);

	getSubject = () => {
		return this._counter;
	};

	increment: ModifierWithCallback = (cb) => {
		this._counter.next(this._counter.value + 1);
		return cb?.();
	};

	decrement: ModifierWithCallback = (cb) => {
		this._counter.next(this._counter.value - 1);
		return cb?.();
	};

	reset: ModifierWithCallback = (cb) => {
		this._counter.next(0);
		return cb?.();
	};
}

export const loadingSpinnerOverlayService = new LoadingSpinnerOverlayService();
