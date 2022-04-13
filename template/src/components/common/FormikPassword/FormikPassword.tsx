import { FC, useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormikTextfield, FormikTextFieldProps } from '../FormikTextfield';

export const FormikPassword: FC<FormikTextFieldProps> = ({ ...props }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<FormikTextfield
			{...props}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end" sx={{ color: 'inherit' }}>
						<IconButton
							color="inherit"
							onClick={() => setShowPassword(!showPassword)}
							onMouseDown={(e) => e.preventDefault()}
							edge="end"
						>
							{showPassword ? <VisibilityOff color="inherit" /> : <Visibility color="inherit" />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};
