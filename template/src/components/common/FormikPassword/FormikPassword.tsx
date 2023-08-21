import { FC, useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormikTextfield, FormikTextFieldProps } from '../FormikTextfield';

export const FormikPassword: FC<FormikTextFieldProps> = ({ ...props }) => {
	const [showPassword, setShowPassword] = useState(false);
	const { disabled } = props;

	return (
		<FormikTextfield
			{...props}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end" sx={{ color: 'inherit' }}>
						<IconButton
							onClick={() => setShowPassword(!showPassword)}
							onMouseDown={(e) => e.preventDefault()}
							edge="end"
							sx={{ color: disabled ? 'grey.500' : 'primary.main' }}
						>
							{showPassword ? <VisibilityOff color="inherit" /> : <Visibility color="inherit" />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};
