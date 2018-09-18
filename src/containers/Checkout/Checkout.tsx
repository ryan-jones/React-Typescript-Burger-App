import * as React from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route, RouteComponentProps } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
class Checkout extends React.Component<RouteComponentProps<{}>, any > {

  public state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    price: 0
  };

  public componentWillMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (const param of query.entries()) {
      if (param[0] === 'price') {
        price = Number(param[1]);
      } else {
        ingredients[param[0]] = param[1];
      }
    }
    this.setState({ ingredients, price });
  }

  public onCheckoutCanceledHandler = (): void => {
    this.props.history.goBack();
  }

  public onCheckoutContinuedHandler = (): void => {
    this.props.history.replace('/checkout/contact');
  }

  public render(): JSX.Element {
    const { price, ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          onCheckoutCanceled={this.onCheckoutCanceledHandler}
          onCheckoutContinued={this.onCheckoutContinuedHandler}
         />
         <Route 
          path={`${this.props.match.path}/contact`} 
          render={(props) => <ContactData price={price} ingredients={ingredients} {...props} />}
        />
      </div>
    )
  }
}

export default Checkout;