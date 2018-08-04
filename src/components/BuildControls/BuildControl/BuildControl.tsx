import * as React from 'react';
import IBuildControl from '../../../models/BuildControl.model';
import './BuildControl.scss';

export const buildControl = (props: IBuildControl): JSX.Element => (
	<div className='BuildControl'>
		<div className='Label'>{props.label}</div>
		<button 
			onClick={props.removed} 
			disabled={props.disabled}
			className='Less'>Less</button>
		<button 
			onClick={props.added}
			className='More'>More</button>
	</div>
)

export default buildControl;