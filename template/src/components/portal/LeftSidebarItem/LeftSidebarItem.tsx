import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { RouterUtils } from '@utils';

export interface ILeftSidebarItemProps extends Omit<ButtonProps, 'classes' | 'size' | 'LinkComponent' | 'variant'> {
	size?: number;
	active?: boolean;
	borderPosition?: 'top' | 'right' | 'bottom' | 'left';
}

const BORDER_TOP_SX: ILeftSidebarItemProps['sx'] = {
	borderTopWidth: 1,
	borderTopStyle: 'solid',
	borderTopColor: 'grey.200',
};

const BORDER_RIGHT_SX: ILeftSidebarItemProps['sx'] = {
	borderRightWidth: 1,
	borderRightStyle: 'solid',
	borderRightColor: 'grey.200',
};

const BORDER_BOTTOM_SX: ILeftSidebarItemProps['sx'] = {
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderBottomColor: 'grey.200',
};

const BORDER_LEFT_SX: ILeftSidebarItemProps['sx'] = {
	borderLeftWidth: 1,
	borderLeftStyle: 'solid',
	borderLeftColor: 'grey.200',
};

const getBorderSx = (pos: ILeftSidebarItemProps['borderPosition']): ILeftSidebarItemProps['sx'] => {
	if (pos === 'top') return BORDER_TOP_SX;
	else if (pos === 'right') return BORDER_RIGHT_SX;
	else if (pos === 'bottom') return BORDER_BOTTOM_SX;
	else if (pos === 'left') return BORDER_LEFT_SX;
	return {};
};

const Link = forwardRef<HTMLAnchorElement, { href: string }>(({ href, ...props }, ref) => (
	<ReactRouterDomLink ref={ref} to={href} {...props} role={undefined} />
));

export const LeftSidebarItem = forwardRef<HTMLButtonElement, ILeftSidebarItemProps>(
	({ href, size = 100, active, borderPosition, sx = {}, ...props }, ref) => {
		const isLocationMatched = RouterUtils.isLocationAndRouteMatched(href);
		return (
			<Button
				{...props}
				ref={ref}
				href={href}
				variant="text"
				LinkComponent={Link}
				sx={{
					borderRadius: 0,
					backgroundColor: 'transparent',
					color: active || isLocationMatched ? 'primary.main' : 'grey.300',
					'&:hover': {
						color: 'primary.main',
					},
					...(getBorderSx(borderPosition) as any),
					...sx,
					width: size,
					height: size,
				}}
			/>
		);
	}
);
