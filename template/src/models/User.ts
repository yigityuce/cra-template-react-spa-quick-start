import { Dto } from '@utils';

export interface IUser {
	name: string;
	surname: string;
}

export class User extends Dto implements IUser {
	name: string;
	surname: string;

	constructor(other?: IUser) {
		super(other);
	}
}
