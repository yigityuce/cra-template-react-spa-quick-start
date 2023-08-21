import { TypeUtils } from '@utilities';
import { HttpStatusCode } from './http-status-code.enum';

export class HttpError {
	statusCode: HttpStatusCode;
	path: string;
	timestamp: Date;
	message: string[];

	constructor(other?: HttpError) {
		if (other) {
			Object.assign(this, other);
			other.timestamp && (this.timestamp = new Date(other.timestamp));
			this.message = (Array.isArray(other.message) ? [...other.message] : [other.message]).filter((v) =>
				TypeUtils.isString(v)
			) as string[];
		}
	}
}
