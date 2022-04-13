import { FC, useEffect } from 'react';
import styles from './Login.module.scss';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { CUSTOM_THEME } from '@utils';
import { FormikPassword, FormikTextfield, Logo } from '@components/common';

type FormFields = Extendable<{
	email: string;
	password: string;
}>;

export const Login: FC = () => {
	const { t } = useTranslation('common');
	const { state } = useLocation();
	const navigate = useNavigate();
	const navigateToNextPage = () => navigate((state as any)?.redirect || '/portal');

	const validationSchema = yup.object({
		email: yup.string().email(t('validation.email-invalid')).required(t('validation.email-required')),
		password: yup.string().min(8, t('validation.password-min-char-len')).required(t('validation.password-required')),
	});
	const formik = useFormik<FormFields>({
		initialValues: { email: '', password: '' },
		validateOnChange: true,
		validationSchema,
		onSubmit: ({ email, password }, _api) => {
			console.log('email:', email);
			console.log('password:', password);
			navigateToNextPage();
		},
	});

	return (
		<Grid
			container
			direction="column"
			flexGrow={1}
			classes={{ root: styles.Login }}
			sx={{ position: 'relative', backgroundColor: CUSTOM_THEME.brandColors.purple }}
		>
			<Logo sx={{ position: 'absolute', top: 64, left: 80 }} />
			<Grid item sx={{ marginTop: 22 }}>
				<div className={styles.HeaderImage} />
			</Grid>

			<Grid item>
				<form style={{ display: 'flex', flexGrow: 1 }} onSubmit={formik.handleSubmit}>
					<Grid container direction="column" alignItems="center">
						<Grid item sx={{ marginTop: -12 }}>
							<FormikTextfield
								formikApi={formik}
								name="email"
								placeholder={t('email')}
								variant="outlined"
								autoComplete="on"
							/>
						</Grid>

						<Grid item sx={{ marginTop: 4.5 }}>
							<FormikPassword
								formikApi={formik}
								name="password"
								placeholder={t('password')}
								variant="outlined"
								autoComplete="on"
							/>
						</Grid>
						<Grid item sx={{ marginTop: 6 }}>
							<Button type="submit" disabled={!formik.isValid || formik.isSubmitting} variant="contained" color="primary">
								{t('login.login-button')}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};
