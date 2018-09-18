import * as React from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import IStore from '../../models/store.model';

class Checkout extends React.Component<any> {

  public onCheckoutCanceledHandler = (): void => this.props.history.goBack();

  public onCheckoutContinuedHandler = (): void => this.props.history.replace('/checkout/contact');

  public render(): JSX.Element {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.props.ingredients}
          onCheckoutCanceled={this.onCheckoutCanceledHandler}
          onCheckoutContinued={this.onCheckoutContinuedHandler}
        />
        <Route 
          path={`${this.props.match.path}/contact`} 
          component={ContactData}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  ingredients: state.ingredients,
})

export default connect(mapStateToProps)(Checkout);