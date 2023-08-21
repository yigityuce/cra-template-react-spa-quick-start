import { forwardRef } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { Button, ButtonProps } from '@mui/material';

export interface IRouterLinkButtonProps extends Omit<ButtonProps, 'LinkComponent'> {
	// href: string;
}

const Link = forwardRef<HTMLAnchorElement, { href: string }>(({ href, ...props }, ref) => (
	<ReactRouterDomLink ref={ref} to={href} {...props} role={undefined} />
));

export const RouterLinkButton = forwardRef<HTMLButtonElement, IRouterLinkButtonProps>(({ ...props }, ref) => {
	return <Button ref={ref} LinkComponent={Link} {...props} />;
});
