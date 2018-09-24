import * as React from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class ContactData extends React.Component<any, any> {

  public state = {
    orderForm: {
      name: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your street',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      postalcode: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your postal code',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementtype: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email',
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementtype: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest',
        validation: {},
        valid: true
      },
    },   
  }

  public orderHandler = (event: any): void => {
    event.preventDefault();

    const orderData = Object.keys(this.state.orderForm).reduce((data, newValue) => {
      data[newValue] = this.state.orderForm[newValue].value;
      return data;
    }, {});

		const order = { 
      ingredients: this.props.ingredients, 
      price: this.props.price, 
      orderData
    };

    this.props.onOrderBurger(order);
  }

  public inputChangedHandler = (event: any, inputValue: string): void => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedElement = { ...updatedOrderForm[inputValue] };
    updatedElement.value = event.target.value;
    updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
    updatedElement.touched = true;
    updatedOrderForm[inputValue] = updatedElement;
    this.setState({ orderForm: updatedOrderForm });
  }

  public checkValidity = (value: string, rules: any): boolean => {
    let isValid = true;

    if (rules.required && isValid) {
      isValid = value.trim() !== '';
    }

    if (rules.minLength && isValid) {
      isValid = value.length >= rules.minLength
    }

    return isValid;
  }

  public render(): JSX.Element {

    const formElements = Object.keys(this.state.orderForm).reduce((form, element) => 
      [...form, { id: element, config: this.state.orderForm[element] }], []);

    const elem = this.props.loading 
      ? <Spinner />
      : <React.Fragment>
          <h4>Enter your contact information</h4>
          <form onSubmit={() => this.orderHandler(event)}>
            {formElements.map((element: any) => (
              <Input key={element.id} 
                     elementtype={element.config.elementtype} 
                     elementConfig={element.config.elementConfig}
                     value={element.config.value}
                     valid={element.config.valid}
                     shouldValidate={element.config.validation}
                     touched={element.config.touched}
                     changed={(event: any) => this.inputChangedHandler(event, element.id)}/>
            ))
            }
          
            <Button type="submit" buttonType="Success" clicked={() => {return}}>Order Here</Button>
          </form>
        </React.Fragment>
    return (
      <div className="ContactData">
        {elem}
      </div>
    )
  }

}

const mapStateToProps = (state: any) => ({
  price: state.burgerBuilder.totalPrice,
  ingredients: state.burgerBuilder.ingredients,
  loading: state.orders.loading
})

const mapDispatchToProps = (dispatch: any) => ({
  onOrderBurger: (orderData: object) => dispatch(actions.purchaseBurger(orderData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);