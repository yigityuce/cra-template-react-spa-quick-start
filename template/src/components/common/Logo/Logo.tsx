import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as LogoSvg } from '@assets/svg/logo.svg';

export const Logo: FC<SvgIconProps> = ({ sx, ...rest }) => {
	const { width = 141, height = 100 } = rest;

	return <SvgIcon component={LogoSvg} sx={{ width, height, ...sx }} viewBox={`0 0 842 595`} {...rest} />;
};
