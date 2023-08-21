import { FC } from 'react';
import { useLocationChange, useService } from '@hooks';
import { notificationService } from '@services';
import { AppRoutes, LoadingSpinnerOverlay, Notification } from '@components/common';
import { StoreProvider, CustomThemeProvider, TranslationProvider } from './utilities';

export const App: FC = () => {
	const { data: notification } = useService(notificationService.getSubject);
	useLocationChange((loc) => {
		// ! implement app specific route change handler
		// ReactGA4.send({ hitType: 'pageview', page: location.pathname });
		console.log('location changed:', loc);
	});

	return (
		<StoreProvider>
			<CustomThemeProvider>
				<TranslationProvider>
					<Notification
						open={!!notification}
						onClose={() => notificationService.clear()}
						alertProps={{ variant: 'outlined' }}
						{...notification}
					/>
					<LoadingSpinnerOverlay />
					<AppRoutes />
				</TranslationProvider>
			</CustomThemeProvider>
		</StoreProvider>
	);
};
