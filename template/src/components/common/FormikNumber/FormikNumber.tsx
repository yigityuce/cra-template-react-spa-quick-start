import { FC, forwardRef } from 'react';
import { NumericFormat, InputAttributes, NumericFormatProps } from 'react-number-format';
import { FormikTextfield, FormikTextFieldProps } from '../FormikTextfield';

interface CustomProps {
	onChange: (event: { target: { name: string; value: number } }) => void;
	name: string;
}

export const NumberFormatCustom = forwardRef<NumericFormatProps<InputAttributes>, CustomProps>((props, ref) => {
	const { onChange, ...other } = props;

	return (
		<NumericFormat<InputAttributes>
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: +values.value,
					},
				});
			}}
		/>
	);
});

export const FormikNumber: FC<FormikTextFieldProps & { format?: NumericFormatProps; decimal?: number }> = ({
	format: { defaultValue: _, ...format } = {},
	decimal,
	...props
}) => {
	return (
		<FormikTextfield
			{...props}
			type="text"
			InputProps={{
				inputComponent: NumberFormatCustom as any,
				inputProps: { ...{ thousandSeparator: true, isNumericString: true, decimalScale: decimal }, ...format },
			}}
		/>
	);
};
