import * as React from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends React.Component<any> {

  public onCheckoutCanceledHandler = (): void => this.props.history.goBack();

  public onCheckoutContinuedHandler = (): void => this.props.history.replace('/checkout/contact');

  public render(): JSX.Element {
    console.log('purchased', this.props.purchased);
    const redirect = <Redirect to="/"/>;
    const wasPurchased = this.props.purchased ? redirect : null;
    const summary = this.props.ingredients 
      ? (
          <React.Fragment>
            <CheckoutSummary 
              ingredients={this.props.ingredients}
              onCheckoutCanceled={this.onCheckoutCanceledHandler}
              onCheckoutContinued={this.onCheckoutContinuedHandler}
            />
            <Route 
              path={`${this.props.match.path}/contact`} 
              component={ContactData}
            />
          </React.Fragment>
        )
      : {redirect}
    
    return (
      <div>
        {wasPurchased}
        {summary}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ingredients: state.burgerBuilder.ingredients,
  purchased: state.orders.purchased
});

export default connect(mapStateToProps)(Checkout);