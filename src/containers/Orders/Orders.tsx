import * as React from 'react';
import Order from './Order/Order';
import axios from '../../axios/orders';
import withErrorHandler from '../../hoc/withError/withError';

class Orders extends React.Component {

  public state = {
    orders: [],
    loading: true
  }
  public componentDidMount = (): void => {
    axios.get('/orders.json')
      .then((res: any) => {
        const fetchedOrders = [];
        for (const key in res.data) {
          if (res.data[key]) {
            fetchedOrders.push({ ...res.data[key], id: key })
          }
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err: any) => this.setState({ loading: false }))
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.state.orders.map((order: any) => {
          return <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        })}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);