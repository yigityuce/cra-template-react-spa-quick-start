import { BehaviorSubject } from 'rxjs';
import { NotificationType } from './notification-type.enum';
import { INotification } from './notification.interface';

class NotificationService {
	private notification$ = new BehaviorSubject<Maybe<INotification>>(undefined);

	getSubject = () => this.notification$;
	send = (notification: INotification): unknown => this.notification$.next(notification);
	sendSuccess = (message: string): unknown => this.send({ type: NotificationType.SUCCESS, message });
	sendError = (message: string): unknown => this.send({ type: NotificationType.ERROR, message });
	clear = (): unknown => this.notification$.next(undefined);
}

export const notificationService = new NotificationService();
