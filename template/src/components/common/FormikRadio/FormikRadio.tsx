import { FC } from 'react';
import { FormControlLabel, FormControlLabelProps, Radio, RadioProps } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { FormikApiType } from '@models';

type RadioBaseProps = RadioProps & {
	name: string;
	touched?: boolean;
	error?: string;
};

const RadioBase: FC<RadioBaseProps> = ({ touched, error, ...props }) => {
	return <Radio color={touched && !!error ? 'error' : 'primary'} {...props} />;
};

const RadioWithFormikField: FC<FieldProps & RadioProps> = ({
	field: { name, value, onChange, onBlur },
	form: { getFieldMeta },
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	const { touched, error } = getFieldMeta(name);
	return (
		<RadioBase
			{...props}
			name={name}
			checked={value === props.value}
			onChange={(e, checked) => {
				onChange(e);
				inputOnChange?.(e, checked);
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

const RadioWithFormikApi: FC<{ api: FormikApiType } & Omit<RadioProps, 'error' | 'helperText'> & { name: string; value: any }> = ({
	api: { values, errors, touched, handleChange, handleBlur },
	name,
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	return (
		<RadioBase
			{...props}
			name={name}
			checked={values[name] === props.value}
			onChange={(e, checked) => {
				handleChange(e);
				inputOnChange?.(e, checked);
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

export type FormikRadioProps = RadioProps & {
	name: string;
	value: any;
	formikApi?: FormikApiType;
	withoutFormik?: boolean;
	formControlLabelProps?: Omit<FormControlLabelProps, 'control'>;
};

export const FormikRadio: FC<FormikRadioProps> = ({ name, formikApi, withoutFormik, formControlLabelProps, ...props }) => {
	return (
		<FormControlLabel
			label=""
			{...formControlLabelProps}
			control={
				formikApi ? (
					<RadioWithFormikApi name={name} api={formikApi} {...props} />
				) : withoutFormik ? (
					<RadioBase name={name} {...props} />
				) : (
					<Field type="radio" name={name} component={RadioWithFormikField} {...props} />
				)
			}
		/>
	);
};
