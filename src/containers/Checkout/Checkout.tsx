import * as React from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
class Checkout extends React.Component {

  public state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  public render(): JSX.Element {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default Checkout;