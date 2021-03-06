import * as React from 'react';
import { IOrderSummary } from '../../models/Burger.model';
import Button from '../UI/Button/Button';
import './OrderSummary.scss';

class OrderSummary extends React.Component {
	public props: IOrderSummary;

	public render(): JSX.Element {

		const summary: JSX.Element[] = Object.keys(this.props.ingredients)
			.map((key, index) => (
				<li key={key + index}>
					<span className='capitalize'>{key}</span>: {this.props.ingredients[key]}
				</li>
			)
		);
		return (
			<div className="Align">
			<h3>Your Order</h3>
			<p>Includes:</p>
			<ul>
				{summary}
			</ul>
			<p>Total Price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
			<p>Continue to Checkout?</p>
			<Button type="text" clicked={this.props.purchaseCanceled} buttonType='Danger'>CANCEL</Button>
			<Button type="text" clicked={this.props.purchaseContinued} buttonType='Success'>CONTINUE</Button>
		</div>
		)
	}


} 


export default OrderSummary;