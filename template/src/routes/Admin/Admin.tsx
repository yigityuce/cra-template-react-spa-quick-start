import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Admin: FC = () => {
	return (
		<>
			<p>Admin Page</p>
			<Outlet />
		</>
	);
};
