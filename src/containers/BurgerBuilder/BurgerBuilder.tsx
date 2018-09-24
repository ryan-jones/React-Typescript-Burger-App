import * as React from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { IBurgerState } from '../../models/Burger.model';
import Ingredients from '../../models/Ingredients.model';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Dispatch } from 'redux';


class BurgerBuilder extends React.Component<any> {

	public state: IBurgerState = {
		modalActive: false,
		loading: false,
	};

	public componentDidMount() {
		this.props.onInitIngredients();
	}

	public updatePurchaseableState = (updatedIngredients: Ingredients): boolean => {
		const sum = Object.keys(updatedIngredients)
			.map(key => updatedIngredients[key])
			.reduce((newSum, el) => newSum + el, 0);
		return sum > 0;
	}

	public purchaseHandler = (): void => this.setState({ modalActive: true });

	public purchaseCancelHandler = (): void => this.setState({ modalActive: false });

	public purchaseContinueHandler = (): void => {
		this.props.onInitPurchase();
		this.props.history.push('/checkout');
	}

	public render(): JSX.Element {

		const disabledInfo = { ...this.props.ingredients };
		Object.keys(disabledInfo).forEach(key => disabledInfo[key] = this.props.ingredients[key] <= 0);
		
		const orderSummary = this.state.loading
			? <Spinner />
			:	<OrderSummary 
					ingredients={this.props.ingredients}
					totalPrice={this.props.totalPrice}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					/>
		const fetchedIngredients = this.props.error
			? <p> There was an error while loading your ingredients </p>
			: <Burger {...this.props.ingredients} />

		return (
			<React.Fragment>
				<Modal show={this.state.modalActive} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{fetchedIngredients}
				<BuildControls 
					activateModal={this.purchaseHandler}
					price={this.props.totalPrice}
					purchaseable={this.updatePurchaseableState(this.props.ingredients)}
					ingredientAdded={(ingredientName: string) => this.props.onIngredientAdded(ingredientName)}
					ingredientRemoved={(ingredientName: string) => this.props.onIngredientRemoved(ingredientName)}
					disabled={disabledInfo}/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any): object => {
	const { ingredients, totalPrice, error } = state.burgerBuilder;
	return {
		ingredients,
		totalPrice,
		error 
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onInitIngredients: () => dispatch(actions.initIngredients()),
	onInitPurchase: () => dispatch(actions.purchaseInit()),
	onIngredientAdded: (ingredientName: string) => dispatch(actions.addIngredient(ingredientName)),
	onIngredientRemoved: (ingredientName: string) => dispatch(actions.removeIngredient(ingredientName))
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);