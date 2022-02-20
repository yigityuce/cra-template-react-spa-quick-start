import { Observable, of, throwError, Subscription } from 'rxjs';

class SubscriptionList {
	private _list: Record<string, Subscription> = {};

	constructor() {
		return new Proxy(this, {
			get(obj: SubscriptionList, key: string) {
				if (key in obj) return obj[key as keyof SubscriptionList];
				if (key in obj._list) return obj._list[key];
				return null;
			},
			set(obj: SubscriptionList, key: string, value: Subscription): boolean {
				obj.unsubscribeSafe(key);
				obj._list[key] = value;
				return true;
			},
		});
	}

	public unsubscribeSafe(pipename: string): void {
		if (this._list[pipename]) {
			console.debug('Unsubscribing from', pipename);
			this._list[pipename].unsubscribe();
		}
	}

	public unsubscribeAllSafe(): void {
		for (const pipename in this._list) this.unsubscribeSafe(pipename);
	}
}

export class RxUtils {
	public static SubscriptionList = SubscriptionList;

	public static valueOrThrow<T>(value: T, error: Error): Observable<T> {
		return value ? of(value) : throwError(error);
	}

	public static mapValueOrThrow<T, R>(value: T, error: Error, mapped: R): Observable<R> {
		return value ? of(mapped) : throwError(error);
	}

	public static noop(): void {
		// blank - no operation
	}
}
