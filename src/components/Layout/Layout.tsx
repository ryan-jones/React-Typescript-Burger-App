import * as React from 'react';
import '../Layout/Layout.scss';

const layout = (props: any): JSX.Element => (
	<React.Fragment>
		<div>Toolbar, Sidedrawer, Backdrop</div>
		<main className='Content'>
			{props.children}
		</main>
	</React.Fragment>
);

export default layout;