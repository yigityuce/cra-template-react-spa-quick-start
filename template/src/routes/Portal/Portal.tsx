import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { PortalLayout } from '@components/portal';

export const Portal: FC = () => {
	return (
		<PortalLayout>
			<Outlet />
		</PortalLayout>
	);
};
