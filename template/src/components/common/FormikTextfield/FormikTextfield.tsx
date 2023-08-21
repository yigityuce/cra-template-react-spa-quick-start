import { FC, ReactNode } from 'react';
import { Stack, StackProps, TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { FormikApiType } from '@models';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type TextInputBaseProps = Omit<TextFieldProps, 'error' | 'helperText'> & {
	name: string;
	value: any;
	touched?: boolean;
	error?: string;
};

const TextInputBase: FC<TextInputBaseProps> = ({ touched, error, value, placeholder, SelectProps, ...props }) => {
	return (
		<TextField
			error={touched && !!error}
			helperText={touched && error}
			InputLabelProps={{
				sx: {
					'&.MuiInputLabel-root': {
						color: 'grey.800',
					},
					'&.Mui-focused': {
						color: 'grey.800',
					},
				},
			}}
			SelectProps={{
				IconComponent: KeyboardArrowDownIcon,
				displayEmpty: true,
				renderValue: value ? undefined : () => <Typography sx={{ color: 'grey.500' }}>{placeholder || ''}</Typography>,
				...SelectProps,
			}}
			placeholder={placeholder}
			value={value}
			{...props}
		/>
	);
};

const TextInputWithFormikField: FC<FieldProps & Omit<TextFieldProps, 'error' | 'helperText'>> = ({
	field: { name, value, onChange, onBlur },
	form: { getFieldMeta },
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	const { touched, error } = getFieldMeta(name);
	return (
		<TextInputBase
			{...props}
			name={name}
			value={value}
			onChange={(e) => {
				onChange(e);
				inputOnChange?.(e);
			}}
			onBlur={(e) => {
				onBlur(e);
				inputOnBlur?.(e);
			}}
			error={error}
			touched={touched}
		/>
	);
};

const TextInputWithFormikApi: FC<{ api: FormikApiType } & Omit<TextFieldProps, 'error' | 'helperText'> & { name: string }> = ({
	api: { values, errors, touched, handleChange, handleBlur },
	name,
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	return (
		<TextInputBase
			{...props}
			name={name}
			value={values[name]}
			onChange={(e) => {
				handleChange(e);
				inputOnChange?.(e);
			}}
			onBlur={(e) => {
				handleBlur(e);
				inputOnBlur?.(e);
			}}
			error={errors[name] as string}
			touched={touched[name] as boolean}
		/>
	);
};

export type FormikTextFieldProps = TextFieldProps & {
	name: string;
	title?: ReactNode;
	formikApi?: FormikApiType;
	typographyProps?: TypographyProps;
	containerProps?: StackProps;
	withoutFormik?: boolean;
	error?: string;
};

export const FormikTextfield: FC<FormikTextFieldProps> = ({
	name,
	title,
	formikApi,
	typographyProps: { sx: typographySx, ...typographyProps } = {},
	containerProps,
	withoutFormik,
	...props
}) => {
	return (
		<Stack direction="column" {...containerProps}>
			{title ? (
				<Typography sx={{ marginBottom: 1.25, color: 'grey.800', ...typographySx }} variant="body2" {...typographyProps}>
					{title}
					{props.required ? '*' : ''}
				</Typography>
			) : null}
			{formikApi ? (
				<TextInputWithFormikApi name={name} api={formikApi} {...props} />
			) : withoutFormik ? (
				<TextInputBase name={name} value="" {...props} />
			) : (
				<Field name={name} component={TextInputWithFormikField} {...props} />
			)}
		</Stack>
	);
};
