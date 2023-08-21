import { plainToInstance } from 'class-transformer';

export class TypeUtils {
	public static isDefined(input: unknown): boolean {
		return input !== undefined && input !== null;
	}

	public static hasValue(input: unknown): boolean {
		if (!TypeUtils.isDefined(input)) {
			return false;
		}
		if (Array.isArray(input)) {
			return input.length !== 0;
		}
		if (typeof input === 'object') {
			return !!input && Object.keys(input).length > 0;
		}
		if (typeof input === 'string') {
			return !!input.trim();
		}
		return true;
	}

	public static isString(input: unknown): boolean {
		return TypeUtils.isDefined(input) && typeof input === 'string';
	}

	public static isPositiveFloat(input: unknown): boolean {
		return (
			(TypeUtils.isDefined(input) && typeof input === 'number' && !isNaN(input) && input >= 0) ||
			(TypeUtils.isDefined(input) &&
				typeof input === 'string' &&
				!isNaN(parseFloat(input)) &&
				parseFloat(input) >= 0 &&
				/[0-9]*\.?[0-9]+/.test(input))
		);
	}

	public static isFloat(input: unknown): boolean {
		return (
			(TypeUtils.isDefined(input) && typeof input === 'number' && !isNaN(input)) ||
			(TypeUtils.isDefined(input) &&
				typeof input === 'string' &&
				!isNaN(parseFloat(input)) &&
				parseFloat(input) >= 0 &&
				/[0-9]*\.?[0-9]+/.test(input))
		);
	}

	public static isPositiveNumber(input: unknown): boolean {
		return (
			(TypeUtils.isDefined(input) && typeof input === 'number' && !isNaN(input) && input >= 0) ||
			(TypeUtils.isDefined(input) &&
				typeof input === 'string' &&
				!isNaN(parseInt(input, 10)) &&
				parseInt(input, 10) >= 0 &&
				/[0-9]+$/.test(input))
		);
	}

	public static isNumber(input: unknown): boolean {
		return (
			(TypeUtils.isDefined(input) && typeof input === 'number' && !isNaN(input)) ||
			(TypeUtils.isDefined(input) && typeof input === 'string' && !isNaN(parseInt(input, 10)) && /[0-9]+$/.test(input))
		);
	}

	public static isDate(input: unknown): boolean {
		return TypeUtils.isDefined(input) && Object.prototype.toString.call(input) === '[object Date]' && !isNaN((input as Date).getTime());
	}

	public static convert = plainToInstance;
}
