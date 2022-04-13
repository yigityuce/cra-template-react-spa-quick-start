import { FC } from 'react';
import { RouterLinkAnchor } from '@components/common';

export const Homepage: FC = () => {
	return (
		<>
			<h2>Landing Page</h2>
			<RouterLinkAnchor href="/portal">Portal</RouterLinkAnchor>
		</>
	);
};
