import qs from 'qs';
import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import { catchError, from, map, Observable, of, throwError } from 'rxjs';
import { config } from '@config';
// import { getStore, RootState } from '@store';
import { logger } from '@services/logger';
import { notificationService, NotificationType } from '@services/notification';
import { loadingSpinnerOverlayService } from '@services/loading-spinner-overlay';
import { HttpError } from './http-error.class';

export type HttpHeaders = { [header: string]: string };
export type HttpParams = { [param: string]: any } | URLSearchParams;
export interface HttpRequestGenericOptions {
	params?: HttpParams;
	headers?: HttpHeaders;
	body?: any;
	disableLoader?: boolean;
	noAuth?: boolean;
	responseType?: AxiosRequestConfig['responseType'];
	errorHandler?: 'notification' | 'silent' | 'unhandle';
}

class HttpService {
	// private store = getStore().store;

	constructor() {
		axios.interceptors.request.use(async (axiosConfig) => {
			const targetUrl = [axiosConfig.baseURL, axiosConfig.url].filter(Boolean).join('/');
			if (axiosConfig.withCredentials && targetUrl.includes(config.apiUrl)) {
				const token = ''; // (this.store.getState() as RootState).Common.tokens?.idToken?.jwtToken;
				if (token && axiosConfig.headers) axiosConfig.headers.Authorization = `Bearer ${token}`;
			}
			axiosConfig.withCredentials = false;
			return Promise.resolve(axiosConfig);
		});
		axios.defaults.validateStatus = (status) => `${status}`.startsWith('2');
	}

	public get<T = any>(baseURL: string, path?: string, opts: HttpRequestGenericOptions = {}) {
		return this.sendRequest<T>('GET', baseURL, path, opts);
	}

	public post<T = any>(baseURL: string, path?: string, opts: HttpRequestGenericOptions = {}) {
		return this.sendRequest<T>('POST', baseURL, path, opts);
	}

	public put<T = any>(baseURL: string, path?: string, opts: HttpRequestGenericOptions = {}) {
		return this.sendRequest<T>('PUT', baseURL, path, opts);
	}

	public patch<T = any>(baseURL: string, path?: string, opts: HttpRequestGenericOptions = {}) {
		return this.sendRequest<T>('PATCH', baseURL, path, opts);
	}

	public delete<T = any>(baseURL: string, path?: string, opts: HttpRequestGenericOptions = {}) {
		return this.sendRequest<T>('DELETE', baseURL, path, opts);
	}

	public sendRequest<T = any>(
		method: Method,
		baseURL: string,
		path = '',
		{ headers, params, body, disableLoader, noAuth = false, responseType, errorHandler = 'unhandle' }: HttpRequestGenericOptions = {},
	) {
		return new Observable<T>((subscriber) => {
			!disableLoader && loadingSpinnerOverlayService.increment();
			const subscription = from(
				axios.request<T>({
					method,
					baseURL,
					url: path,
					data: body,
					params,
					headers: {
						...headers,
					},
					responseType,
					withCredentials: !noAuth,
					paramsSerializer: (ps: HttpParams) => {
						if (ps instanceof URLSearchParams) return ps.toString();
						return qs.stringify(ps);
					},
				}),
			)
				.pipe(
					map((response) => response?.data),
					catchError((error: AxiosError | Error) => {
						return throwError(() =>
							axios.isAxiosError(error) && error.response
								? new HttpError((error as AxiosError<HttpError>).response?.data)
								: error,
						);
					}),
					catchError((err: AxiosError | Error) => {
						if (errorHandler === 'notification') {
							notificationService.send({
								type: NotificationType.ERROR,
								message: err instanceof HttpError ? err.message.join('') : err.message,
							});
							return throwError(() => err);
						} else if (errorHandler === 'silent') {
							logger.error(err);
							return of();
						} else {
							return throwError(() => err);
						}
					}),
				)
				.subscribe(subscriber);

			return () => {
				!disableLoader && loadingSpinnerOverlayService.decrement();
				subscription.unsubscribe();
			};
		});
	}
}

export const httpService = new HttpService();
