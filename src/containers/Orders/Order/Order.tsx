import * as React from 'react';
import './Order.scss';

const order = (props: { ingredients: any, price: number }) => {

  const ingredients = Object.keys(props.ingredients).map((ingredient: string) => {
    return <p style={{ textTransform: 'capitalize' }} key={ingredient}>{ingredient}: {props.ingredients[ingredient]}</p>
  })
  return (
    <div className="Order">
      {ingredients}
      <strong><p>Price: ${props.price.toFixed(2)}</p></strong>
    </div>
  )
}

export default order;