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

export const fetchOrdersSuccess = (orders: any) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders
});

export const fetchOrdersFail = (error: any) => ({
  type: actionTypes.FETCH_ORDERS_FAILED,
  error
}) 

export const fetchOrdersStart = () => ({
  type: actionTypes.FETCH_ORDERS_START
});

export const fetchOrders = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchOrdersStart());
    axiosInstance.get('/orders.json')
      .then((res: any) => {
        const fetchedOrders = Object.keys(res.data).reduce((currentArray, newKey) => {
          return [...currentArray, { ...res.data[newKey], id: newKey }];
        }, []);
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err: any) => dispatch(fetchOrdersFail(err)))
  }
}