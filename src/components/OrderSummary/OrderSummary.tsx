import * as React from 'react';
import './OrderSummary.scss';

const orderSummary = (props: any): JSX.Element => {
	const summary = Object.keys(props.ingredients)
		.map((key, index) => (
			<li key={key + index}>
				<span className='capitalize'>{key}</span>: {props.ingredients[key]}
			</li>
		)
	);
	return (
		<React.Fragment>
			<h3>Your Order</h3>
			<p>Includes:</p>
			<ul>
				{summary}
			</ul>
			<p>Continue to Checkout?</p>
		</React.Fragment>
	)
};

export default orderSummary;