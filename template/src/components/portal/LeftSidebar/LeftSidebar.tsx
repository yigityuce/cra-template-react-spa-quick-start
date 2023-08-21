import { FC, PropsWithChildren } from 'react';
import { matchRoutes, RouteObject, useLocation, useNavigate } from 'react-router-dom';
import { Route } from '@models';
import { ROUTES } from '@routes';
import { TranslatedText } from '@utilities';
import { Box, Stack, Tooltip } from '@mui/material';
import { LeftSidebarItem } from '../LeftSidebarItem';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const LeftSidebar: FC<PropsWithChildren> = () => {
	const navigate = useNavigate();
	const loc = useLocation();
	const matches = matchRoutes(ROUTES as RouteObject[], loc);
	const { path, children = [] } = matches?.[0].route as Route;
	const childRoutes = children.filter((child) => child.showInMenu);
	const onLogoutClicked = () => navigate('/home', { state: { redirect: loc.pathname } });

	return (
		<Stack
			spacing={0}
			direction="column"
			sx={{
				backgroundColor: 'background.default',
				height: 1.0,
				overflowY: 'hidden',
				boxShadow: '5px 0px 13px rgba(203, 203, 203, 0.25)',
			}}
		>
			<LeftSidebarItem active borderPosition="bottom" sx={{ backgroundColor: 'common.white' }} onClick={() => navigate(-1)}>
				<ArrowBackIosNewRoundedIcon color="inherit" fontSize="medium" />
			</LeftSidebarItem>

			{childRoutes.map((childRoute, i) => {
				const navigateTo = `${path ? path + '/' : ''}${childRoute.path}`;
				return (
					<Tooltip key={`left-sidebar-item-${childRoute.path}-${i}`} title={<Box>{childRoute.text}</Box>} arrow placement="right">
						<LeftSidebarItem borderPosition="bottom" href={navigateTo}>
							{childRoute.icon}
						</LeftSidebarItem>
					</Tooltip>
				);
			})}

			<Tooltip title={<TranslatedText.Portal path="logout" />} arrow placement="top">
				<LeftSidebarItem borderPosition="top" sx={{ marginTop: 'auto' }} onClick={onLogoutClicked}>
					<LogoutRoundedIcon color="inherit" fontSize="medium" />
				</LeftSidebarItem>
			</Tooltip>
		</Stack>
	);
};
