import Ingredients from "./Ingredients.model";

export interface IStore {
  orders: IOrderStore;
  burgerBuilder: IBurgerBuilderStore
}

export interface IBurgerBuilderStore {
  totalPrice: number;
  ingredients: Ingredients | {} ;
  error: boolean;
}

export interface IOrderStore {
  orders: any;
  loading: boolean;
  purchased: boolean;
};

