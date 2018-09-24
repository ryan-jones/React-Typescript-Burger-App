import * as actionTypes from '../actions/actionTypes';
import { INGREDIENT_PRICES } from '../../models/Ingredients.model';
import { IBurgerBuilderStore } from '../../models/store.model';
import { updateState } from '../utils';

const initialState: IBurgerBuilderStore = {
  ingredients: {},
  error: false,
  totalPrice: 0
}

const addIngredient = (state: IBurgerBuilderStore, action: any) => {
  return updateState(state, {
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    ingredients: updateState(state.ingredients, {
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    })
  });
}

const removeIngredient = (state: IBurgerBuilderStore, action: any) => {
  return updateState(state, {
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    ingredients: updateState(state.ingredients, {
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    })
  });
}

const setIngredients = (state: IBurgerBuilderStore, action: any) => {
  return updateState(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 0
  })
}

const reducer = (state: IBurgerBuilderStore = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT: 
      return addIngredient(state, action);  
    case actionTypes.REMOVE_INGREDIENT: 
      return removeIngredient(state, action);   
    case actionTypes.SET_INGREDIENTS: 
      return setIngredients(state, action); 
    case actionTypes.FETCH_INGREDIENTS_FAILED: 
      return updateState(state, { error: true });
    default: 
      return state
  }
}

export default reducer;