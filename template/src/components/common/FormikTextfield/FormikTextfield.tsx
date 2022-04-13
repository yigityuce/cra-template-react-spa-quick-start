import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Field, FieldProps, useFormik } from 'formik';

type FormikApiType = ReturnType<typeof useFormik>;

type TextInputBaseProps = Omit<TextFieldProps, 'error' | 'helperText'> & {
	name: string;
	value: any;
	touched?: boolean;
	error?: string;
};

const TextInputBase: FC<TextInputBaseProps> = ({ touched, error, ...props }) => {
	return <TextField error={touched && !!error} helperText={touched && error} {...props} />;
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
	formikApi?: FormikApiType;
};

export const FormikTextfield: FC<FormikTextFieldProps> = ({ name, formikApi, ...props }) => {
	return formikApi ? (
		<TextInputWithFormikApi name={name} api={formikApi} {...props} />
	) : (
		<Field name={name} component={TextInputWithFormikField} {...props} />
	);
};
