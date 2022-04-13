import { FC, useRef, useState } from 'react';
import styles from './UserAvatar.module.scss';
import { Tr } from '@utils';
import { Avatar, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, Stack, StackProps, Typography } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export interface IUserAvatarProps extends Omit<StackProps, 'direction' | 'alignItems'> {
	noDropdown?: boolean;
	username?: string;
}

export const UserAvatar: FC<IUserAvatarProps> = ({ noDropdown, username, children, ...props }) => {
	const avatarRef = useRef<HTMLButtonElement>(null);
	const [userMenuVisibility, setUserMenuVisibility] = useState(false);

	return (
		<Stack {...props} direction="row" alignItems="center">
			<IconButton
				ref={avatarRef}
				disableRipple
				sx={{ p: 0, color: 'inherit' }}
				onClick={() => setUserMenuVisibility(!userMenuVisibility)}
			>
				<Avatar
					sx={{
						bgcolor: 'grey.100',
						color: 'inherit',
						p: 0.5,
						width: 60,
						height: 60,
						boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)',
					}}
				>
					{children || ''}
				</Avatar>
				{username && (
					<Typography variant="body1" sx={{ px: 1, fontStyle: 'italic' }}>
						{username}
					</Typography>
				)}
			</IconButton>
			{!noDropdown && (
				<Menu
					anchorEl={avatarRef.current}
					open={userMenuVisibility}
					onClose={() => setUserMenuVisibility(false)}
					transformOrigin={{ vertical: -8, horizontal: 'left' }}
				>
					<List disablePadding sx={{ minWidth: avatarRef.current?.clientWidth }}>
						<ListItemButton dense classes={{ root: styles.ListItem }}>
							<ListItemText primary={<Tr.Portal path="profile" />} />
							<ListItemIcon classes={{ root: styles.ListItemIcon }}>
								<AccountCircleOutlinedIcon fontSize="small" />
							</ListItemIcon>
						</ListItemButton>
						<ListItemButton dense classes={{ root: styles.ListItem }} sx={{ color: 'error.main' }}>
							<ListItemText primary={<Tr.Portal path="logout" />} />
							<ListItemIcon classes={{ root: styles.ListItemIcon }}>
								<PowerSettingsNewIcon fontSize="small" sx={{ color: 'error.main' }} />
							</ListItemIcon>
						</ListItemButton>
					</List>
				</Menu>
			)}
		</Stack>
	);
};
