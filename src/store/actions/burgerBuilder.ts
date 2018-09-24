import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';
import axiosInstance from '../../axios/orders';
import Ingredient from '../../components/Ingredient/Ingredient';

export const addIngredient = (ingredientName: string): any => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName
  }
}

export const removeIngredient = (ingredientName: string): any => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName
  }
}

export const setIngredients = (ingredients: Ingredient[]) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  }
}

export const initIngredients = (): any => {
  return (dispatch: Dispatch) => {
    axiosInstance.get('https://react-typescript-burger-app.firebaseio.com/ingredients.json')
    .then(res => dispatch(setIngredients(res.data)))
    .catch((err: any) => dispatch(fetchIngredientsFailed()));
  }
}