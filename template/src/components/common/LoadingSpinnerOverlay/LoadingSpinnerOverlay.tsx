import { FC } from 'react';
import { useService } from '@hooks';
import { loadingSpinnerOverlayService } from '@services';
import { Backdrop, CircularProgress } from '@mui/material';

export const LoadingSpinnerOverlay: FC = () => {
	const { data: loadingSpinnerCounter = 0 } = useService(loadingSpinnerOverlayService.getSubject);

	return (
		<Backdrop
			sx={{ color: 'primary.main', backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={loadingSpinnerCounter > 0}
		>
			<CircularProgress color="inherit" size={64} thickness={4} variant="indeterminate" />
		</Backdrop>
	);
};
