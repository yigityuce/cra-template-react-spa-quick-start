import { config } from '@config';
import axios, { Method } from 'axios';
import qs from 'qs';
import { catchError, from, map, tap, throwError } from 'rxjs';
import { loadingSpinnerOverlayService } from '../loading-spinner-overlay';

export type HttpHeaders = { [header: string]: string };
export type HttpParams = { [param: string]: any } | URLSearchParams;
export interface HttpRequestGenericOptions {
	params?: HttpParams;
	headers?: HttpHeaders;
	body?: any;
	disableLoader?: boolean;
}

class HttpService {
	constructor() {
		axios.interceptors.request.use(async (axiosConfig) => {
			const targetUrl = [axiosConfig.baseURL, axiosConfig.url].filter(Boolean).join('/');
			if (targetUrl.includes(config.apiUrl)) {
				const token = ''; // await authService.getAccessToken();
				if (token && axiosConfig.headers) axiosConfig.headers.Authorization = `Bearer ${token}`;
			}
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

	public delete<T = any>(baseURL: string, path?: string, opts: HttpRequestGenericOptions = {}) {
		return this.sendRequest<T>('DELETE', baseURL, path, opts);
	}

	public sendRequest<T = any>(
		method: Method,
		baseURL: string,
		path = '',
		{ headers, params, body, disableLoader }: HttpRequestGenericOptions = {}
	) {
		!disableLoader && loadingSpinnerOverlayService.increment();

		return from(
			axios.request<T>({
				method,
				baseURL,
				url: path,
				data: body,
				params,
				headers,
				paramsSerializer: (ps: HttpParams) => {
					if (ps instanceof URLSearchParams) return ps.toString();
					return qs.stringify(ps);
				},
			})
		).pipe(
			map((response) => response?.data),
			tap(() => !disableLoader && loadingSpinnerOverlayService.decrement()),
			catchError((err) => {
				!disableLoader && loadingSpinnerOverlayService.decrement();
				return throwError(() => err);
			})
		);
	}
}

export const httpService = new HttpService();
