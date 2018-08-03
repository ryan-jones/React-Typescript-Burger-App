import * as React from 'react';
import { IBuildControls } from '../../models/BuildControl.model';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.scss';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Bacon', type: 'bacon' }
];

const buildControls = (props: IBuildControls): JSX.Element => (
	<div className='BuildControls'>
		<p>Current Price: {props.price.toFixed(2)}</p>
		{controls.map(control => {
			return <BuildControl 
								key={control.label} 
								label={control.label}
								added={() => props.ingredientAdded(control.type)}
								removed={() => props.ingredientRemoved(control.type)}
								disabled={props.disabled[control.type]} />
		})}
	</div>
);

export default buildControls;