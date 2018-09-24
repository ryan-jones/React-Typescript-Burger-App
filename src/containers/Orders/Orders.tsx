import * as React from 'react';
import Order from './Order/Order';
import axios from '../../axios/orders';
import withErrorHandler from '../../hoc/withError/withError';
import * as actions from '../../store/actions'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { IStore } from '../../models/store.model';

class Orders extends React.Component<any> {

  public componentDidMount() {
    this.props.onFetchOrders();
    console.log('we mounted and fetched');
  }

  public render(): JSX.Element {
    console.log('are we loading', this.props.loading);
    const orders = this.props.orders.map((order: any) => (
      <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
    ));

    return (
      <div>
       {this.props.loading ? <Spinner /> : orders}
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  orders: state.orders.orders,
  loading: state.orders.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetchOrders: () => dispatch(actions.fetchOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));