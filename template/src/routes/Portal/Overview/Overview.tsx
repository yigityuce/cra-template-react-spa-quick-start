import { FC, useState } from 'react';
import { Box, Button, Divider, Grid, InputAdornment, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { notificationService } from '@services';
import {
	FormikCheckbox,
	FormikNumber,
	FormikPassword,
	FormikRadio,
	FormikRadioGroup,
	FormikSlider,
	FormikSubmitButton,
	FormikSwitch,
	FormikTextfield,
	ModalDialog,
	RouterLinkAnchor,
	RouterLinkButton,
} from '@components/common';
import { useTranslation } from 'react-i18next';

enum Gender {
	MALE = 'Male',
	FEMALE = 'Female',
	NON_BINARY = 'Non Binary',
}

type FormFields = Extendable<{
	name?: string;
	surname?: string;
	email?: string;
	password?: string;
	age?: number;
	weight?: number;
	luckyNumber?: number;
	gender?: Gender;
	advertisement?: boolean;
	cookieConcent?: string[];
}>;

export const Overview: FC = () => {
	const { t } = useTranslation('common');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const formik = useFormik<FormFields>({
		initialValues: {
			name: '',
			surname: '',
			email: '',
			password: '',
			age: undefined,
			weight: 80.7,
			luckyNumber: 4,
			gender: '',
			advertisement: false,
			cookieConcent: [],
		},
		enableReinitialize: true,
		validateOnChange: true,
		validateOnMount: true,
		validationSchema: yup.object({
			name: yup.string().required(t('validation.field-required')),
			surname: yup.string().required(t('validation.field-required')),
			email: yup.string().email(t('validation.email-invalid')).required(t('validation.field-required')),
			password: yup.string().required(t('validation.field-required')),
			age: yup.number().required(t('validation.field-required')),
			weight: yup.number().required(t('validation.field-required')),
			luckyNumber: yup.number().required(t('validation.field-required')),
		}),
		onSubmit: (values, api) => {
			console.log('submitted values:', values);
			api.setSubmitting(false);
		},
	});
	const { handleSubmit } = formik;

	return (
		<Grid container spacing={4} sx={{ padding: 3 }}>
			<Grid item xs={3}>
				<Stack direction="column" spacing={2} alignItems="center">
					<Typography variant="body2">
						<strong>Feature:</strong> Notification
					</Typography>
					<Button variant="contained" color="error" onClick={() => notificationService.sendError('Error test notification')}>
						Send Error
					</Button>
				</Stack>
			</Grid>
			<Grid item xs={3}>
				<Stack direction="column" spacing={2} alignItems="center">
					<Typography variant="body2">
						<strong>Feature:</strong> Modal Dialog
					</Typography>
					<Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
					<ModalDialog title="Dialog Title" disablePortal maxWidth="sm" open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
						<Divider light />
						<Stack direction="row" sx={{ padding: 4 }} spacing={6}>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere venenatis felis. Fusce molestie
								semper tristique. Aenean eget nunc vel lorem facilisis cursus. Vivamus sed bibendum est. Suspendisse
								convallis odio quis nisi tempor, quis vulputate erat pretium. Nullam a odio luctus, cursus tellus sit amet,
								iaculis quam. Cras et consequat leo. Ut pulvinar libero nec justo dictum, eu volutpat massa ullamcorper.
								Integer finibus leo at ultricies gravida. Integer non lectus dolor.
							</Typography>
						</Stack>
					</ModalDialog>
				</Stack>
			</Grid>
			<Grid item xs={3}>
				<Stack direction="column" spacing={2} alignItems="center">
					<Typography variant="body2">
						<strong>Feature:</strong> Router Link - Button
					</Typography>
					<RouterLinkButton variant="outlined" href="/home">
						Navigate to home
					</RouterLinkButton>
				</Stack>
			</Grid>
			<Grid item xs={3}>
				<Stack direction="column" spacing={2} alignItems="center">
					<Typography variant="body2">
						<strong>Feature:</strong> Router Link - Anchor
					</Typography>
					<RouterLinkAnchor href="/home">Navigate to home</RouterLinkAnchor>
				</Stack>
			</Grid>
			<Grid item xs={12} sx={{ marginTop: 2 }}>
				<Stack direction="column" spacing={2} alignItems="center">
					<Typography variant="body2">
						<strong>Feature:</strong> Formik UI Components
					</Typography>
					<Box component="form" sx={{ width: 1.0 }} onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<FormikTextfield formikApi={formik} name="name" title="Name" placeholder="Enter your name" required />
							</Grid>
							<Grid item xs={6}>
								<FormikTextfield
									formikApi={formik}
									name="surname"
									title="Surname"
									placeholder="Enter your surname"
									required
								/>
							</Grid>
							<Grid item xs={6}>
								<FormikTextfield formikApi={formik} name="email" title="Email" placeholder="Enter your email" required />
							</Grid>
							<Grid item xs={6}>
								<FormikPassword
									formikApi={formik}
									name="password"
									title="Password"
									placeholder="Enter your password"
									required
								/>
							</Grid>
							<Grid item xs={6}>
								<FormikNumber
									formikApi={formik}
									name="age"
									title="Age"
									placeholder="Enter your age"
									required
									format={{ decimalScale: 0 }}
								/>
							</Grid>
							<Grid item xs={6}>
								<FormikNumber
									formikApi={formik}
									name="weight"
									title="Weight"
									placeholder="Enter your weight"
									required
									InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
									format={{ decimalScale: 2 }}
								/>
							</Grid>
							<Grid item xs={6}>
								<FormikSlider
									formikApi={formik}
									name="luckyNumber"
									title="Lucky Number"
									placeholder="Enter your lucky number"
									required
									min={0}
									max={10}
									step={1}
								/>
							</Grid>

							<Grid item xs={6}>
								<FormikRadioGroup title="Gender">
									<Stack direction="row">
										<FormikRadio
											formikApi={formik}
											name="gender"
											value={Gender.MALE}
											formControlLabelProps={{ label: Gender.MALE }}
										/>
										<FormikRadio
											formikApi={formik}
											name="gender"
											value={Gender.FEMALE}
											formControlLabelProps={{ label: Gender.FEMALE }}
										/>
									</Stack>
								</FormikRadioGroup>
							</Grid>

							<Grid item xs={6}>
								<FormikSwitch formikApi={formik} name="advertisement" title="Advertisement" />
							</Grid>

							<Grid item xs={6}>
								<Stack direction="column" spacing={1}>
									<Typography sx={{ color: 'grey.800' }} variant="body2">
										Cookie Consents
									</Typography>
									<Stack direction="row" spacing={2}>
										<FormikCheckbox
											formikApi={formik}
											name="cookieConcent"
											value="general"
											formControlLabelProps={{
												label: 'General',
												sx: { marginRight: 0 },
											}}
										/>
										<FormikCheckbox
											formikApi={formik}
											name="cookieConcent"
											value="personalized"
											formControlLabelProps={{
												label: 'Personalized',
												sx: { marginRight: 0 },
											}}
										/>
									</Stack>
								</Stack>
							</Grid>
							<Grid item xs={12} sx={{ display: 'flex' }} justifyContent="center">
								<FormikSubmitButton formik={formik}>Submit</FormikSubmitButton>
							</Grid>
						</Grid>
					</Box>
				</Stack>
			</Grid>
		</Grid>
	);
};
