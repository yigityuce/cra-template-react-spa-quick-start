import { config } from '@config';
import axios, { AxiosError, Method } from 'axios';
import qs from 'qs';

export type HttpHeaders = { [header: string]: string };
export type HttpParams = { [param: string]: any } | URLSearchParams;

export class HttpService {
	constructor() {
		axios.interceptors.request.use((axiosConfig) => {
			if (axiosConfig.baseURL?.includes(config.apiUrl)) {
				const token = 'ACCESS_TOKEN'; // authService.getToken();
				if (token && axiosConfig.headers) axiosConfig.headers.Authorization = `Bearer ${token}`;
			}
			return axiosConfig;
		});
		axios.defaults.validateStatus = (status) => `${status}`.startsWith('2');
	}

	public async get<T = any>(baseURL: string, path?: string, params?: HttpParams, headers?: HttpHeaders) {
		return this.sendRequest<T>('GET', baseURL, path, null, params, headers);
	}

	public async post<T = any>(baseURL: string, path?: string, body?: any, params?: HttpParams, headers?: HttpHeaders) {
		return this.sendRequest<T>('POST', baseURL, path, body, params, headers);
	}

	public async put<T = any>(baseURL: string, path?: string, body?: any, params?: HttpParams, headers?: HttpHeaders) {
		return this.sendRequest<T>('PUT', baseURL, path, body, params, headers);
	}

	public async delete<T = any>(baseURL: string, path?: string, params?: HttpParams, headers?: HttpHeaders) {
		return this.sendRequest<T>('DELETE', baseURL, path, null, params, headers);
	}

	public async sendRequest<T = any>(method: Method, baseURL: string, path = '', body?: any, params?: HttpParams, headers?: HttpHeaders) {
		return axios
			.request<T>({
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
			.then((response) => response?.data)
			.catch((error: AxiosError<any> | Error) => {
				console.log(
					`Network Error ${error.message}`,
					(error as AxiosError)?.isAxiosError ? JSON.stringify((error as AxiosError).toJSON(), null, 2) : (error as any)
				);
				throw error;
			});
	}
}

export const httpService = new HttpService();
