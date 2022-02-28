import { FC, useRef, useState } from 'react';
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { ROUTES } from '@routes';
import { Link, useLocation } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';

export const Navbar: FC = () => {
	const location = useLocation();
	const avatarRef = useRef<HTMLButtonElement>(null);
	const [userMenuVisibility, setUserMenuVisibility] = useState(false);
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
					LOGO
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Tabs value={location.pathname} indicatorColor="primary" textColor="inherit">
						{ROUTES.map(({ path, navbarItem: { icon, text } = {} }, i) => {
							return (
								path && (
									<Tab
										key={`route-tab-${path}-${i}`}
										label={text}
										component={Link}
										to={path}
										value={path}
										icon={icon}
										iconPosition="start"
									/>
								)
							);
						})}
					</Tabs>
				</Box>

				<Box sx={{ flexGrow: 0 }}>
					<IconButton ref={avatarRef} onClick={() => setUserMenuVisibility(!userMenuVisibility)} sx={{ p: 0 }}>
						<Avatar sx={{ bgcolor: deepOrange[500] }}>JD</Avatar>
					</IconButton>
					<Menu
						sx={{ mt: '45px' }}
						anchorEl={avatarRef.current}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={userMenuVisibility}
						onClose={() => setUserMenuVisibility(false)}
					>
						{settings.map((setting) => (
							<MenuItem key={setting}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};
