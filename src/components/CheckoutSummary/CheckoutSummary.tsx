import * as React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import './CheckoutSummary.scss'
const checkoutSummary = (props: any): JSX.Element => {
  return (
    <div className="CheckoutSummary">
      <h1>Your glorious burger</h1>
      <div className="BurgerHolder">
        <Burger {...props.ingredients}/>
      </div>
      <Button type="text" clicked={props.onCheckoutCanceled} buttonType="Danger">Cancel</Button>
      <Button type="text" clicked={props.onCheckoutContinued} buttonType="Success">Continue</Button>

    </div>
  )
}
export default checkoutSummary;