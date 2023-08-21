import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { FormikApiType } from '@models';

export interface IFormikSubmitButtonProps extends ButtonProps {
	submitManual?: boolean;
	formik: FormikApiType;
}

export const FormikSubmitButton: FC<IFormikSubmitButtonProps> = ({ formik, submitManual, sx, onClick, ...props }) => {
	return (
		<Button
			type="submit"
			variant="contained"
			sx={{ marginX: 'auto !important', ...sx }}
			disabled={!formik.isValid || formik.isSubmitting}
			onClick={(e) => {
				submitManual && formik.submitForm();
				onClick?.(e);
			}}
			{...props}
		/>
	);
};
