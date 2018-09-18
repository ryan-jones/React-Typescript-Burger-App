import * as React from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { IBurgerState } from '../../models/Burger.model';
import Ingredients, { INGREDIENT_PRICES } from '../../models/Ingredients.model';
import axiosInstance from '../../axios/orders';
import { RouteComponentProps } from 'react-router-dom';


class BurgerBuilder extends React.Component<RouteComponentProps<{}>, IBurgerState> {

	public state: IBurgerState = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			meat: 0,
			salad: 0
		},
		modalActive: false,
		purchaseable: false,
		loading: false,
		totalPrice: 4
	};

	public componentDidMount() {
		axiosInstance.get('https://react-typescript-burger-app.firebaseio.com/ingredients.json')
			.then(res => this.setState({ ingredients: res.data }))
			.catch(err => console.log('error', err));
	}

	public addIngredientHandler = (type: string): void => {
		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] + 1
		};
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
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
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
		this.updatePurchaseableState(updatedIngredients);
	}

	public updatePurchaseableState = (updatedIngredients: Ingredients): void => {
		const sum = Object.keys(updatedIngredients)
			.map(key => updatedIngredients[key])
			.reduce((newSum, el) => newSum + el, 0);
		
		this.setState({ purchaseable: sum > 0 });
	}

	public purchaseHandler = (): void => this.setState({ modalActive: true });

	public purchaseCancelHandler = ():void => this.setState({ modalActive: false });

	public purchaseContinueHandler = (): void => {
		const params:string[] = [];
		Object.keys(this.state.ingredients).forEach((ingredient: string) => {
			params.push(`${encodeURIComponent(ingredient)}=${encodeURIComponent(this.state.ingredients[ingredient])}`)
		});
		params.push(`price=${this.state.totalPrice}`);
		this.props.history.push({ 
			pathname: '/checkout', 
			search: `?${params.join('&')}`
		});
	};

	public render(): JSX.Element {

		const disabledInfo = { ...this.state.ingredients };
		Object.keys(disabledInfo).forEach(key => disabledInfo[key] = this.state.ingredients[key] <= 0);
		
		const orderSummary = this.state.loading
			? <Spinner />
			:	<OrderSummary 
					ingredients={this.state.ingredients}
					totalPrice={this.state.totalPrice}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					/>
		return (
			<React.Fragment>
				<Modal show={this.state.modalActive} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
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