import { forwardRef } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { Link, LinkProps } from '@mui/material';

export const RouterLinkAnchor = forwardRef<HTMLAnchorElement, LinkProps>(({ href = '', ...props }, ref) => (
	<Link ref={ref} component={ReactRouterDomLink} to={href} {...props} />
));
