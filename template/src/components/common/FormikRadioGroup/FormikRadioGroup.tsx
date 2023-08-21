import { FC, PropsWithChildren, ReactNode } from 'react';
import { Stack, StackProps, Typography, TypographyProps } from '@mui/material';

export type FormikRadioGroupProps = {
	title?: ReactNode;
	required?: boolean;
	typographyProps?: TypographyProps;
	containerProps?: StackProps;
};

export const FormikRadioGroup: FC<PropsWithChildren<FormikRadioGroupProps>> = ({
	title,
	required,
	typographyProps: { sx: typographySx, ...typographyProps } = {},
	containerProps,
	children,
}) => {
	return (
		<Stack direction="column" {...containerProps}>
			{title ? (
				<Typography sx={{ marginBottom: 1.25, color: 'grey.800', ...typographySx }} variant="body2" {...typographyProps}>
					{title}
					{required ? '*' : ''}
				</Typography>
			) : null}
			{children}
		</Stack>
	);
};
