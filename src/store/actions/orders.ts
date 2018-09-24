import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';
import axiosInstance from '../../axios/orders';

export const purchaseBurgerSuccess = (orderId: number, orderData: object) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId,
    orderData
  }
}

export const purchaseBurgerFailed = (error: Error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error
  }
}

export const purchaseBurgerStart = () => ({
  type: actionTypes.PURCHASE_BURGER_START,
});

export const purchaseInit = () => ({
  type: actionTypes.PURCHASE_INIT
});

export const purchaseBurger = (orderData: object) => {
  return (dispatch: Dispatch) => {
    dispatch(purchaseBurgerStart());

    axiosInstance.post('/orders.json', orderData)
			.then(_ => dispatch(purchaseBurgerSuccess(_.data, orderData)))
			.catch(_ => dispatch(purchaseBurgerFailed(_)));
  }
}