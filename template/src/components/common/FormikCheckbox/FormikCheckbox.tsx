import { FC } from 'react';
import { Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { FormikApiType } from '@models';

const safeValueAsArray = (value: unknown) => (Array.isArray(value) ? value : []);

type CheckboxBaseProps = CheckboxProps & {
	name: string;
	touched?: boolean;
	error?: string;
};

const CheckboxBase: FC<CheckboxBaseProps> = ({ touched, error, ...props }) => {
	return <Checkbox color={touched && !!error ? 'error' : 'primary'} {...props} />;
};

const CheckboxWithFormikField: FC<FieldProps & CheckboxProps> = ({
	field: { name, value, onChange, onBlur },
	form: { getFieldMeta },
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	const { touched, error } = getFieldMeta(name);
	return (
		<CheckboxBase
			{...props}
			name={name}
			checked={safeValueAsArray(value).includes(props.value)}
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

const CheckboxWithFormikApi: FC<{ api: FormikApiType } & Omit<CheckboxProps, 'error' | 'helperText'> & { name: string; value: any }> = ({
	api: { values, errors, touched, handleChange, handleBlur },
	name,
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	return (
		<CheckboxBase
			{...props}
			name={name}
			checked={safeValueAsArray(values[name]).includes(props.value)}
			onChange={(e, checked) => {
				// const newValue = (Array.isArray(values[name]) ? values[name] : []).filter((val: any) => val !== props.value);
				// checked && newValue.push(props.value);
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

export type FormikCheckboxProps = CheckboxProps & {
	name: string;
	value: any;
	formikApi?: FormikApiType;
	withoutFormik?: boolean;
	formControlLabelProps?: Omit<FormControlLabelProps, 'control'>;
};

export const FormikCheckbox: FC<FormikCheckboxProps> = ({ name, formikApi, withoutFormik, formControlLabelProps, ...props }) => {
	return (
		<FormControlLabel
			label=""
			{...formControlLabelProps}
			control={
				formikApi ? (
					<CheckboxWithFormikApi name={name} api={formikApi} {...props} />
				) : withoutFormik ? (
					<CheckboxBase name={name} {...props} />
				) : (
					<Field type="checkbox" name={name} component={CheckboxWithFormikField} {...props} />
				)
			}
		/>
	);
};
