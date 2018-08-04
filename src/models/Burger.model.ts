import Ingredients from "./Ingredients.model";

interface IBurgerState {
	ingredients: Ingredients;
	totalPrice: number;
	purchaseable: boolean;
	modalActive: boolean;
}

export default IBurgerState;