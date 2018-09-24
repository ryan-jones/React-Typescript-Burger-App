import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}
export const reducer = (state = initialState, action: any) => {

  switch(action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      }
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      }
      return {
        ...state,
        loading: false,
        orders: [...state.orders, newOrder],
        purchased: true
      }
    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer;