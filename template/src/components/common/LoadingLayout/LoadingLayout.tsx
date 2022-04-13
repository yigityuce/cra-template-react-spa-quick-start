import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const LoadingLayout: FC = ({ children }) => {
	return (
		<Box
			sx={{
				color: 'primary.main',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: 'common.white',
				zIndex: (theme) => theme.zIndex.modal + 1,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CircularProgress color="inherit" size={64} thickness={4} variant="indeterminate" />
			{children}
		</Box>
	);
};
