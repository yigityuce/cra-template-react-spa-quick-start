import { forwardRef, SyntheticEvent } from 'react';
import { config } from '@config';
import { Alert, AlertProps, AlertTitle, IconButton, Snackbar, SnackbarProps, Typography } from '@mui/material';
import { INotification } from '@services/notification';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface IAlertSnackbarProps extends Partial<INotification>, Omit<SnackbarProps, 'onClose' | 'message'> {
	alertProps?: AlertProps;
	onClose?: () => void;
}

export const Notification = forwardRef<HTMLDivElement, IAlertSnackbarProps>(
	({ children, type, duration = config.notificationTimeout, title, message, onClose, alertProps, ...props }, ref) => {
		const handleClose = (e: SyntheticEvent | Event, reason?: string) => reason !== 'clickaway' && onClose?.();

		return (
			<Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={duration} onClose={handleClose} {...props}>
				<Alert
					ref={ref}
					sx={{
						padding: 4,
						minWidth: 480,
						position: 'relative',
						backgroundColor: 'common.white',
						'.MuiAlert-message': { paddingTop: 0.25 },
					}}
					action={
						<IconButton size="small" color="inherit" onClick={onClose} sx={{ position: 'absolute', top: 27, right: 8 }}>
							<CloseIcon fontSize="small" />
						</IconButton>
					}
					iconMapping={{
						error: (
							<IconButton
								disableRipple
								color="inherit"
								sx={{ width: 24, height: 24, backgroundColor: 'error.main', color: 'common.white', cursor: 'default' }}
							>
								<CloseIcon sx={{ fontSize: 20 }} />
							</IconButton>
						),
						success: <CheckCircleIcon sx={{ fontSize: 24, color: 'success.main' }} />,
					}}
					severity={type}
					onClose={onClose}
					{...alertProps}
				>
					{title ? <AlertTitle>{title}</AlertTitle> : null}
					{children || (
						<Typography variant="caption" sx={{ color: 'common.black' }}>
							{message || ''}
						</Typography>
					)}
				</Alert>
			</Snackbar>
		);
	},
);
