import { FC } from 'react';
import { Box, BoxProps, IconButton } from '@mui/material';
import { SortOrder } from '@models';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface ISortIconProps extends BoxProps {
	sortable?: boolean;
	sortOrder?: SortOrder;
}

export const SortIcon: FC<ISortIconProps> = ({ sortable, sortOrder, sx, ...props }) => {
	return sortable ? (
		<Box sx={{ ...sx, display: 'flex', flexDirection: 'column', color: 'primary.main' }} {...props}>
			<IconButton size="small" color="inherit">
				{sortOrder === SortOrder.ASC ? (
					<KeyboardArrowUpIcon />
				) : sortOrder === SortOrder.DESC ? (
					<KeyboardArrowDownIcon />
				) : (
					<CodeIcon sx={{ transform: 'rotate(90deg)' }} />
				)}
			</IconButton>
		</Box>
	) : null;
};
