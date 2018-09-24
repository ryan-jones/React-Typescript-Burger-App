import * as actionTypes from '../actions/actionTypes';
import { INGREDIENT_PRICES } from '../../models/Ingredients.model';
import IStore from '../../models/store.model';

const initialState: IStore = {
  ingredients: {},
  error: false,
  totalPrice: 0
}

const reducer = (state: IStore = initialState, action: any) => {

  switch(action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      }
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }
      }
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
        totalPrice: 0
      }
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default reducer;