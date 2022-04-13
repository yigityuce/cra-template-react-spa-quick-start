import { FC } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { Link, LinkProps } from '@mui/material';

export const RouterLinkAnchor: FC<LinkProps> = ({ href = '', ...props }) => <Link component={ReactRouterDomLink} to={href} {...props} />;
