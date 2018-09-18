import Ingredients from "./Ingredients.model";

export default interface IStore {
  totalPrice: number;
  ingredients: Ingredients;
}