import { FC, ReactNode } from 'react';
import { Dialog, DialogContent, DialogContentProps, DialogProps, DialogTitle, DialogTitleProps, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface IModalDialogProps extends Omit<DialogProps, 'title'> {
	title?: ReactNode;
	titleProps?: DialogTitleProps;
	noCloseIcon?: boolean;
	contentProps?: Omit<DialogContentProps, 'dividers'>;
	dividers?: boolean;
}

export const ModalDialog: FC<IModalDialogProps> = ({
	children,
	title,
	titleProps: { sx: titleSx, ...titleProps } = {},
	noCloseIcon,
	contentProps,
	dividers,
	...props
}) => {
	const { onClose } = props;
	return (
		<Dialog fullWidth maxWidth="md" {...props}>
			<DialogTitle sx={{ paddingY: 3, display: 'flex', justifyContent: 'center', position: 'relative', ...titleSx }} {...titleProps}>
				{title}
				{!noCloseIcon && (
					<IconButton
						color="inherit"
						sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)' }}
						onClick={(e) => onClose?.(e, 'escapeKeyDown')}
					>
						<CloseIcon />
					</IconButton>
				)}
			</DialogTitle>
			<DialogContent sx={{ p: 0 }} dividers={dividers} {...contentProps}>
				{children}
			</DialogContent>
		</Dialog>
	);
};
