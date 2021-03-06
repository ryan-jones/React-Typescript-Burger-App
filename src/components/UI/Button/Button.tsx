import * as React from 'react';
import { IButtonProps } from '../../../models/UIComponents.model';
import './Button.scss';

const button = (props: IButtonProps): JSX.Element => (
	<button onClick={props.clicked} className={props.buttonType} type={props.type}>
		{props.children}
	</button>
);

export default button;