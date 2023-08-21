import { FC, ReactNode, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { matchRoutes, RouteObject, useLocation } from 'react-router-dom';
import { ROUTES } from '@routes';
import { Route } from '@models';
import { UserAvatar } from '../UserAvatar';
import PersonIcon from '@mui/icons-material/Person';
import { Logo } from '@components/common';

export const Topbar: FC = () => {
	const loc = useLocation();
	const [title, setTitle] = useState<ReactNode>('');

	useEffect(() => {
		const matches = matchRoutes(ROUTES as RouteObject[], loc);
		const routeTitle = (matches?.slice(-1)?.[0].route as Route).text;
		if (routeTitle) setTitle(routeTitle);
	}, [loc]);

	return (
		<Grid
			container
			alignItems="center"
			justifyContent="space-between"
			sx={{
				backgroundColor: 'common.white',
				height: 64,
				position: 'relative',
				paddingX: 2,
				borderBottomWidth: 1,
				borderBottomStyle: 'solid',
				borderBottomColor: 'grey.200',
			}}
		>
			<Typography
				variant="h1"
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '100%',
					textAlign: 'center',
				}}
			>
				{title}
			</Typography>
			<Grid item sx={{ zIndex: 2 }}>
				<Logo height={64} width={64} />
			</Grid>
			<Grid item sx={{ zIndex: 2 }}>
				<UserAvatar username="Yigit Yuce">
					<Box
						sx={{
							backgroundColor: 'grey.200',
							color: 'grey.500',
							width: 1.0,
							height: 1.0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '50%',
						}}
					>
						<PersonIcon color="inherit" fontSize="medium" />
					</Box>
				</UserAvatar>
			</Grid>
		</Grid>
	);
};
