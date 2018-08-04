import * as React from 'react';
import './Modal.scss';

const modal = (props: any): JSX.Element => {
	const styles = { 
		opacity: props.show ? 1 : 0, 
		transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
	} 
	return (
		<div className='Modal' style={ styles }>
			{props.children}
		</div>
	);
}


export default modal;