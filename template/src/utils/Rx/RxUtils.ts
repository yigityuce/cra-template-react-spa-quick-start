import { Observable, of, throwError } from 'rxjs';
import { SubscriptionList } from './SubscriptionList';

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
