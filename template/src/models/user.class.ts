export interface IUser {
	name: string;
	surname: string;
}

export class User implements IUser {
	name: string;
	surname: string;

	constructor(other?: IUser) {
		other && Object.assign<typeof this, IUser>(this, other);
	}
}
