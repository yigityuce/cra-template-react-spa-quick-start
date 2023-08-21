import { FC, ReactNode } from 'react';
import { Stack, StackProps, Switch, SwitchProps, Typography, TypographyProps } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { FormikApiType } from '@models';

type SwitchBaseProps = SwitchProps & {
	name: string;
	touched?: boolean;
	error?: string;
};

const SwitchBase: FC<SwitchBaseProps> = ({ touched: _touched, error: _error, checked, name, inputProps, ...props }) => {
	return (
		<Switch
			checked={checked}
			inputProps={{
				name,
				...inputProps,
			}}
			{...props}
		/>
	);
};

const SwitchWithFormikField: FC<FieldProps & SwitchProps> = ({
	field: { name, value, onChange, onBlur },
	form: { getFieldMeta },
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	const { touched, error } = getFieldMeta(name);
	return (
		<SwitchBase
			{...props}
			name={name}
			checked={!!value}
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

const SwitchWithFormikApi: FC<{ api: FormikApiType } & Omit<SwitchProps, 'error' | 'helperText'> & { name: string; value?: boolean }> = ({
	api: { values, errors, touched, handleChange, handleBlur },
	name,
	onChange: inputOnChange,
	onBlur: inputOnBlur,
	...props
}) => {
	return (
		<SwitchBase
			{...props}
			name={name}
			checked={!!values[name]}
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

export type FormikSwitchProps = Omit<SwitchProps, 'title'> & {
	name: string;
	value?: boolean;
	title?: ReactNode;
	formikApi?: FormikApiType;
	withoutFormik?: boolean;
	typographyProps?: TypographyProps;
	containerProps?: StackProps;
	direction?: 'row' | 'column';
};

const DIRECTION_STYLE_MAP: Record<Exclude<FormikSwitchProps['direction'], undefined>, StackProps> = {
	column: {},
	row: {
		direction: 'row-reverse',
		spacing: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
};

export const FormikSwitch: FC<FormikSwitchProps> = ({
	name,
	title,
	formikApi,
	withoutFormik,
	typographyProps: { sx: typographySx, ...typographyProps } = {},
	direction = 'column',
	containerProps,
	...props
}) => {
	return (
		<Stack direction="column" {...DIRECTION_STYLE_MAP[direction]} {...containerProps}>
			{title ? (
				<Typography sx={{ marginBottom: 1.25, color: 'grey.800', ...typographySx }} variant="body2" {...typographyProps}>
					{title}
					{props.required ? '*' : ''}
				</Typography>
			) : null}
			{formikApi ? (
				<SwitchWithFormikApi name={name} api={formikApi} {...props} />
			) : withoutFormik ? (
				<SwitchBase name={name} {...props} />
			) : (
				<Field type="checkbox" name={name} component={SwitchWithFormikField} {...props} />
			)}
		</Stack>
	);
};
