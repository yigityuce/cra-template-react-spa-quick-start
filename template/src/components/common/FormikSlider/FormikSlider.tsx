import { FC, PropsWithChildren, ReactNode } from 'react';
import { FormControl, FormHelperText, Slider, SliderProps, Stack, StackProps, Typography, TypographyProps } from '@mui/material';
import { FormikApiType } from '@models';

const SliderWithFormikApi: FC<{ api: FormikApiType } & SliderProps & { name: string; value?: any }> = ({
	api: { values, errors, touched, handleChange, handleBlur },
	name,
	onChange: sliderOnChangeCommitted,
	onBlur: sliderOnBlur,
	...props
}) => {
	const hasError = touched && !!errors[name];
	return (
		<FormControl error={hasError} variant="standard">
			<Slider
				name={name}
				{...props}
				value={values[name]}
				onChange={(e, value, thumb) => {
					handleChange(e);
					sliderOnChangeCommitted?.(e, value, thumb);
				}}
				onBlur={(e) => {
					handleBlur(e);
					sliderOnBlur?.(e);
				}}
			/>
			{hasError ? <FormHelperText>{errors[name] as string}</FormHelperText> : null}
		</FormControl>
	);
};

export type FormikSliderProps = SliderProps & {
	name: string;
	title?: ReactNode;
	formikApi: FormikApiType;
	typographyProps?: TypographyProps;
	containerProps?: StackProps;
	required?: boolean;
};

export const FormikSlider: FC<PropsWithChildren<FormikSliderProps>> = ({
	name,
	title,
	formikApi,
	typographyProps: { sx: typographySx, ...typographyProps } = {},
	containerProps,
	...props
}) => {
	return (
		<Stack direction="column" spacing={1} {...containerProps}>
			{title ? (
				<Typography sx={{ marginBottom: 1.25, color: 'grey.800', ...typographySx }} variant="body2" {...typographyProps}>
					{title}
					{props.required ? '*' : ''}
				</Typography>
			) : null}
			<SliderWithFormikApi name={name} api={formikApi} {...props} />
		</Stack>
	);
};
