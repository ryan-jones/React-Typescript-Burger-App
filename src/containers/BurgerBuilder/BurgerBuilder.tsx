import * as React from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import IBurgerState from '../../models/Burger.model';
import Ingredients, { INGREDIENT_PRICES } from '../../models/Ingredients.model';


class BurgerBuilder extends React.Component {

	public state: IBurgerState = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			meat: 0,
			salad: 0
		},
		modalActive: false,
		purchaseable: false,
		totalPrice: 4
	};

	public addIngredientHandler = (type: string): void => {
		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] + 1
		};
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		});
		this.updatePurchaseableState(updatedIngredients);
	}

	public removeIngredientHandler = (type: string): void => {
		if (this.state.ingredients[type] <= 0) { 
			return; 
		}; 
		const updatedIngredients = { 
			...this.state.ingredients,
			[type]: this.state.ingredients[type] - 1
		 };
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		});
		this.updatePurchaseableState(updatedIngredients);
	}

	public updatePurchaseableState = (updatedIngredients: Ingredients): void => {
		const sum = Object.keys(updatedIngredients)
			.map(key => updatedIngredients[key])
			.reduce( (newSum, el) => newSum + el, 0);
		
		this.setState({ purchaseable: sum > 0 });
	}

	public purchaseHandler = (): void => this.setState({ modalActive: true });

	public render() {

		const disabledInfo = { ...this.state.ingredients };
		Object.keys(disabledInfo).forEach(key => disabledInfo[key] = this.state.ingredients[key] <= 0);
		
		return (
			<React.Fragment>
				<Modal show={this.state.modalActive}>
					<OrderSummary ingredients={this.state.ingredients}/>
				</Modal>
				<Burger {...this.state.ingredients}/>
				<BuildControls 
					activateModal={this.purchaseHandler}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;