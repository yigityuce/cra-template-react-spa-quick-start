import { plainToClass } from 'class-transformer';

export abstract class Dto {
	constructor(other?: unknown) {
		Object.assign(this, plainToClass(this.constructor as any, other, { exposeUnsetFields: false, exposeDefaultValues: true }));
	}
}
