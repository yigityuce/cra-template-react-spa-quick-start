import { NotificationType } from './notification-type.enum';

export interface INotification {
	message?: string;
	title?: string;
	type: NotificationType;
	duration?: number;
}
