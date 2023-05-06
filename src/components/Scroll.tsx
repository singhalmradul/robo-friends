import { ReactNode } from 'react';

type ScrollProps = { children: ReactNode };
const Scroll = ({ children }: ScrollProps) => (
	<div
		style={{
			overflowY: 'scroll',
			border: '1px rgba(0,0,0,0.5)',
			height: '1100px',
		}}
	>
		{children}
	</div>
);
export default Scroll;
