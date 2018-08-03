import * as React from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import IBurgerState from '../../models/Burger.model';
import { INGREDIENT_PRICES } from '../../models/Ingredients.model';

class BurgerBuilder extends React.Component {

	public state: IBurgerState = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			meat: 0,
			salad: 0
		},
		totalPrice: 4
	};

	public addIngredientHandler = (type: string) => {
		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] + 1
		};
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		})
	}

	public removeIngredientHandler = (type: string) => {
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
		})
	}

	public render() {

		const disabledInfo = { ...this.state.ingredients };
		Object.keys(disabledInfo).forEach(key => disabledInfo[key] = this.state.ingredients[key] <= 0);
		
		return (
			<React.Fragment>
				<Burger {...this.state.ingredients}/>
				<BuildControls 
					price={this.state.totalPrice}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;