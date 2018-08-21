import Ingredients from "./Ingredients.model";

export interface IBurgerState {
	ingredients: Ingredients;
	totalPrice: number;
	purchaseable: boolean;
	modalActive: boolean;
	loading: boolean;
}

export interface IOrderSummary {
	ingredients: Ingredients;
	totalPrice: number;
	purchaseCanceled: () => void;
	purchaseContinued: () => void;
}