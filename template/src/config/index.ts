import { IConfig } from './config.interface';

export const config: IConfig = {
	apiUrl: process.env.REACT_APP_API_URL || 'localhost',
	testString: process.env.REACT_APP_TEST_STRING || 'default test string',
	notificationTimeout: +(process.env.REACT_APP_NOTIFICATION_TIMOUT || '5000'),
};
