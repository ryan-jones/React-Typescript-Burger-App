import * as React from 'react';
import IBuildControl from '../../../models/BuildControl.model';
import './BuildControl.scss';

export const buildControl = (props: IBuildControl): JSX.Element => (
	<div className='BuildControl'>
		<div>{props.label}</div>
		<button onClick={props.removed} disabled={props.disabled}>Less</button>
		<button onClick={props.added}>More</button>
	</div>
)

export default buildControl;