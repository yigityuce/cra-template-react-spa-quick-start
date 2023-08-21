import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { RouterUtils } from '@utilities';

type BorderPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ILeftSidebarItemProps extends Omit<ButtonProps, 'classes' | 'size' | 'LinkComponent' | 'variant'> {
	size?: number;
	active?: boolean;
	borderPosition?: BorderPosition | BorderPosition[];
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

const getBorderSx = (pos?: BorderPosition): ILeftSidebarItemProps['sx'] => {
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
	({ href, size = 64, active, borderPosition, sx = {}, ...props }, ref) => {
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
					boxSizing: 'border-box',
					color: active || isLocationMatched ? 'primary.main' : 'grey.300',
					'&:hover': {
						color: 'primary.main',
					},
					...((Array.isArray(borderPosition)
						? borderPosition.reduce((acc, cur) => ({ ...acc, ...getBorderSx(cur) }), {})
						: getBorderSx(borderPosition)) as Record<string, unknown>),
					...sx,
					width: size,
					minWidth: size,
					maxWidth: size,
					height: size,
					minHeight: size,
					maxHeight: size,
				}}
			/>
		);
	},
);
