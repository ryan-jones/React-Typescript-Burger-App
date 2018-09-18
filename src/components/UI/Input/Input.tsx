
import * as React from 'react';
import './Input.scss';

const input = (props: any): JSX.Element => {

  let elementType = null
  let errorMessage = null;
  const inputClasses = ['Element'];

  if (!props.valid && props.shouldValidate && props.touched) {
    inputClasses.push('Invalid');
    errorMessage = props.elementConfig.placeholder === 'Your postal code' 
      ? <p>Please enter a 5 digit postal code</p>
      : <p>Please fill in the selected field</p>
  }

  switch(props.elementtype) {
    case 'textarea':
      elementType = <textarea 
                      onChange={props.changed}
                      className={inputClasses.join(' ')} 
                      {...props.elementConfig} 
                      value={props.value}/>;
      break;
    case 'select':
      elementType = <select 
                      onChange={props.changed}
                      className={inputClasses.join(' ')} 
                      value={props.value}>
                        {props.elementConfig.options.map((option: any, index: number) => 
                          <option key={index} value={option.value}>{option.displayValue}</option>
                        )}
                    </select>
      break;
    case 'input':
    default:
      elementType = <input 
                      onChange={props.changed}  
                      className={inputClasses.join(' ')} 
                      {...props.elementConfig} 
                      value={props.value}/>
      break;
  }
  return (
    <div className="Input">
      <label className="Label">
        {props.label}
      </label>
      {elementType}
      {errorMessage}
    </div>
  )
}

export default input;