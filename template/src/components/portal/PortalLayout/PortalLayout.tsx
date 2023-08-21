import { FC, PropsWithChildren } from 'react';
import { Grid } from '@mui/material';
import { Topbar } from '../Topbar';
import { LeftSidebar } from '../LeftSidebar';

export const PortalLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Grid container sx={{ flexGrow: 1, backgroundColor: 'background.default' }}>
			<Grid item>
				<LeftSidebar />
			</Grid>
			<Grid item xs>
				<Grid container direction="column" sx={{ height: 1.0, maxHeight: 1.0, overflowY: 'hidden' }}>
					<Grid item>
						<Topbar />
					</Grid>
					<Grid item xs>
						{children}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
