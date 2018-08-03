import Ingredients from "./Ingredients.model";

interface IBurgerState {
	ingredients: Ingredients;
	totalPrice: number;
}

export default IBurgerState;