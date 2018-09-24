import * as actionTypes from '../actions/actionTypes';
import { IOrderStore } from '../../models/store.model';
import { updateState } from '../utils';

const initialState: IOrderStore = {
  orders: [],
  loading: false,
  purchased: false
}

const purchaseBurgerSuccess = (state: IOrderStore, action: any) => {
  const newOrder = updateState(action.orderData, { id: action.orderId });
  return updateState(state, {
    loading: false,
    orders: [...state.orders, newOrder],
    purchased: true
  });
}

export const reducer = (state: IOrderStore = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.PURCHASE_INIT:
      return updateState(state, { purchased: false });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
     return purchaseBurgerSuccess(state, action)
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateState(state, { orders: action.orders, loading: false });
    case actionTypes.PURCHASE_BURGER_START:
    case actionTypes.FETCH_ORDERS_START:
      return updateState(state, { loading: true });
    case actionTypes.PURCHASE_BURGER_FAILED:
    case actionTypes.FETCH_ORDERS_FAILED:
      return updateState(state, { loading: false })
    default:
      return state
  }
}

export default reducer;